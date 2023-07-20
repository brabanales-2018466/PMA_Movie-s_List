import React, { useState } from "react"
import { BuscadorPeliculas } from './components/BuscadorPeliculas'
import { ListaPeliculas } from './components/ListaPeliculas'
import { buscarPeliculas, obtenerDetallesPelicula } from "./helpers/apiPelicula"


export const App = () => {

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSelect, setPeliculaSelect] = useState(null);

  const onBuscarPeliculas = async (termino) => {
    try {
      const resultado = await buscarPeliculas(termino);
      setPeliculas(resultado);
      setPeliculaSelect(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onPeliculaSelect = async (id) => {
    try {
      const detalle = await obtenerDetallesPelicula(id);
      setPeliculaSelect(detalle);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", color: "white" }}>Movie List</h1>

        <BuscadorPeliculas onBuscar={onBuscarPeliculas} />
        <br />

        {peliculas.length > 0 && (
          <ListaPeliculas
            peliculas={peliculas}
            onPeliculaSeleccionada={onPeliculaSelect} />
        )}

        <br />

        {peliculaSelect && (

          <div>

            <h2>Detalles de la Pelicula</h2>
            <p>Titulo: {peliculaSelect.Title}</p>
            <p>Año de estreno: {peliculaSelect.Year}</p>
            <p>Actor: {peliculaSelect.Director}</p>
            <p>Descripción: {peliculaSelect.Plot}</p>
            <br />

          </div>

        )}

      </div>

    </>
  )
}