# Xuan Wang — Academic Homepage

A static English academic homepage for Xuan Wang, Research Fellow at NTU.

The design follows the user-requested reference at https://chenyangsi.top/:
the same template typography, navigation, section spacing, circular profile image,
featured research card, two-column research grid, and footer treatment. The palette
has been adapted to the requested fresh green theme. All professional text is
Xuan Wang's own information; no PRLab members, affiliations, recruitment claims,
visitor tracking, or contact information are copied.

## Contents

- `index.html`: profile, biography, 10 research publications from 2025–2026, news, experience.
- `publications.html`: 10 displayed publications grouped by conference/publication year.
- `styles.css`, `main.js`: template styling and accessible navigation behavior.
- `assets/`: locally served fonts, icons, profile photo, and original illustrations for seven papers.
- `robots.txt`, `sitemap.xml`: indexing metadata for the intended GitHub Pages URL.
- `.github/workflows/pages.yml`: a prepared GitHub Pages deployment workflow.

## Local preview

From this directory, run `python -m http.server 4173 --bind 127.0.0.1`, then
open http://127.0.0.1:4173/. No package installation or build is required.

## Publication status

The user approved GitHub publication on 6 October 2026.

Repository: `XXuanWang/xxuanwang.github.io`.
Public site URL: https://xxuanwang.github.io/.
Create the repository, upload the reviewed files, and set
Settings → Pages → Source to GitHub Actions. Verify the completed deployment.

GitHub domain access and search-engine indexing are separate: metadata and a
sitemap prepare the site for indexing, but search engines control inclusion
and timing. See https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl.

## Content sources and review notes

- Personal identity, current role, collaboration, education, and current research
  interests: supplied directly by the user on 6 October 2026.
- Twelve papers and complete author lists: the supplied public Google Scholar
  profile, re-inspected on 6 October 2026:
  https://scholar.google.com/citations?user=oRh9HWsAAAAJ&hl=en&pagesize=100.
- Paper links and concise summaries: Scholar's article detail pages and the
  publisher/arXiv records linked from each publication.
- Lie Detector is displayed as NeurIPS 2025, following its conference proceedings
  URL and volume 38. Scholar lists the proceedings publication date in 2026;
  the two dates should not be mistaken for two different papers.
- News records use documented release/publication dates, not inferred acceptance dates.
- `assets/profile.jpg` is the profile photo supplied by the user on 6 October 2026.
- The research overview image is Figure 1 of arXiv:2608.04314v1, credited below
  the image. It is used in context with its associated paper.
- No email, doctoral year, academic services, or recruitment announcements have
  been invented. Add them only when supplied by the user.

## Third-party assets

Bootstrap and Bootstrap Icons retain their MIT license notices in their CSS.
DM Sans and Lora are supplied with their SIL Open Font License texts in
`assets/licenses/`. Font, icon, CSS, and image files are served locally.

## Latest content update

- 13 papers: the 12 currently visible on Scholar, plus the user-supplied
  EMNLP 2026 Main Conference accepted paper.
- Added arXiv:2609.33445 and arXiv:2609.33304 with full author lists and paper/PDF links.
- The EMNLP record includes the user-provided full abstract, keywords, license,
  published date (21 August 2026), and last modification date (30 September 2026).
  Its public paper URL is not yet supplied, so no paper or PDF URL is invented.
- The latest EMNLP paper is featured first in Research and in the 2026 publication group.
- Prof. is added to Wei Yang Bryan Lim in the profile, biography, experience,
  and description metadata. Bibliographic author lists retain publication names.

## Illustration and display update

- Both pages display only 2025–2026 papers: 10 publications. Earlier records
  are preserved in publications.json but are not rendered on either page.
- Seven papers have original illustrations, with source links in figure captions
  and image metadata in publications.json. Click each illustration to view it at full size.
- Figure 2 from Concept Score Relearning and ExpActivator; Figure 1 from
  Adversarial Attacks for Good and Poison Once; Figure 2 from Lie Detector's
  official NeurIPS PDF (page 4); Figure 1 from A3's official CVPR PDF (page 5);
  Flareon's paper thumbnail from coauthor Yiren Zhao's publication page.
- EMNLP Emergent Backdoors, StreamGuard, and On the Adversarial Robustness
  of Visual-Language Chat Models have no illustrations, as requested by the user
  while their original figures are unavailable. No substitute diagrams are displayed.
