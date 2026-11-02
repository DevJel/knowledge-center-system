from pathlib import Path
import json
import re
from urllib.parse import urlsplit

root = Path(__file__).resolve().parents[1]
chapters = json.loads((root / "config/chapters.json").read_text())
worker = (root / "workers/knowledge-center-updates/worker.mjs").read_text()
match = re.search(r"^export const CHAPTERS = (.+);$", worker, re.M)
assert match, "Missing embedded registry"
assert json.loads(match.group(1)) == chapters, "Worker and chapter registry differ"
assert len({c["id"] for c in chapters}) == len(chapters), "Duplicate chapter IDs"
assert [c["order"] for c in chapters] == list(range(len(chapters))), "Non-contiguous daily slots"
for chapter in chapters:
    page = root / (chapter["id"] + ".html")
    assert page.exists(), "Missing HTML " + chapter["id"]
    assert 'data-chapter-id="' + chapter["id"] + '"' in page.read_text(), "Missing update panel"
    assert 1 <= len(chapter["references"]) <= 3, "Unbounded source count"
    for source in chapter["references"]:
        url = urlsplit(source)
        assert url.scheme == "https" and url.hostname and not url.username and not url.port, "Invalid source URL"
    assert all(any(other["id"] == related for other in chapters) for related in chapter["related"]), "Missing related chapter"
config = json.loads((root / "workers/knowledge-center-updates/wrangler.jsonc").read_text())
assert config["triggers"]["crons"] == [f"0-{len(chapters)-1} 0 * * *"], "Schedule does not cover registry"
print(f"PASS: {len(chapters)} chapters, related links, source bounds, embedded registry and daily schedule")
