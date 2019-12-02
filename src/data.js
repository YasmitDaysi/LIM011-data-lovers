export const order = ((data) => data.sort((a, b) => (a.name > b.name ? 1 : -1)));

export const filtrarCasayRol = (data, propiedad, value) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad] === value) {
      newArray.push({
        name: data[i].name,
        image: data[i].image,
      });
    }
  }
  return newArray;
};
export const filtrarCasa = (data, valor) => {
  const filterHouse = data.filter((element) => {
    if (element.house === valor) {
      return true;
    }
    return false;
  });
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
