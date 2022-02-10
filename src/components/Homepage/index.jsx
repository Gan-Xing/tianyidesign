import React from 'react';
import Mybackup from '../Public/Mybackup';
import Navbar from '../Public/Navbar';
import Mycarousel from '../Public/Mycarousel';
import Container from './Container/index'
import Footer from '../Public/Footer';
import './index.css'

function Homepage() {
    return (
        <div className='homepage'>
            <div className="headernav">
                <Navbar />
                <Mycarousel/>
                <Mybackup />
            </div>
            <Container/>
            <Footer/>
        </div>
    )
}

export default Homepage
