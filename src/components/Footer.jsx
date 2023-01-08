import React from 'react';

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} &nbsp;
      <a href="http://akiif.dev" target="_blank" rel="noopener noreferrer">@Akif Mohammed</a>
    </footer>
  );
}

export default Footer;
