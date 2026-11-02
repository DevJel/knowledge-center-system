from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import sys

root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
errors = []
pages = sorted(root.glob("*.html"))

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.headings = 0
        self.main = 0
        self.article = 0
        self.current = 0
        self.dialog = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        identity = attrs.get("id")
        if identity:
            if identity in self.ids:
                errors.append(f"{self.filename}: duplicate id {identity}")
            self.ids.add(identity)
        if tag == "h1": self.headings += 1
        if tag == "main": self.main += 1
        if tag == "article": self.article += 1
        if tag == "dialog": self.dialog += 1
        if attrs.get("aria-current") == "page": self.current += 1
        if tag in ("a", "link", "script", "img"):
            value = attrs.get("href") or attrs.get("src")
            if value: self.links.append(value)

for path in pages:
    parser = Page()
    parser.filename = path.name
    source = path.read_text()
    parser.feed(source)
    if parser.headings != 1:
        errors.append(f"{path.name}: expected one h1, got {parser.headings}")
    if parser.main != 1 or parser.article < 1:
        errors.append(f"{path.name}: missing main or article")
    if parser.current != 1:
        errors.append(f"{path.name}: expected one active chapter")
    if parser.dialog != 1:
        errors.append(f"{path.name}: missing search dialog")
    if 'assets/knowledge.js' in source:
        errors.append(f"{path.name}: obsolete renderer loaded")
    for value in parser.links:
        url = urlsplit(value)
        if url.scheme or url.netloc: continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        if not target.exists():
            errors.append(f"{path.name}: missing local target {value}")
        if not url.path and url.fragment and url.fragment not in parser.ids:
            errors.append(f"{path.name}: missing local anchor {value}")

index_path = root / "assets/search-index.json"
if index_path.exists():
    index = json.loads(index_path.read_text())
    chapters = index.get("chapters", [])
    if len(chapters) != len(pages) - 1:
        errors.append("Search index does not cover every distinct chapter")
    for chapter in chapters:
        if not (root / chapter["url"]).exists() or not chapter.get("text"):
            errors.append("Invalid search index chapter")
else:
    errors.append("Missing search index")

if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print(f"PASS: {len(pages)} HTML documents; headings, landmarks, navigation, anchors, assets and search coverage")
