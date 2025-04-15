const loginBtn = document.querySelector('.iniciarsesion');



loginBtn.addEventListener('click', () => {

  if (loginBtn.textContent === 'Iniciar sesión') {

    loginBtn.textContent = 'Cerrar sesión';

  } else {

    loginBtn.textContent = 'Iniciar sesión';

  }

});

const addBtn = document.querySelector('.escribir');



addBtn.addEventListener('click', () => {

  addBtn.style.display = 'none';

});



const megustas = document.querySelectorAll('.megusta');



megustas.forEach((btn) => {

  btn.addEventListener('click', () => {

    const animals = btn.closest('.animales');

    const perrogato = animals.querySelector('h2').textContent;

    alert(`¡Te gustó la definición de ${perrogato}!`);

    const loquesaleenlacosaflotante = btn.textContent;

    const likes = parseInt(loquesaleenlacosaflotante) || 0;

    const masLikes = likes + 1;

    btn.textContent = `${masLikes} me gusta`;

  });

});
