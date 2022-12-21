// _________________ change color theme __________________

function cambiarModo() {
  var cuerpoweb = document.body;
  var icon = document.getElementById("sun");
  var icon2 = document.getElementById("moon");

  if (cuerpoweb = cuerpoweb.classList.toggle("oscuro")) {
    icon.style.display = 'block';
    icon2.style.display = 'none';
  }

  else {
    icon.style.display = 'none';
    icon2.style.display = 'block';
  }
}


// _________________ scroll menu __________________

const navEl = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 56) {
    navEl.classList.add('toggle-bg')
  }
  else {
    navEl.classList.remove('toggle-bg')
  }
})
