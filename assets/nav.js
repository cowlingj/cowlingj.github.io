function openNav() {
  document.querySelector('nav').classList.remove('hidden');
}

function toggleNav() {
  document.querySelector('nav').classList.toggle('hidden');
}

function closeNav() {
  document.querySelector('nav').classList.add('hidden');
}

Array.from(document.querySelectorAll('.open-nav')).forEach(el => {
  el.addEventListener('click', openNav)
});

Array.from(document.querySelectorAll('.close-nav')).forEach(el => {
  el.addEventListener('click', closeNav)
});

Array.from(document.querySelectorAll('.toggle-nav')).forEach(el => {
  el.addEventListener('click', toggleNav)
});

