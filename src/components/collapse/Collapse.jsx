import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import vectorDown from '@/assets/VectorDown.png';
import vectorUp from '@/assets/VectorUp.png';
import './collapse.css'

export default function Collapse() {
    const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='collapse-open'>
        <button className='collapse-button' onClick={() => setIsOpen(false)}>
            <img src={vectorUp} alt="Flèche d'ouverture menu" />
        </button>
        <ul className='collapse-ul'>
            <li className='collapse-li'><Link className='collapse-link' to='/home'>Accueil</Link></li>
            <li className='collapse-li'><Link className='collapse-link' to='/about'>A Propos</Link></li>
        </ul>
    </div>
  ) : (
    <div className='collapse-close'>
        <button className='collapse-button' onClick={() => setIsOpen(true)}>
            <img src={vectorDown} alt="Flèche d'ouverture menu" />
        </button>
    </div>
  )
}
