/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const fragment = document.createDocumentFragment();

const sections = document.querySelectorAll('section[data-nav]');

const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function createNewListElement(el) {
  const link = document.createElement('a');
  link.setAttribute('href', `#${el.getAttribute('id')}`);

  const listitem = document.createElement('li');
  listitem.textContent = el.getAttribute('data-nav');
  link.appendChild(listitem);

  fragment.appendChild(link);
}

function isInViewport(el) {
  const bounding = el.getBoundingClientRect();
  return (
    bounding.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) &&
    bounding.top >= -(window.innerHeight / 2 || document.documentElement.clientHeight / 2)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach((el) => createNewListElement(el));

navbarList.appendChild(fragment);

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', (e) => {
  sections.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.toggle('your-active-class');
    } else {
      el.classList.remove('your-active-class');
    }
  });
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
