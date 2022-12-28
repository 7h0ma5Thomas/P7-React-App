import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './burgerMenu.css';

export default function BurgerMenu() {
  // On appelle le Hook "useState" permettant l'utilisation d'un état local à l'intérieure
  // de la variable "isOpen" que l'on initialise sur "false" et que l'on modifiera à l'aide 
  // de la fonction "setIsOpen" 
  const [isOpen, setIsOpen] = useState(false)

  // On utilise une condition pour déterminer l'état de notre composant
  // Ensuite on déclare l'évenement "onClick" que l'on veut capter et on 
  // lui passe la fonction "setIsOpen" qui nous permettra d'ouvrir ou de
  // fermer notre élément en fonction de son état initial
  return isOpen ? (
    <div className='burgerMenu-open'>
        <button className='burgerMenu-button' onClick={() => setIsOpen(false)}>
          <p className='burgerMenu-button-cross'>x</p>
        </button>
        <ul className='burgerMenu-ul'>
            <li className='burgerMenu-li'><Link className='burgerMenu-link' to='/home'>Accueil</Link></li>
            <li className='burgerMenu-li'><Link className='burgerMenu-link' to='/about'>A Propos</Link></li>
        </ul>
    </div>
  ) : (
    <div className='burgerMenu-close'>
        <button className='burgerMenu-button' onClick={() => setIsOpen(true)}>
          <span></span>
        </button>
    </div>
  )
}