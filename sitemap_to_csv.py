# save as: sitemap_to_csv.py
import csv
import re
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

SITEMAP_FILE = "sitemap.xml"
OUT_CSV = "friendstravelvietnam_urls.csv"

# --- helpers ---
def classify(path: str) -> str:
    p = path.strip("/")

    if p == "":
        return "home"
    if p.startswith("vietnam/hotels"):
        return "hotels"
    if p.startswith("vietnam/cruises"):
        return "cruises"
    if p.startswith("vietnam/excursions-tours-trips"):
        return "excursions-tours-trips"
    if p.startswith("vietnam/travel-tour"):
        return "travel-tour"
    if p.startswith("vietnam/travel-packages"):
        return "travel-packages"
    if p.startswith("vietnam/holiday-building-blocks"):
        return "holiday-building-blocks"
    if p.startswith("vietnam/transportations"):
        return "transportations"
    if p.startswith("vietnam/faqs") or p == "faqs" or "faq" in p:
        return "faqs"
    if p.startswith("vietnam/about-us") or p in {"about", "meet-our-team", "this-is-what-we-do"}:
        return "about"
    if p in {"contact", "contact-us"}:
        return "contact"
    if p.endswith("policy") or p in {"privacy-policy", "responsible-travel-policy"}:
        return "policy"
    if p.startswith("newpage") or re.search(r"[a-f0-9]{6,}$", p):
        return "unknown/test"
    return "blog/other"

def strip_slash_url(u: str) -> str:
    # normalize trailing slash
    return u.rstrip("/")

# --- parse ---
tree = ET.parse(SITEMAP_FILE)
root = tree.getroot()

# namespaces
ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

rows = []
for url_node in root.findall("sm:url", ns):
    loc = url_node.findtext("sm:loc", default="", namespaces=ns).strip()
    lastmod = url_node.findtext("sm:lastmod", default="", namespaces=ns).strip()
    changefreq = url_node.findtext("sm:changefreq", default="", namespaces=ns).strip()
    priority = url_node.findtext("sm:priority", default="", namespaces=ns).strip()

    if not loc:
        continue

    loc_norm = strip_slash_url(loc)
    parsed = urlparse(loc_norm)
    path = parsed.path
    category = classify(path)

    rows.append({
        "url": loc_norm,
        "path": path,
        "category": category,
        "lastmod": lastmod,
        "changefreq": changefreq,
        "priority": priority,
    })

# --- dedupe ---
seen = set()
unique = []
dupes = []
for r in rows:
    if r["url"] in seen:
        dupes.append(r["url"])
    else:
        seen.add(r["url"])
        unique.append(r)

# --- write ---
unique_sorted = sorted(unique, key=lambda x: (x["category"], x["path"]))
with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["category", "url", "path", "lastmod", "changefreq", "priority"])
    w.writeheader()
    w.writerows(unique_sorted)

print("Total entries in sitemap:", len(rows))
print("Unique URLs:", len(unique))
print("Duplicates found:", len(dupes))
print("CSV written:", OUT_CSV)
