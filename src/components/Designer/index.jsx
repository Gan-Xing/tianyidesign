import React, { useState, useEffect }  from 'react';
// import Headernav from '../Homepage/Headernav';
import Footer from '../Public/Footer';
import Navbar from '../Public/Navbar';
import Mycarousel from '../Public/Mycarousel';
import Mybackup from '../Public/Mybackup';
import DesignerExhibition from './DesignerExhibition';

export default function Designer() {
    const [scroll, setScroll] = useState(false);
    const handleScroll=()=> {
        const data = document.documentElement.scrollTop||document.body.scrollTop;
        if(data>0){
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    }, [])
    return (
        <div className="designer">
            <Navbar scroll={scroll}/>
            <Mycarousel />
            <Mybackup />
            <DesignerExhibition />
            <Footer/>
        </div>
    )
}
