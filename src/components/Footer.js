import React from 'react';
const Footer = ({ msg, font, name, by }) => {
  return (
    <footer>
      <div className='container'>
        <p className='text-center mb-0 p-4'>
          {msg} {by} {' '}
          <a
            className='font-weight-bold' style={{ color: 'white' }}
            href='https://linkedin.com/in/bodiati'
          >
            {name}
          </a> 
          &nbsp;&nbsp;Forrás: 
          <a
            className='font-weight-bold' style={{ color: 'white' }}
            href='https://corona.lmao.ninja/v2'
          >
            API 1
          </a>
          <a
            className='font-weight-bold' style={{ color: 'white' }}
            href='https://covid19.mathdro.id/api'
          >
            API 2
          </a>
          <a
            className='font-weight-bold' style={{ color: 'white' }}
            href='https://www.flaticon.com/authors/ultimatearm'
          >
            IKONPACK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
