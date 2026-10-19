const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website project inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Hi Chris,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`);
  const link = document.createElement('a');
  link.href = `mailto:hello@chrisdavidstudios.com?subject=${subject}&body=${body}`;
  link.textContent = 'Open your email draft';
  document.querySelector('#form-status').replaceChildren('Your draft is ready. ', link, ' and send it from your email app to complete your inquiry.');
});
