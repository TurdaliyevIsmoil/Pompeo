import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Shop from '../components/shop';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <hr />
            <Shop />
            <Contact />
            <hr />
            <Footer />
        </div>
    );
}

export default Home;

