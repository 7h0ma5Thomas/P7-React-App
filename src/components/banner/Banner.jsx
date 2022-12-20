import React from 'react';
import './banner.css';

// Utilisation de props pour utiliser le composant dans plusieurs
// pages différentes avec une image différente ou sans celle-ci, 
// et avec un titre différent ou sans celui-ci
export default function Banner(props) {
  return (
    <div className='banner'>
        <img className='banner-pic' src={props.pic} alt="Un paysage" />
        {props.title && (
          <h1 className='banner-title'>{props.title}</h1>
        )}   
    </div>
  );
};
