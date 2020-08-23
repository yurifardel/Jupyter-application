import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/yurifardel">
        <img src="https://fontmeme.com/permalink/200729/3c3e823e0b4b6bb25c175a0e9c9329f2.png" alt="github" />
      </a>
      <p>
        Development 
        {' '}
        <a href="https://www.instagram.com/yurifardel/">
          Yuri Regis Nascimento
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;