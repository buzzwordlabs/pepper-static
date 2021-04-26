import React from 'react';
import { Footer, Navbar } from '../';
import { withRouter } from 'react-router-dom';

const staticNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
];

function Layout(props) {
  return (
    <>
      <Navbar staticNavLinks={staticNavLinks} path={props.match.path} />
      {props.children}
      <Footer />
    </>
  );
}

export default withRouter(Layout);
