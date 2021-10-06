import React from 'react';
import Grid from '../elements/Grid';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <>
         <Header/>
            {children}
         <Footer/>
        </>
    )
};

Layout.defaultProps = {
    children : null,
  }

export default Layout;
