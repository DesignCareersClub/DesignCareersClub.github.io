'use strict';

var email_link = document.getElementById('email-link');
email_link.addEventListener('click', () => {
  email_link.innerHTML = 'copied to clipboard!';
  email_link.className = 'active';
  setTimeout(() => {
    email_link.innerHTML = 'designcareersclub@gmail.com';
    email_link.className = '';
  }, 2000);
});

var modal_backdrop = document.getElementById('modal-backdrop');
var mobile_nav_button = document.getElementById('mobile-nav-button');
var mobile_nav = document.getElementById('mobile-nav');
var mobile_nav_exit = document.getElementById('mobile-nav-exit');

function activateMobileNav() {
  mobile_nav.style.display = 'block';
  modal_backdrop.style.display = 'block';
  setTimeout(() => {
    mobile_nav.className = 'mobile-nav-menu active';
    modal_backdrop.className = 'active';
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobile_nav.className = 'mobile-nav-menu';
  modal_backdrop.className = '';
  setTimeout(() => {
    mobile_nav.style.display = 'none';
    modal_backdrop.style.display = 'none';
  }, 200);
  document.body.style.overflow = 'auto';
}

mobile_nav_button.addEventListener('click', activateMobileNav);
modal_backdrop.addEventListener('click', closeMobileNav);
mobile_nav_exit.addEventListener('click', closeMobileNav);
