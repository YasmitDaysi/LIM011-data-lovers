export const order = ((data) => data.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}));

export const filtrarRolEst = (data, valor) => {
  const rol = data.filter((elemento) => elemento.hogwartsStaff === valor);
  return rol;
};
export const filtrarRolStaff = (data, valor) => {
  const rol = data.filter((elemento) => elemento.hogwartsStudent === valor);
  return rol;
};


export const filtrarEspecie = (data, valor) => {
  const especie = data.filter((elemento) => elemento.species === valor);
  return especie;
};

export const filtrar = (data, valor) => {
  const filterHouse = data.filter((element) => element.house === valor);
  return filterHouse;
};

export const filterPatronus = (data, propiedad) => {
  const newArrayPatronus = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad]) {
      newArrayPatronus.push({
        imagen: data[i].image,
        nombre: data[i].name,
        hechizo: data[i].patronus,

      });
    }
  }
  return newArrayPatronus;
};

export const filterVaritas = (data, propiedad) => {
  const newArrayVaritas = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad].wood !== ''
       && data[i][propiedad].core === '' && data[i][propiedad].length === '') {
      newArrayVaritas.push({

        imagen: data[i].image,
        nombre: data[i].name,
        madera: data[i].wand.wood,
        centro: 'no tiene',
        longitud: 'no tiene',
      });
    } else if (data[i][propiedad].wood === ''
       && data[i][propiedad].core === '' && data[i][propiedad].length === '') {
      newArrayVaritas.push({

        imagen: data[i].image,
        nombre: data[i].name,
        madera: 'no tiene',
        centro: 'no tiene',
        longitud: 'no tiene',

      });
    } else if (data[i][propiedad].wood !== ''
       && data[i][propiedad].core === '' && data[i][propiedad].length !== '') {
      newArrayVaritas.push({

        imagen: data[i].image,
        nombre: data[i].name,
        madera: data[i].wand.wood,
        centro: 'no tiene',
        longitud: data[i].wand.length,

      });
    } else {
      newArrayVaritas.push({
        imagen: data[i].image,
        nombre: data[i].name,
        madera: data[i].wand.wood,
        centro: data[i].wand.core,
        longitud: data[i].wand.length,
      });
    }
  }

  return newArrayVaritas;
};
