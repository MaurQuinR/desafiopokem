import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Detalle() {
  const [listadoPokemones, setListadoPokemones] = useState([]);
  const url_api = 'https://pokeapi.co/api/v2/pokemon/';
  const { nombre } = useParams();

  useEffect(() => {
    getlistadoPokemones();
  }, []);

  const getlistadoPokemones = async() => {
    const resp = await fetch(url_api + nombre);
    const data = await resp.json();
    console.log(data);

    const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((e) => ({ hp: e.base_stat, name: e.stat.name }));
        const types = data.types.map((e) =>  e.type.name );
        setListadoPokemones( {src, stats, types} );
  };

  return (
    <div className="container text-center">
        <div className="card">
            <div className="col-md-7">
              <div className="img">
                <img src={listadoPokemones.src} className="img-fluid" />
              </div>
            </div>
              <div className="card-body">
                <h1>{nombre}</h1>
                <div className="list">
                  {listadoPokemones.stats?.map((stat, i) => (
                        <li key={i}>
                          {stat.name} : {stat.hp} 
                        </li>
                  ))}
                  <p className="type-p">{listadoPokemones.types}</p>
                </div>
              </div>
         </div>
    </div>
  )
}


