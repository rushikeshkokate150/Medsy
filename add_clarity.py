"""Usage: python3 add_clarity.py
1. Save the Clarity tracking code (the whole <script>...</script> block) in a file named clarity.txt next to this script.
2. Run this script. It replaces the placeholder comment in every .html page."""
import glob,sys
code=open('clarity.txt').read().strip()
if '<script' not in code: sys.exit('clarity.txt must contain the full <script> block from Clarity')
for f in glob.glob('*.html'):
    s=open(f).read()
    if 'PASTE CLARITY TRACKING CODE HERE' in s:
        open(f,'w').write(s.replace('<!-- PASTE CLARITY TRACKING CODE HERE -->',code));print('updated',f)
