
import POTTER from './data/potter/potter.js';
import {
  filter, filterPatronus, filterVaritas, order, filtrar,
} from './data.js';

const personajes = document.querySelector('#personajes');
console.log(filterVaritas(POTTER, 'wand'));
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
const btnRavenclaw = document.querySelector('#btn-Rovenclaw');
const btnHufflepuff = document.querySelector('#btn-Hufflepuff');

const btnEstudiantes = document.querySelector('#btn-Estudiantes');
const btnStaff = document.querySelector('#btn-Staff');
const mainContenedor = document.querySelector('#main');

const lista = (y) => {
  let resultado = '';
  for (let i = 0; i < y.length; i += 1) {
    resultado += `
      <section class = "listPersonaje">
         <img  class = "imagen" src=${y[i].image}>
           <p >${y[i].name}</p>
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
           <section>${pat[i].hechizo}</section>
       
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
              <section >madera:  ${Varitas[i].madera}</section>
              <section >nucleo:  ${Varitas[i].centro}</section>
              <section >longitud:  ${Varitas[i].longitud}</section>
       
          </section>
       `;
  }
  return resultaVaritas;
};

const mostrarPersonajes = document.querySelector('#opcion1');

mostrarPersonajes.addEventListener('click', () => {
  mainContenedor.classList.remove('hide');
});

const mostrarHechizos = document.querySelector('#patronus');
mostrarHechizos.addEventListener('click', () => {
  mainContenedor.classList.remove('hide');
});
const mostrarVaritas = document.querySelector('#varitas');
mostrarVaritas.addEventListener('click', () => {
  mainContenedor.classList.remove('hide');
});

btnEspecie.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secEspecie.classList.remove('hide');
});

btnCasas.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secCasas.classList.remove('hide');
});

btnRoles.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secRoles.classList.remove('hide');
});

btnHumano.addEventListener('click', () => {
  const species = filter(POTTER, 'species', 'human');
  personajes.innerHTML = lista(species);
});

btnHalfGiant.addEventListener('click', () => {
  const halfGiant = filter(POTTER, 'species', 'half-giant');
  personajes.innerHTML = lista(halfGiant);
});

btnWerewolf.addEventListener('click', () => {
  const werewolf = filter(POTTER, 'species', 'werewolf');
  personajes.innerHTML = lista(werewolf);
});
// eslint-disable-next-line no-console
// console.log(filter(POTTER, 'species', 'werewolf'));

btnCat.addEventListener('click', () => {
  const cat = filter(POTTER, 'species', 'cat');
  personajes.innerHTML = lista(cat);
});

btnGryffindor.addEventListener('click', () => {
  const Gryffindor = filtrar(POTTER, 'Gryffindor');
  personajes.innerHTML = lista(Gryffindor);
});

btnSlytherin.addEventListener('click', () => {
  const Slytherin = filtrar(POTTER, 'Slytherin');
  personajes.innerHTML = lista(Slytherin);
});

btnRavenclaw.addEventListener('click', () => {
  const Ravenclaw = filtrar(POTTER, 'Ravenclaw');
  personajes.innerHTML = lista(Ravenclaw);
});

btnHufflepuff.addEventListener('click', () => {
  const Hufflepuff = filtrar(POTTER, 'Hufflepuff');
  personajes.innerHTML = lista(Hufflepuff);
});

btnEstudiantes.addEventListener('click', () => {
  const Estudiantes = filter(POTTER, 'hogwartsStudent', true);
  personajes.innerHTML = lista(Estudiantes);
});

btnStaff.addEventListener('click', () => {
  const Staff = filter(POTTER, 'hogwartsStaff', true);
  personajes.innerHTML = lista(Staff);
});

patronus.addEventListener('click', () => {
  const Patronus = filterPatronus(POTTER, 'patronus');
  personajes.innerHTML = listaPatronus(Patronus);
});

//  patronus.addEventListener('click',(event)=>{
//      const patronus = filterPatronus(POTTER,event.target.id)
//      personajes.innerHTML= listaPatronus(patronus)
//      })
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

personajes.innerHTML = lista(POTTER);
