// const myDropdown = document.getElementById('myDropdown')
// myDropdown.addEventListener('show.bs.dropdown', event => {
//   // do something...
// })
// let listElemens= document.querySelector(".li-item-boton-clik");
// listElemens.forEach(listElemen=>{
//     Element.addEventlistener("clik",()=>{
//        alert()
//     });
// });
//btnCalcular.addEventListener('click', () => {
    let cambiar_color = document.querySelector("body");
    let cambiar_color_letras =document.querySelector(".tex-color");
    let botom = document.querySelector(".checkbox");
    
    botom.addEventListener("click", updateName);
    
    function updateName() {
      cambiar_color.classList.toggle("fondo-black");
      cambiar_color_letras.classList.checkbox("tex-color");
    }

//BOTON PUBLOC CARRUCEL

// function cambiarContenedor() {
//   var contenedor1 = document.getElementById('contenedor1');
//   var contenedor2 = document.getElementById('contenedor2');
//   var boton = document.getElementById('boton');
  
//   if (contenedor1.style.display !== 'none') {
//     contenedor1.style.display = 'none';
//     contenedor2.style.display = 'block';
//     boton.innerHTML = 'Volver al Contenedor 1';
//   } else {
//     contenedor1.style.display = 'block';
//     contenedor2.style.display = 'none';
//     boton.innerHTML = 'Cambiar Contenedor';
//   }
// }


function getCities() {
  const cities = document.querySelectorAll(".sc-fifgRP");
  const citiesNames = [];
  for (const city of cities) {
    citiesNames.push(city.getAttribute("name"));
  }
  return citiesNames;
}





// const buttons = document.querySelectorAll('.sc-sLsrZ hYtGoo span');
// const container = document.querySelector('.sc-sLsrZ hYtGoo');

// for (const button of buttons) {
//   button.addEventListener('click', () => {
//     container.classList.toggle('active');
//   });
// }

//REGISTRATE
// const registrar_click = document.getElementById("regis_clik");
// registrar_click.addEventListener("clik", () => {
//   <ul class="dropdown-menu">
//     <li>
//       <a class="dropdown-item" href="#">
//         Como Locador
//       </a>
//     </li>
//     <li>
//       <a class="dropdown-item" href="#">
//         Como Locatario
//       </a>
//     </li>
//   </ul>;
// });

document.addEventListener("DOMContentLoaded", function(event) {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    let currentIndex = 0;
  
    prevButton.addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    });
  
    nextButton.addEventListener("click", function() {
      if (currentIndex < carouselContainer.children.length - 1) {
        currentIndex++;
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    });
  });
  
