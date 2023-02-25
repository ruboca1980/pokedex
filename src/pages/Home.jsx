import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slices'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
  <>
    <div className='home'> 
      <div className='home__container'>
        <img className='home__title' src="/images/image12.png" alt="pokedex" />
        <h2 className='home__greeting'>Hi Trainer!</h2>
        <p className='home__petition'>To get started, enter your name</p>
        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__form-input' id='name' type="text" placeholder='Your name...' />
          <button className='home__form-btn'>Start</button>
        </form>
      </div>
    </div>
      <footer className='home__foother'>
        <div className='home__foother__rectangle-red'></div>
        <div className='home__foother__rectangle-black'>
          <div className='home__foother__circle-big'>
            <div className='home__foother__circle-small'></div>
          </div>
        </div>
      </footer>
  </>
  )
}

export default Home