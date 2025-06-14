import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import './Loading.css';

const LoadingComponent: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingComponent;
