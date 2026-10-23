from pathlib import Path
import html

items = [
 ('brownie','Brownie','rect'),('chocolava','Chocolava','lava'),('donuts','Donuts','donut'),
 ('dryfruit-butter-biscuits','Dry Fruit Butter Biscuits','biscuit'),('butter-salt-biscuits','Butter Salt Biscuits','biscuit2'),
 ('milk-cake','Milk Cake','square'),('plum-cake','Plum Cake','loaf'),('sponge-cake','Sponge Cake','round'),
 ('cup-cakes','Cup Cakes','cup'),('bread','Bread','bread'),('rusk-toast','Rusk (Toast)','rusk'),
 ('cream-buns','Cream Buns','bun'),('fruit-buns','Fruit Buns','fruitbun'),('jam-buns','Jam Buns','jambun')]

colors = {
 'bg':'#fff7f2','cream':'#fffdfb','brown':'#6b4037','pink':'#d98d9b','peach':'#f2b49c','gold':'#dcae5d','dark':'#3b2927','green':'#8da77b','red':'#c66d68'
}

def common(title, art):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{colors['bg']}"/><stop offset="1" stop-color="#f4e0d6"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="16" stdDeviation="18" flood-opacity=".12"/></filter></defs>
<rect width="900" height="650" rx="36" fill="url(#g)"/><circle cx="105" cy="100" r="70" fill="#fff" opacity=".45"/><circle cx="790" cy="535" r="90" fill="#fff" opacity=".4"/>
<text x="55" y="82" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="{colors['brown']}" opacity=".8">BAKEFLOW • BAKERY FAVOURITE</text>
{art}
<text x="55" y="595" font-family="Arial, sans-serif" font-size="38" font-weight="800" fill="{colors['dark']}">{html.escape(title)}</text>
<text x="55" y="625" font-family="Arial, sans-serif" font-size="18" fill="{colors['brown']}" opacity=".72">Illustrative menu image • confirm current availability with bakery</text>
</svg>'''

def art(kind):
    if kind=='rect': return '''<g filter="url(#s)"><rect x="245" y="220" width="410" height="210" rx="28" fill="#5a332b"/><rect x="260" y="205" width="380" height="58" rx="25" fill="#7b493d"/><path d="M275 305h350M275 350h350" stroke="#9b6253" stroke-width="12" opacity=".7"/><circle cx="360" cy="250" r="8" fill="#f1c989"/><circle cx="440" cy="250" r="8" fill="#f1c989"/><circle cx="520" cy="250" r="8" fill="#f1c989"/></g>'''
    if kind=='lava': return '''<g filter="url(#s)"><path d="M280 230h340l-35 225H315z" fill="#5a3028"/><path d="M330 245h240l-22 180H352z" fill="#7c4335"/><path d="M450 265c-35 55-48 75-20 120 28-32 55-53 22-120z" fill="#f0a15e"/><path d="M455 300c-18 34-20 50-2 70 18-21 28-37 2-70z" fill="#ffd47e"/></g>'''
    if kind=='donut': return '''<g filter="url(#s)"><circle cx="450" cy="330" r="155" fill="#d99569"/><circle cx="450" cy="330" r="68" fill="#fff7f2"/><path d="M330 265c50-70 180-80 240 15" stroke="#f4b4bf" stroke-width="42" fill="none" stroke-linecap="round"/><path d="M345 235l18 8M390 210l18 6M505 218l18-7M555 250l18-6" stroke="#fff" stroke-width="10" stroke-linecap="round"/></g>'''
    if kind in ('biscuit','biscuit2'): return '''<g filter="url(#s)"><rect x="245" y="255" width="410" height="155" rx="55" fill="#d9a05f"/><rect x="265" y="275" width="370" height="115" rx="45" fill="#edc17d"/><circle cx="340" cy="315" r="10" fill="#7b5035"/><circle cx="405" cy="350" r="9" fill="#7b5035"/><circle cx="490" cy="315" r="10" fill="#7b5035"/><circle cx="555" cy="350" r="9" fill="#7b5035"/></g>'''
    if kind=='square': return '''<g filter="url(#s)"><rect x="275" y="235" width="350" height="205" rx="18" fill="#f0c9a0"/><rect x="295" y="215" width="310" height="55" rx="20" fill="#fff0df"/><path d="M315 305h270M315 355h270" stroke="#d9a777" stroke-width="13"/><circle cx="370" cy="250" r="8" fill="#b47750"/><circle cx="530" cy="250" r="8" fill="#b47750"/></g>'''
    if kind=='loaf': return '''<g filter="url(#s)"><path d="M275 390c-15-95 25-175 175-175s190 80 175 175c-80 40-270 40-350 0z" fill="#7d4d39"/><path d="M335 250l35 55M420 225l25 60M505 245l20 55" stroke="#d7a16e" stroke-width="17" stroke-linecap="round"/><path d="M315 385h270" stroke="#5c372c" stroke-width="12" opacity=".5"/></g>'''
    if kind=='round': return '''<g filter="url(#s)"><circle cx="450" cy="330" r="145" fill="#e9b98b"/><circle cx="450" cy="295" r="125" fill="#fff4e8"/><path d="M350 310c55-55 145-65 205 0" stroke="#d99a76" stroke-width="18" fill="none"/><path d="M360 355c60 30 125 30 180 0" stroke="#d99a76" stroke-width="16" fill="none"/></g>'''
    if kind=='cup': return '''<g filter="url(#s)"><path d="M335 300h230l-28 150H363z" fill="#d88c8c"/><path d="M320 305c0-85 260-85 260 0 0 58-260 58-260 0z" fill="#fff1e6"/><path d="M350 275c50-65 150-70 200 0" stroke="#f0a6b2" stroke-width="30" fill="none" stroke-linecap="round"/><circle cx="450" cy="260" r="14" fill="#d27b79"/></g>'''
    if kind=='bread': return '''<g filter="url(#s)"><path d="M245 370c0-95 45-150 110-150h190c65 0 110 55 110 150H245z" fill="#c58b52"/><path d="M275 355c0-70 35-105 80-105h190c45 0 80 35 80 105" fill="#e5b878"/><path d="M350 270l20 45M430 255l20 55M510 270l20 45" stroke="#b87a45" stroke-width="15" stroke-linecap="round"/></g>'''
    if kind=='rusk': return '''<g filter="url(#s)"><g transform="rotate(-12 450 330)"><rect x="290" y="270" width="115" height="210" rx="18" fill="#d8a15e"/><rect x="420" y="255" width="115" height="210" rx="18" fill="#c98f50"/><rect x="550" y="275" width="90" height="190" rx="18" fill="#e1ad6b"/></g></g>'''
    if kind=='bun': return '''<g filter="url(#s)"><circle cx="450" cy="345" r="145" fill="#d99a5e"/><circle cx="450" cy="345" r="110" fill="#edbc78"/><path d="M360 330c55-45 125-45 180 0" stroke="#fff4e4" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M385 385c45 25 85 25 130 0" stroke="#fff4e4" stroke-width="18" fill="none" stroke-linecap="round"/></g>'''
    if kind=='fruitbun': return '''<g filter="url(#s)"><circle cx="450" cy="345" r="145" fill="#d99a5e"/><circle cx="450" cy="330" r="112" fill="#f1c27d"/><circle cx="390" cy="300" r="20" fill="#c95d63"/><circle cx="450" cy="275" r="20" fill="#7aa16a"/><circle cx="515" cy="310" r="20" fill="#e1a34f"/><circle cx="420" cy="360" r="18" fill="#b46b56"/><circle cx="485" cy="370" r="18" fill="#c95d63"/></g>'''
    if kind=='jambun': return '''<g filter="url(#s)"><circle cx="450" cy="345" r="145" fill="#d99a5e"/><circle cx="450" cy="330" r="112" fill="#f1c27d"/><path d="M370 305c50-40 100-40 160 0" stroke="#d05c70" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M395 355c35 30 75 30 110 0" stroke="#c94e66" stroke-width="22" fill="none" stroke-linecap="round"/></g>'''

out=Path(__file__).resolve().parent / "images" / "menu"
out.mkdir(parents=True, exist_ok=True)

for slug,title,kind in items:
    (out/f"{slug}.svg").write_text(common(title, art(kind)), encoding='utf-8')
print('created', len(items))
