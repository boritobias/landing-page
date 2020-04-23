const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section[data-nav]');
const navbarList = document.getElementById('navbar__list');

// helper functions

function createNewListElement(el) {
  const listitem = document.createElement('li');
  const link = document.createElement('a');

  link.setAttribute('href', `#${el.getAttribute('id')}`);
  link.setAttribute('class', 'menu__link');

  link.textContent = el.getAttribute('data-nav');

  listitem.appendChild(link);
  fragment.appendChild(listitem);
}

function isInViewport(el) {
  const bounding = el.getBoundingClientRect();
  return (
    bounding.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) &&
    bounding.top >= -(window.innerHeight / 2 || document.documentElement.clientHeight / 2)
  );
}

// navigation

sections.forEach((el) => createNewListElement(el));
navbarList.appendChild(fragment);

// Add class 'active' to section when near top of viewport

function toggleActiveClass() {
  sections.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('your-active-class');
    } else {
      el.classList.remove('your-active-class');
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToId(section) {
  section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to section on link click
document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    const sec = document.querySelector(e.target.getAttribute('href'));
    scrollToId(sec);
  }
});

// Set sections as active
document.addEventListener('scroll', (e) => {
  toggleActiveClass();
});
