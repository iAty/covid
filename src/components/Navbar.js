import React from 'react';
import logo from '../images/bacteria.svg';
// import { Link } from 'react-router-dom';
//import { Button } from 'antd';

const divNav1 = {
  position: 'relative', 
  left: '5px'
};

const divNav2 = {
  position: 'relative', 
  top: '-10px'
};

const Navbar = ({ link, nav, font }) => {
  return (
    <div className='navbar sticky-top bg-white border-bottom'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <a href='/'>
            <img
              className='logo'
              src={logo}
              style={{ width: '55px' }}
              alt='Koronavírus statisztika logo'
            />
          </a>
          <a href='/'>
            <h5 className='mb-0 mt-3 font-weight-bold' style={divNav1}>
              COVID-19 <br />
              <small className='text-muted font-weight-light' style={divNav2}>Koronavírus</small>
            </h5>
          </a>
        </div>
        <ul className='navbar-nav flex-row ml-auto' aria-label='navigációs menü és linkek'>
          <li className='nav-item ml-3'>
            <a
              href='/info'
              className='nav-link-impressum'
            >
              GYIK
            </a>
          </li>
          <li className='nav-item fb'>
            <a
              href='https://stackoverflow.com/'
              className='nav-link icon stackoverflow' target='_blank' rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
              <span className='sr-only'>stackoverflow fiók</span>
            </a>
          </li>
          <li className='nav-item ml-3'>
            <a
              href='https://github.com/iAty/'
              className='nav-link icon github' target='_blank' rel="noopener noreferrer"
            >
              <i className='fab fa-github'></i>
              <span className='sr-only'>stackoverflow fiók</span>
            </a>
          </li>
          {/*
          <li className='nav-item ml-3'>
            <Link className={`${font} nav-link`} to={link}>
              <Button type='dashed'>{nav}</Button>
            </Link>
          </li>
          */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
