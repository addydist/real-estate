import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto'>
        Copyright &copy; 2022. All rights reserved(Addydist).
      </div>
    </footer>
  );
};

export default Footer;