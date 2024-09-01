import React from 'react'
import ImageSlider from './ImageSlider';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
    <br />
      <h1>Welcome to our College</h1>
      <p>Explore our programs and community.</p>
      <br />
      <ImageSlider />
    </div>
  );
};

export default Home
