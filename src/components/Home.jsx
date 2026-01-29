import React from 'react';
import Hero from './Hero';
import WhyChooseTekvida from './WhyChooseTekvida';
import Features from './Features';
import Testimonials from './Testimonials';
import Disciplines from './Disciplines';
import FAQ from './FAQ';
import Support from './Support';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <div id="why-choose-section">
                <WhyChooseTekvida />
            </div>
            <Testimonials />
            <Disciplines />
            <FAQ />
            <Support />
        </>
    );
};

export default Home;
