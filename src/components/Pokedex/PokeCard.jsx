import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {
  
  const [poke, setPoke] = useState()
  
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(pokemon.url)
    .then(res => setPoke(res.data))
    .catch(err => console.log(err))
  }, [])
  
  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`)
  }

  return (
    <article onClick={handleClick} className={`pokeCard border-${poke?.types[0].type.name}`}>
      <header className={`pokeCard__header bg-${poke?.types[0].type.name}`}>
        <img className='pokeCard__header-img' src={poke?.sprites.other['official-artwork'].front_default} alt="image_pokemon" />
      </header>
      <h2 className={`pokeCard__name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
      <ul className='pokeCard__typeInfo'>
        {
          poke?.types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))
        }
      </ul>
      <p className='pokeCard__type'>Type</p>
      <hr className='pokeCard__hr'/>

      <ul className='pokeCard__stats'>
        {
          poke?.stats.map(stat => (
            <li className='pokeCard__stat' key={stat.stat.url}>
              <span className='pokeCard__statTitle'>{stat.stat.name}</span>
              <span className={`pokeCard__statInfo color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokeCard