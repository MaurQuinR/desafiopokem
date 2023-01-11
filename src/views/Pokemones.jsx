import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Pokemones() {
  const [listadoPokemones, setListadoPokemones] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
  const navigate = useNavigate();
  const url_api = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';

  const getPokemones = async() => {
    const resp = await fetch(url_api);
    const data = await resp.json();
    setListadoPokemones(data.results);
  };
  useEffect(() => {
    getPokemones();
  }, []);

  const verDetallePokemon = () => {
    navigate(`/pokemones/${pokemonSeleccionado}`);
  };

  return(
    <>
      <section className="container">
        <h1>Selecciona un Pokémon</h1>
        <Form.Select aria-label="Default select example" value={pokemonSeleccionado} onChange={(e) =>  setPokemonSeleccionado(e.target.value)}>
          <option>Selecciona un Pokémon</option>
          {listadoPokemones.map(({ name }, i) => (
              <option key={i} value={name}> {name} </option>
            ))}
        </Form.Select>
        <Button variant="primary" className="mt-5" onClick={verDetallePokemon}>Ver detalle</Button>
      </section>
    </>
  )
}