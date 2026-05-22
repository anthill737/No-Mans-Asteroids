export interface GameOverScreen {
  show(): void;
  hide(): void;
}

export function createGameOverScreen(onRestart: () => void): GameOverScreen {
  const overlay = document.createElement('div');
  overlay.id = 'game-over';
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: '0',
    background: 'rgba(0,0,0,0.85)',
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '100',
    fontFamily: 'monospace',
  });

  const title = document.createElement('h1');
  title.textContent = 'SHIP DESTROYED';
  Object.assign(title.style, {
    fontSize: '3rem',
    margin: '0 0 1rem',
    letterSpacing: '0.2em',
    color: '#ff3300',
  });

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Hull integrity at zero.';
  Object.assign(subtitle.style, {
    fontSize: '1rem',
    color: '#888',
    margin: '0 0 2rem',
  });

  const btn = document.createElement('button');
  btn.id = 'restart-btn';
  btn.textContent = 'RESTART';
  Object.assign(btn.style, {
    padding: '0.75rem 2.5rem',
    fontSize: '1.2rem',
    fontFamily: 'monospace',
    background: '#200000',
    color: '#ff5500',
    border: '2px solid #ff3300',
    cursor: 'pointer',
    letterSpacing: '0.1em',
  });
  btn.addEventListener('click', onRestart);

  overlay.append(title, subtitle, btn);
  document.body.appendChild(overlay);

  document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'none') return;
    if (e.key === 'r' || e.key === 'R' || e.key === 'Enter') onRestart();
  });

  return {
    show() {
      overlay.style.display = 'flex';
      btn.focus();
    },
    hide() {
      overlay.style.display = 'none';
    },
  };
}
