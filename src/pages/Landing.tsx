import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt="happy" />

        <main>
          <h1>
            Leve a felicidade para o mundo
            </h1>
          <p>
            Visite orfanatos e mude o mundo de muitas crianças.
            </p>
        </main>

        <div className="location">
          <strong>Juiz de Fora</strong>
          <span>Minas Gerais</span>
        </div>
        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Landing;