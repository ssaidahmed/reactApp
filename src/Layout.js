import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
const Layout = (props)=>{
    return(
        <div className="layout">
            
            <Header /> 
                
                {props.children}
            <Footer />
        </div>);
}

export default Layout;