const nav = document.querySelector('.nav');

    window.addEventListener('scroll',function(){
        nav.classList.toggle('active',window.scrollY>0)
    })


// Obtener elementos del DOM
const contactLink = document.querySelector('.menu li:nth-child(3) a');
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');

// Contenido del dropdown
dropdown.innerHTML = `
  <div class="dropdown-content">
    <a href="#">Teléfono: +123456789</a>
    <a href="#">Dirección: Calle Ejemplo, Ciudad</a>
  </div>
  <div class="close-button">X</div>
`;

// Agregar el dropdown al cuerpo del documento
document.body.appendChild(dropdown);

// Mostrar el dropdown al hacer clic en "Contact"
contactLink.addEventListener('click', () => {
  dropdown.style.display = 'block';
});

// Ocultar el dropdown al hacer clic en el botón de cerrar
const closeButton = dropdown.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  dropdown.style.display = 'none';
});
