import React from 'react';
import About from '../components/about';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

export default Home;

