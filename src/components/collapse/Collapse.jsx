import React from 'react';
import { useState } from 'react';
import vector from '@/assets/Vector.png';
import './collapse.css'

export default function Collapse({ title, content, equipments }) {
  // On appelle le Hook "useState" permettant l'utilisation d'un état local à l'intérieure
  // de la variable "isOpen" que l'on initialise sur "false" et que l'on modifiera à l'aide 
  // de la fonction "setIsOpen" 
  const [isOpen, setIsOpen] = useState(false)

  // On utilise une condition pour déterminer l'état de notre composant
  // Ensuite on déclare l'évenement "onClick" que l'on veut capter et on 
  // lui passe la fonction "setIsOpen" qui nous permettra d'ouvrir ou de
  // fermer notre élément en fonction de son état initial
  return isOpen ? (
    <div className='collapse-open'>
        <button className='collapse-button' onClick={() => setIsOpen(false)}>
            {title}
            <img src={vector} alt="Flèche d'ouverture menu" />
        </button>
        {/* On utilise une condition qui permet d'afficher un contenu différent dans notre
        composant grace aux props "content" et "equipments". Soit un texte, soit une liste */}
        {equipments ? (
        <div className='collapse-array-content'>
          {equipments.map((equipment, index) => (
            <li
              className='housing-collapse-fittings-li'
              key={equipment + index}
            >
              {equipment}
            </li>
          ))}
        </div>
      ) : (
        <p>{content}</p>
      )}
    </div>
  ) : (
    <div className='collapse-close'>
        <button className='collapse-button' onClick={() => setIsOpen(true)}>
            {title}
            <img src={vector} alt="Flèche d'ouverture menu" />
        </button>
    </div>
  )
}