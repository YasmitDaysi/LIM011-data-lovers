import POTTER from './data/potter/potter.js';
import {
  filtrarCasayRol, filterPatronus, filterVaritas, order, filtrarCasa,
} from './data.js';

const main = document.getElementById('main');
const opciones = document.getElementById('opciones');
const seccion1 = document.getElementById('paso1');
const listfiltrar = document.getElementById('listfiltrar');
const mostrarP = document.querySelector('#opcion1');
const video = document.getElementById('video');
const footer = document.getElementById('footer');
const btnRegresar = document.getElementById('btn-regresar');

const personajes = document.querySelector('#personajes');
const patronus = document.querySelector('#patronus');
const varitas = document.querySelector('#varitas');
const secInicio = document.querySelector('#secInicio');
const btnEspecie = document.querySelector('#btn-Especie');
const btnCasas = document.querySelector('#btn-Casas');
const btnRoles = document.querySelector('#btn-Roles');
const secEspecie = document.querySelector('#secEspecie');
const secCasas = document.querySelector('#secCasas');
const secRoles = document.querySelector('#secRoles');
const btnHumano = document.querySelector('#btn-Humano');
const btnHalfGiant = document.querySelector('#btn-Half-giant');
const btnWerewolf = document.querySelector('#btn-Werewolf');
const btnCat = document.querySelector('#btn-Cat');
const btnGryffindor = document.querySelector('#btn-Gryffindor');
const btnSlytherin = document.querySelector('#btn-Slytherin');
const btnRavenclaw = document.querySelector('#btn-Ravenclaw');
const btnHufflepuff = document.querySelector('#btn-Hufflepuff');
const btnEstudiantes = document.querySelector('#btn-Estudiantes');
const btnStaff = document.querySelector('#btn-Staff');
const mostrarHechizos = document.querySelector('#patronus');


const lista = (arr) => {
  let resultado = '';
  for (let i = 0; i < arr.length; i += 1) {
    resultado += `
      <section class = "listPersonaje">
         <img  class = "imagen" src=${arr[i].image} id=${i}>
           <section class="color">${arr[i].name}</section>
       </section>
       `;
  }
  return resultado;
};
const listaPatronus = (pat) => {
  let resultadoPatronus = '';
  for (let i = 0; i < pat.length; i += 1) {
    resultadoPatronus += `
      <section class = "listPersonaje">
       <img  class = "imagen" src=${pat[i].imagen}>
           <section>${pat[i].nombre}</section>
           <section>Patronus:' '${pat[i].hechizo}</section>
      </section>
       `;
  }
  return resultadoPatronus;
};
const listaVaritas = (Varitas) => {
  let resultaVaritas = '';
  for (let i = 0; i < Varitas.length; i += 1) {
    resultaVaritas += `
          <section class = "listPersonaje">
              <img  class = "imagen" src=${Varitas[i].imagen}>
               <section >${Varitas[i].nombre}</section>
               <p>Varita</p>
              <section >madera:  ${Varitas[i].madera}</section>
              <section >nucleo:  ${Varitas[i].centro}</section>
              <section >longitud:  ${Varitas[i].longitud}</section>
          </section>
       `;
  }
  return resultaVaritas;
};
const getPersonaje = (data, idPersonaje) => {
  const personajeHTML = `
  <div id='general' class='general'>
   <div id='containerImagen'>
      <img class='imagen' src="${data[idPersonaje].image}" alt="imagen">
    </div>
    <div id='containerGetPersonaje'>
      <p class='caracteristicas'>Nombre: ${data[idPersonaje].name}</p>
      <p class='caracteristicas'>Especie: ${data[idPersonaje].species}</p>
      <p class='caracteristicas'>Género: ${data[idPersonaje].gender}</p>
      <p class='caracteristicas'>Casa: ${data[idPersonaje].house}</p>
      <p class='caracteristicas'>Fecha de nacimiento: ${data[idPersonaje].dateOfBirth}</p>
      <p class='caracteristicas'>Año de nacimiento: ${data[idPersonaje].yearOfBirth}</p>
      <p class='caracteristicas'>Ancestro: ${data[idPersonaje].ancestry}</p>
      <p class='caracteristicas'>Color de ojos: ${data[idPersonaje].eyeColour}</p>
      <p class='caracteristicas'>Color de cabello: ${data[idPersonaje].hairColour}</p>
      <p class='caracteristicas'>Madera de varita: ${data[idPersonaje].wand.wood}</p>
      <p class='caracteristicas'>Núcleo de varita: ${data[idPersonaje].wand.core}</p>
      <p class='caracteristicas'>Longitud de varita: ${data[idPersonaje].wand.length}</p>
    </div>
  </div>`;


  return personajeHTML;
};


mostrarP.addEventListener('click', () => {
  main.classList.remove('hide');
  btnRegresar.classList.add('hide');
  opciones.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
  personajes.innerHTML = lista(POTTER);
  const traerTodosLosPersonajes = document.querySelectorAll('.imagen');
  for (let i = 0; i < traerTodosLosPersonajes.length; i += 1) {
    traerTodosLosPersonajes[i].addEventListener('click', () => {
      const idPersonaje = traerTodosLosPersonajes[i].id;
      personajes.innerHTML = getPersonaje(POTTER, idPersonaje);
    });
  }
});


mostrarHechizos.addEventListener('click', () => {
  main.classList.remove('hide');
  opciones.classList.add('hide');
  listfiltrar.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
});
const mostrarVaritas = document.querySelector('#varitas');
mostrarVaritas.addEventListener('click', () => {
  main.classList.remove('hide');
  opciones.classList.add('hide');
  listfiltrar.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
});
btnEspecie.addEventListener('click', () => {
  seccion1.classList.add('hide');
  secEspecie.classList.remove('hide');
  btnRegresar.classList.remove('hide');
});
btnCasas.addEventListener('click', () => {
  seccion1.classList.add('hide');
  secCasas.classList.remove('hide');
  btnRegresar.classList.remove('hide');
});
btnRoles.addEventListener('click', () => {
  seccion1.classList.add('hide');
  secRoles.classList.remove('hide');
  btnRegresar.classList.remove('hide');
});
btnRegresar.addEventListener('click', () => {
  secRoles.classList.add('hide');
  secEspecie.classList.add('hide');
  secCasas.classList.add('hide');
  seccion1.classList.remove('hide');
  secInicio.classList.remove('hide');
  btnRegresar.classList.add('hide');
});

btnHumano.addEventListener('click', () => {
  const species = filtrarCasayRol(POTTER, 'species', 'human');
  personajes.innerHTML = lista(species);
});
btnHalfGiant.addEventListener('click', () => {
  const halfGiant = filtrarCasayRol(POTTER, 'species', 'half-giant');
  personajes.innerHTML = lista(halfGiant);
});
btnWerewolf.addEventListener('click', () => {
  const werewolf = filtrarCasayRol(POTTER, 'species', 'werewolf');
  personajes.innerHTML = lista(werewolf);
});
btnCat.addEventListener('click', () => {
  const cat = filtrarCasayRol(POTTER, 'species', 'cat');
  personajes.innerHTML = lista(cat);
});
btnGryffindor.addEventListener('click', () => {
  const Gryffindor = filtrarCasa(POTTER, 'Gryffindor');
  personajes.innerHTML = lista(Gryffindor);
});
btnSlytherin.addEventListener('click', () => {
  const Slytherin = filtrarCasa(POTTER, 'Slytherin');
  personajes.innerHTML = lista(Slytherin);
});
btnRavenclaw.addEventListener('click', () => {
  const Ravenclaw = filtrarCasa(POTTER, 'Ravenclaw');
  personajes.innerHTML = lista(Ravenclaw);
});
btnHufflepuff.addEventListener('click', () => {
  const Hufflepuff = filtrarCasa(POTTER, 'Hufflepuff');
  personajes.innerHTML = lista(Hufflepuff);
});
btnEstudiantes.addEventListener('click', () => {
  const Estudiantes = filtrarCasayRol(POTTER, 'hogwartsStudent', true);
  personajes.innerHTML = lista(Estudiantes);
});
btnStaff.addEventListener('click', () => {
  const Staff = filtrarCasayRol(POTTER, 'hogwartsStaff', true);
  personajes.innerHTML = lista(Staff);
});
patronus.addEventListener('click', () => {
  const Patronus = filterPatronus(POTTER, 'patronus');
  personajes.innerHTML = listaPatronus(Patronus);
});

varitas.addEventListener('click', () => {
  const Varitas = filterVaritas(POTTER, 'wand');
  personajes.innerHTML = listaVaritas(Varitas);
});
const ordeAscendente = document.getElementById('orden-A-Z');
ordeAscendente.addEventListener('click', () => {
  const ordenAlfaAsc = order(POTTER);
  personajes.innerHTML = lista(ordenAlfaAsc);
});
const orderDescendente = document.getElementById('orden-Z-A');
orderDescendente.addEventListener('click', () => {
  const ordenAlfaDes = (order(POTTER).reverse());
  personajes.innerHTML = lista(ordenAlfaDes);
});
