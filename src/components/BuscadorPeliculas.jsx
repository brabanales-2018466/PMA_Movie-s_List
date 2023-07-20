import { useState } from "react"

export const BuscadorPeliculas = ({ onBuscar }) => {

    const [buscar, setBuscar] = useState('');

    const handleChange = (event) => {
        setBuscar(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onBuscar(buscar);
    }

    return (
        <div className="row">
            <div className="col-4 mx-auto" style={{ textAlign: "center"}}>
                <form onSubmit={handleSubmit} aria-label="form">
                    <input
                        type="text"
                        placeholder="Buscar Pelicula..."
                        className="form-control"
                        name="SearchText"
                        autoComplete="off"
                        value={buscar} onChange={handleChange} />
                    <button className="btn btn-outline-primary mt-1">Buscar</button>
                </form>

            </div>
        </div>


    )
}