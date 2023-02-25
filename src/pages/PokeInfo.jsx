import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/shared/Header";
import "../components/styles/PokeInfo.css";

const PokeInfo = () => {
  const { id } = useParams();

  const [poke, setPoke] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPoke(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [id]);

  if (hasError) {
    return <h1>❌ The Pokemon with name "{id}" not found ❌</h1>;
  } else {
    return (
      <div>
        <Header />
        <section className="Pokeinfo">
          <div className="pokeinfo__bx1">
            <div
              className={`pokein__bx1__header bg-${poke?.types[0].type.name}`}
            >
              <img
                className="pokein__bx1__header-img"
                src={poke?.sprites.other["official-artwork"].front_default}
                alt="photo_pokemon"
              />
            </div>
            <div className="pokeinfo__bx1__id__container">
              <h2
                className={`pokeinfo__bx1__id color-${poke?.types[0].type.name}`}
              >
                #{poke?.id}
              </h2>
            </div>
            <div className="pokeinfo__bx1__name__container">
              <h1
                className={`pokeinfo__bx1__name color-${poke?.types[0].type.name}`}
              >
                {poke?.name}
              </h1>
            </div>
            <div className="pokeinfo__bx1__characters">
              <span className="pokeinfo__bx1__character">Weight</span>
              <span className="pokeinfo__bx1__character">Height</span>
              <span className="pokeinfo__bx1__character-value">
                {poke?.weight}
              </span>
              <span className="pokeinfo__bx1__character-value">
                {poke?.height}
              </span>
            </div>
            <div className="pokeinfo__bx1__container-all">
              <div className="pokeinfo__bx1__TA">
                <div className="pokeinfo__bx1__types">
                  <h2 className="pokeinfo__bx1__type">Type</h2>
                  {poke?.types.map((type) => (
                    <span
                      className={`pokeinfo__bx1__type-info bg-${type.type.name}`}
                      key={type.type.url}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="pokeinfo__bx1__abilities">
                  <h2 className="pokeinfo__bx1__ability">Ability</h2>
                  {poke?.abilities.map((ability) => (
                    <span
                      className="pokeinfo__bx1__ability-info"
                      key={ability.ability.url}
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pokeinfo__bx1__h2__container">
                <h2 className="pokeinfo__bx1__h2">Stats</h2>
              </div>
              <div className="pokeinfo__bx1__stat-info">
                {poke?.stats.map((stat) => (
                  <div className="pokeinfo__bx1__stat__subcontainer">
                    <div className="pokeinfo__bx1__stat__items">
                      <span className="pokeinfo__bx1__stat-name">
                        {stat.stat.name}
                      </span>
                      <p className="pokeinfo__bx1__stat-percentage">
                        {stat.base_stat}/150
                      </p>
                    </div>
                    <div
                      className="pokeinfo__bx1__stat__bar"
                      style={{
                        background: `linear-gradient(90deg, #e6901e 0, #fcd676 ${stat.base_stat}%, rgb(231, 231, 231) ${stat.base_stat}% 150%)`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pokeinfo__box2">
            <div className="pokeinfo__bx2__h2__container">
              <h2 className="pokeinfo__bx2__h2">Movements</h2>
            </div>
            <div className="pokeinfo__bx2__moves__container">
              {poke?.moves.map((move) => (
                <h3 className="pokeinfo__bx2__move">{move.move.name}</h3>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default PokeInfo;
