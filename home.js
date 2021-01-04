'use strict';

var email_link = document.getElementById('email-link');
email_link.addEventListener('click', function() {
  email_link.innerHTML = 'copied to clipboard!';
  email_link.className = 'active';
  setTimeout(() => {
    email_link.innerHTML = 'designcareersclub@gmail.com';
    email_link.className = '';
  }, 2000);
});
