import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import Services from './Services';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
           
     <Services></Services>
     <Project></Project>
     <About></About>
     <Contact></Contact>
    
        </div>
    );
};

export default MainHome;