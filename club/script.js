var value_buttons = document.getElementsByClassName('value-button');
var value_content = document.getElementsByClassName('value-content');
var value_dots = document.getElementsByClassName('dot');

function changeActiveValue(e) {
  var target = e.target.dataset.target;
  for (var i of value_buttons)
    i.className = 'value-button' + (i.dataset.target === target ? ' active' : '');
  for (var i of value_dots)
    i.className = 'dot' + (i.dataset.target === target ? ' active' : '');
  for (var i of value_content)
    i.className = 'content value-content' + (i.id === target ? ' active' : '');
}

for (var i of value_buttons)
  i.addEventListener('click', changeActiveValue);
for (var i of value_dots)
  i.addEventListener('click', changeActiveValue);


var zoom_portraits = document.getElementsByClassName('zoom-portrait');
var modal_backdrop = document.getElementById('modal-backdrop');
var modals = document.getElementsByClassName('modal');

function activateModal(e) {
  var target = e.currentTarget.dataset.target;
  for (var i of modals) {
    i.className = 'modal';
    i.style.display = 'none';
  }
  document.getElementById(target).style.display = 'block';
  modal_backdrop.style.display = 'block';
  setTimeout(() => {
    document.getElementById(target).className = 'modal active';
    modal_backdrop.className = 'active';
  }, 50)
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  for (var i of modals)
    i.className = 'modal';
  modal_backdrop.className = '';
  setTimeout(() => {
    for (var i of modals)
      i.style.display = 'none';
    modal_backdrop.style.display = 'none';
  }, 100);
  document.body.style.overflow = 'auto';
}

for (var i of zoom_portraits)
  i.addEventListener('click', activateModal);
modal_backdrop.addEventListener('click', closeModal);
