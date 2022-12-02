import React from 'react';
import pic from '@/assets/banner.svg';
import './banner.css';

export default function Banner() {
  return (
    <div className='banner'>
        <img className='banner-pic' src={pic} alt="Un paysage" />
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
    </div>
  );
};
