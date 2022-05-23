import React from 'react';
import Banner from '../Banner/Banner';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Contact from '../../Home/Contact/Contact';
import './Home.css'
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='content-container'>
          <Banner></Banner>
          <FeatureProduct/>
          <Testimonial/>
          <Contact/>
        </div>
    );
};

export default Home;