import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/Pokedex/PokeCard";
import SelectTypes from "../components/Pokedex/SelectTypes";
import Header from "../components/shared/Header";

const Pokedex = () => {
  const { nameTrainer } = useSelector((state) => state);

  const [pokemons, setPokemons] = useState();
  const [selectValue, setSelectValue] = useState("allpokemons");

  useEffect(() => {
    if (selectValue === "allpokemons") {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0";
      axios
        .get(url)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(selectValue)
        .then((res) => {
          const results = res.data.pokemon.map((e) => e.pokemon);
          setPokemons({ results });
        })
        .catch((err) => console.log(err));
    }
  }, [selectValue]);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.pokemon.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
    e.target.pokemon.value = "";
  };

  return (
    <div className="pokedex">
      <Header />
      <div className="pokedex__container">
        <h2 className="pokedex__greeting">
          <span className="pokedex__greeting-span">Hi {nameTrainer},</span> here
          find your favorite pokemon.{" "}
        </h2>
        <div className='pokedex__input-select'>
          <form onSubmit={handlesubmit}>
            <input
              className="home__form-input"
              id="pokemon"
              type="text"
              placeholder="Enter your pokemon..."
            />
            <button className="home__form-btn">Search</button>
          </form>
          <SelectTypes setSelectValue={setSelectValue} />
        </div>
        <div className="pokedex__container-pokemon">
          {pokemons?.results.map((pokemon) => (
            <PokeCard key={pokemon.url} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
