function cambiarModo() {
  var cuerpoweb = document.body;
  var icon = document.getElementById("sun");
  var icon2 = document.getElementById("moon");

  if (cuerpoweb = cuerpoweb.classList.toggle("oscuro")){
    icon.style.display = 'block';
    icon2.style.display = 'none';
  }

  else {
    icon.style.display = 'none';
    icon2.style.display = 'block';
  }

  /*switch (cuerpoweb.classList.toggle("oscuro")) {
    case "oscuro":
      icon.style.display = 'block';
      icon2.style.display = 'none';
      break;
    case "":
      icon.style.display = 'none';
      icon2.style.display = 'block';
      break;
  }*/
}
