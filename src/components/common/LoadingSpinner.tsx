import React from 'react';
import { ClipLoader } from 'react-spinners';
import '@/assets/styles/loadingSpinner.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className='spinner-container'>
      <ClipLoader color='#36d7b7' />
    </div>
  );
};

export default LoadingSpinner;
