import React from 'react';
/*if (process.env.BROWSER) {
  require("./index.scss");
}*/
import './index.scss';

const Footer = () => (
  <footer className="footer container text-center">
    <hr />
    <a href="#">Frequently Asked Questions</a> | <a href="#">Terms of Service</a>
    <p>© 2017 Company, Inc. All Rights Reserved</p>
  </footer>
);

export default Footer;