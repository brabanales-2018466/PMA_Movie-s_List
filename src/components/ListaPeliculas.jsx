import React from "react";
import { DetallePelicula } from './DetallePelicula'

export const ListaPeliculas = ({ peliculas, onPeliculaSelect }) => {
    return (
        <>
            <div className="row justify-content-center rows-cols-1 row-cols-md-3 g-3">

                {peliculas.map((pelicula) => (
                    <div className="col">
                        <DetallePelicula
                            key={pelicula.imdbID}
                            pelicula={pelicula}
                            onPeliculaSelect={onPeliculaSelect}
                        />
                    </div>
                ))}

            </div>

        </>
    )
}