$(document).ready(function(){

  var text_field = document.getElementById("text_field");
  text_field.addEventListener("focusin", myFocusFuntion);
  text_field.addEventListener("focusout", myBlurFuntion);

  function myFocusFuntion() {
    document.getElementsByClassName("container_busqueda")[0].classList.toggle("sombrita");
  }

  function myBlurFuntion() {
    document.getElementsByClassName("container_busqueda")[0].classList.remove("sombrita");
  }

  function popup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  $('.micro_busqueda').hover(function(){
    popup();
  });



});