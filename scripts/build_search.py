from html.parser import HTMLParser
from pathlib import Path
import argparse
import json

ROOT = Path(__file__).resolve().parents[1]

class ChapterText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.depth = 0
        self.skip = 0
        self.title_depth = 0
        self.title_parts = []
        self.parts = []
    def handle_starttag(self, tag, attrs):
        if tag == "title": self.title_depth += 1
        if tag == "article": self.depth += 1
        if tag in ("script", "style", "button"): self.skip += 1
    def handle_endtag(self, tag):
        if tag == "title": self.title_depth = max(0, self.title_depth - 1)
        if tag == "article": self.depth = max(0, self.depth - 1)
        if tag in ("script", "style", "button"): self.skip = max(0, self.skip - 1)
    def handle_data(self, value):
        if self.title_depth: self.title_parts.append(value)
        if self.depth and not self.skip: self.parts.append(value)

def build():
    chapters = []
    for path in sorted(ROOT.glob("*.html")):
        if path.name == "index.html": continue
        parser = ChapterText()
        parser.feed(path.read_text())
        title = "".join(parser.title_parts).split(" | ")[0].strip()
        text = " ".join(" ".join(parser.parts).split())
        if not title or not text:
            raise SystemExit(f"Incomplete chapter: {path.name}")
        chapters.append({"url": "./" + path.name, "title": title, "text": text})
    return json.dumps({"version": 2, "chapters": chapters}, ensure_ascii=False, separators=(",", ":"))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    path = ROOT / "assets/search-index.json"
    output = build()
    if args.check:
        if not path.exists() or path.read_text() != output:
            raise SystemExit("Search index is stale; run python3 scripts/build_search.py")
        print("PASS: search index matches complete chapter contents")
    else:
        path.write_text(output)
        print("Built search index")
