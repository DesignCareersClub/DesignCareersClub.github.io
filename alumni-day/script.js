var detail_buttons = document.getElementsByClassName('detail-button');
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


for (var i of detail_buttons)
  i.addEventListener('click', activateModal);
modal_backdrop.addEventListener('click', closeModal);
