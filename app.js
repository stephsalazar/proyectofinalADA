// https://pokeapi.co/pokemons
// https://rickandmortyapi.com/api/character


const init = () => {
  
  fetch('https://rickandmortyapi.com/api/character?page=2')
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      const personajes = datos.results;
      const urlNext = datos.info;
      console.log(urlNext);
      const section = document.querySelector('section');
      let info = '';
      let contadorParaImagen = 0;

      for (let i = 0; i < personajes.length; i++) {
          contadorParaImagen + i;
          info += `
            <div class="tarjeta">
              <p>Name: ${personajes[i].name}</p>
              <img src="https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg">
              <hr>
            </div>
          `
      }   
      return section.innerHTML = info;
    })
}

document.onload = init();