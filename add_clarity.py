import glob, sys
code = open('clarity.txt', encoding='utf-8-sig').read().strip()
if '<script' not in code:
    sys.exit('clarity.txt must contain the full <script> block from Clarity')
for f in glob.glob('*.html'):
    s = open(f, encoding='utf-8').read()
    if 'PASTE CLARITY TRACKING CODE HERE' in s:
        s = s.replace('<!-- PASTE CLARITY TRACKING CODE HERE -->', code)
        open(f, 'w', encoding='utf-8').write(s)
        print('updated', f)