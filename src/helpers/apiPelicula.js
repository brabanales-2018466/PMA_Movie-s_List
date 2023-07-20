const apiKey = '45d8692c';

export const buscarPeliculas = async (termino) => {
    const url = `https://www.omdbapi.com/?s=${termino}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            return data.Search;
        } else {
            throw new Error(data.Error);
        }
    } catch (error) {
        throw new Error('Error al buscar películas');
    }
};

export const obtenerDetallesPelicula = async (id) => {

  console.log('hola estoy en detalle');

  const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'True') {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    throw new Error('Error al obtener detalles de la película');
  }
};
