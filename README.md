# MAGIC website — SEO and AI-discovery review build

This is an unpublished local review build for `Alexberik/alex_card`. It has not been pushed to GitHub and does not change the live site.

## Files
- `index.html` — page structure, SEO metadata, JSON-LD (`Organization`, `WebSite`, `ProfessionalService`, `FAQPage`) and visible FAQ.
- `style.css` — responsive design and accessible FAQ styling.
- `script.js` — mobile navigation, scroll progress, reveal effects. FAQ answers use native HTML `<details>` and remain available without JavaScript.
- `robots.txt` — allows general crawling and points to the sitemap.
- `sitemap.xml` — canonical homepage URL.
- `llms.txt` — concise machine-readable summary and accuracy guidance for AI-assisted discovery. It is a useful convention, not a guarantee of indexing or AI citations.

## SEO / AI discovery changes
- More specific Russian title and description, canonical URL, Open Graph and Twitter metadata.
- Semantic structured data for the brand, website, service and FAQ; FAQ answers are also visible in page HTML.
- Clearer entity and service descriptions, contact link, product status, indicative pricing and scope caveats.
- FAQ navigation link and native accessible accordions.
- Sitemap, robots.txt and llms.txt added.

## Important before publication
- Confirm the listed starting prices (149 / 499 / 1,199 GEL).
- Confirm the current status/descriptions of JobHunterAI, SellAI, AI-Office and Media Farm.
- Confirm whether the Georgia relocation/business/auto support block should remain.
- The current English switch remains a placeholder; it is disabled so it does not falsely imply a working translation. A real English page should be added before enabling language switching.
- Add a verified `og:image` URL when a suitable social-preview image exists in the repository.
- Check the rendered page on mobile and desktop after publishing, then verify canonical URL, sitemap availability and crawl/index status in Google Search Console and Bing Webmaster Tools.

## Validation
The JavaScript is syntax-checked; JSON-LD is parse-checked; links/anchors and FAQ schema-to-visible-copy are checked locally. Search-engine inclusion and AI citation cannot be guaranteed by markup alone.
