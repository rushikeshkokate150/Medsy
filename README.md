# Medsy (prototype website for Clarity usability test)

Pages: index, search, product, compare, upload, checkout, track, monthly, labs, doctor, ayurvedic, products, records
Main flow: index -> search -> product -> compare -> upload -> checkout -> track

## Host it free (GitHub Pages)
1. Create a new GitHub repository (public).
2. Upload ALL files in this folder (index.html must be at the top level).
3. Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
4. Wait 1-2 minutes. Your URL: https://<your-username>.github.io/<repo-name>/

## Add Microsoft Clarity
1. Clarity > Settings > Setup > Install manually > Copy tracking code.
2. Save the full <script>...</script> block in a file named clarity.txt in this folder.
3. Run: python3 add_clarity.py   (it pastes the code into every page's <head>)
4. Upload the updated files to GitHub again.
Or paste the code by hand where each page says: <!-- PASTE CLARITY TRACKING CODE HERE -->

## Prototype notes
- Upload page: choosing any file marks it verified after about 2 seconds, then Continue opens Checkout.
- On Checkout, "Place Order" stays disabled (as in the design). This is a test point, not a bug.
- No data is sent anywhere; the site is front-end only.
