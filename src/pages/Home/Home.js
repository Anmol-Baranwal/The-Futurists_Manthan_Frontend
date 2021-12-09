import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import './style.css'

const Home = () => {
  return (
    <header id='home'>
      <nav id='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <h3>
              <FaSearch style={{ fontSize: '1.5rem' }} /> Finder
            </h3>
          </div>
          {/*  links  */}
          <div className='link-container'>
            <ul className='links'>
              <li>
                <Link to='/' className='link'>
                  home
                </Link>
              </li>
              <li>
                <Link to='/login' className='link'>
                  Log in
                </Link>
              </li>
              <li>
                <Link to='/signup' className='link'>
                  sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* banner */}
      <div className='banner'>
        <div className='container'>
          <h1>Finder</h1>
          <p>
            A tool to find linked accounts on various social media platforms
          </p>
          <Link to='/login' className='btn'>
            log in
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Home
