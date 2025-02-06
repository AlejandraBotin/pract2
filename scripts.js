// Resaltar el enlace activo en el menú de navegación
document.querySelectorAll('nav ul li a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.fontWeight = 'bold';
    link.style.color = '#FFD700';
  }
});

// Lugares emblemáticos de París (si el mapa está presente)
if (document.getElementById('map')) {
  const map = L.map('map').setView([48.8566, 2.3522], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const places = [
    { name: "Torre Eiffel", coords: [48.8584, 2.2945] },
    { name: "Museo del Louvre", coords: [48.8606, 2.3376] },
    { name: "Catedral de Notre Dame", coords: [48.8529, 2.3508] },
    { name: "Arco de Triunfo", coords: [48.8738, 2.2950] },
    { name: "Montmartre", coords: [48.8867, 2.3431] }
  ];

  places.forEach(place => {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup(`<h3>${place.name}</h3>`);
  });
}

// Datos de las recetas
const recipes = {
  croissant: `
    <h2>Receta de Croissants</h2>
    <ul>
      <li>500g de harina</li>
      <li>300g de mantequilla</li>
      <li>10g de sal</li>
      <li>70g de azúcar</li>
      <li>200ml de leche</li>
      <li>20g de levadura fresca</li>
    </ul>
    <p>Mezcla la harina, el azúcar y la sal en un bol grande...</p>
  `,
  quiche: `
    <h2>Receta de Quiche Lorraine</h2>
    <ul>
      <li>1 base de masa quebrada</li>
      <li>150g de bacon</li>
      <li>3 huevos</li>
      <li>200ml de nata</li>
      <li>Sal y pimienta al gusto</li>
    </ul>
    <p>Precalienta el horno a 180°C...</p>
  `,
  macarons: `
    <h2>Receta de Macarons Caseros</h2>
    <ul>
      <li>200g de azúcar glas</li>
      <li>100g de almendra molida</li>
      <li>3 claras de huevo</li>
      <li>30g de azúcar</li>
      <li>Colorante alimentario</li>
    </ul>
    <p>Tamiza el azúcar glas y la almendra molida...</p>
  `,
  sopa: `
    <h2>Receta de Sopa de Cebolla Francesa</h2>
    <ul>
      <li>4 cebollas grandes</li>
      <li>50g de mantequilla</li>
      <li>1 litro de caldo de pollo</li>
      <li>100g de queso rallado</li>
      <li>Pan tostado</li>
    </ul>
    <p>Pela y corta las cebollas en tiras finas...</p>
  `
};

// Mostrar receta en el modal
function showRecipe(recipeId) {
  const recipeContent = recipes[recipeId];
  if (recipeContent) {
    const modal = document.getElementById('recipe-modal');
    const details = document.getElementById('recipe-details');
    details.innerHTML = recipeContent;
    modal.style.display = 'block';
  }
}

// Cerrar el modal
function closeModal() {
  const modal = document.getElementById('recipe-modal');
  modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', event => {
  const modal = document.getElementById('recipe-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Manejar el envío del formulario de reseñas
const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');

reviewForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que la página se recargue

  // Obtener los valores del formulario
  const name = document.getElementById('reviewer-name').value;
  const stars = document.getElementById('review-stars').value;
  const comment = document.getElementById('review-comment').value;

  // Crear el elemento de la reseña
  const reviewItem = document.createElement('li');

  // Agregar contenido a la reseña
  reviewItem.innerHTML = `
    <h4>${name}</h4>
    <span class="stars">${'⭐'.repeat(stars)}</span>
    <p>${comment}</p>
  `;

  // Añadir la reseña al contenedor
  reviewsList.appendChild(reviewItem);

  // Limpiar el formulario
  reviewForm.reset();
});

