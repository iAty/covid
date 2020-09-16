import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron className="hero">
      <div className='container'>
        <h1>COVID-19 - Koronavírus Statisztika</h1>
        <h2 className='h4 text-white'>
          A koronavírussal kapcsolatos aktuális információk, statisztikai adatok közlésére szolgáló
          felület.
        </h2>
      </div>
    </Jumbotron>
  );
};

export default Home;
