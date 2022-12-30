import React from 'react';
import './banner.css';

// Utilisation de props pour utiliser le composant dans plusieurs
// pages différentes avec une image différente ou sans celle-ci, 
// et avec un titre différent ou sans celui-ci
export default function Banner({ pic, title }) {
  return (
    <div className='banner'>
        <img className='banner-pic' src={pic} alt="Un paysage" />
        {title && (
          <h1 className='banner-title'>{title}</h1>
        )}   
    </div>
  );
};
