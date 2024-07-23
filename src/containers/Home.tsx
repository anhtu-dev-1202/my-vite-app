import React, { useEffect, useState } from 'react';
import '@/assets/styles/home.scss';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='home-container'>
        <header className='home-header'>
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for all your needs</p>
        </header>
        <div className='home-content'>
          <img src='https://via.placeholder.com/600x400' alt='Main Visual' className='home-image' />
          <div className='home-buttons'>
            <button className='btn primary'>Get Started</button>
            <button className='btn secondary'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
