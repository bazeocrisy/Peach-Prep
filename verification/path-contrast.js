/* Solid-color text contrast check; avoids canvas in the packaged audit browser.
   Reports unsupported image/opacity backgrounds rather than claiming a result. */
() => {
  const root = document.querySelector('.screen:not([hidden])');
  const rgba = s => {
    const v = s.match(/[\d.]+/g);
    return v && v.length >= 3 ? [+v[0], +v[1], +v[2], v[3] === undefined ? 1 : +v[3]] : null;
  };
  const over = (fg, bg) => fg.slice(0, 3).map((c, i) => c * fg[3] + bg[i] * (1 - fg[3])).concat(1);
  const lum = c => c.slice(0, 3).map(x => { x /= 255; return x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4; }).reduce((v, c, i) => v + c * [.2126, .7152, .0722][i], 0);
  let checked = 0, minimum = 100;
  const failures = [], unsupported = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const e = node.parentElement, text = node.textContent.trim();
    if (!text || !e.getClientRects().length || e.closest('button:disabled')) continue;
    const style = getComputedStyle(e);
    if (style.visibility === 'hidden') continue;
    const ancestors = []; for (let p = e; p; p = p.parentElement) ancestors.unshift(p);
    if (ancestors.some(p => getComputedStyle(p).backgroundImage !== 'none' || +getComputedStyle(p).opacity < 1)) { unsupported.push(text.slice(0, 70)); continue; }
    let bg = [255, 255, 255, 1];
    for (const p of ancestors) { const c = rgba(getComputedStyle(p).backgroundColor); if (c) bg = over(c, bg); }
    const color = rgba(style.color); if (!color) { unsupported.push(text.slice(0, 70)); continue; }
    const fg = over(color, bg), a = lum(fg), b = lum(bg), ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
    const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.666 && parseInt(style.fontWeight, 10) >= 700);
    const required = large ? 3 : 4.5;
    checked++; minimum = Math.min(minimum, ratio);
    if (ratio + .001 < required) failures.push({ text: text.slice(0, 90), ratio, required, foreground: style.color, background: bg });
  }
  return { checked, minimum, failures, unsupported };
}
