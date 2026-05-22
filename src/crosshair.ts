export function createCrosshair(): void {
  const el = document.createElement('div');
  el.style.cssText = [
    'position:fixed',
    'top:50%',
    'left:50%',
    'width:16px',
    'height:16px',
    'transform:translate(-50%,-50%)',
    'pointer-events:none',
    'z-index:10',
  ].join(';');

  // Horizontal bar
  const h = document.createElement('div');
  h.style.cssText = [
    'position:absolute',
    'top:50%',
    'left:0',
    'right:0',
    'height:1px',
    'margin-top:-0.5px',
    'background:rgba(255,255,255,0.85)',
  ].join(';');

  // Vertical bar
  const v = document.createElement('div');
  v.style.cssText = [
    'position:absolute',
    'left:50%',
    'top:0',
    'bottom:0',
    'width:1px',
    'margin-left:-0.5px',
    'background:rgba(255,255,255,0.85)',
  ].join(';');

  el.appendChild(h);
  el.appendChild(v);
  document.body.appendChild(el);
}
