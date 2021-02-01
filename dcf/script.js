'use strict';

let revealButton = document.getElementById('reveal');
revealButton.addEventListener('click', () => {
  revealButton.style.display = 'none';
  document.getElementById('timeline').style.display = 'flex';

  setTimeout(() => {
    for (let e of document.getElementsByClassName('timeline-event'))
      e.style.opacity = 1;
  }, 50);
})
