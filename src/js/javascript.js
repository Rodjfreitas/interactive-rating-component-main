var button = document.getElementsByClassName("Submit-btn");

button.addEventListener('Click',function(e){
  var Principal = document.getElementsByClassName("Principal-Cartao");
  var Secundario = document.getElementsByClassName("Secundario-Cartao");

  if(Secundario.style.display === 'none'){
    Secundario.style.display === 'block'
    Principal.style.display === 'none'
  }
});