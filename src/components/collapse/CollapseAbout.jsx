import React from 'react';
import { useState } from 'react';
import vector from '@/assets/Vector.png';
import './collapseAbout.css'

export default function CollapseAbout({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='collapseAbout-open'>
        <button className='collapseAbout-button' onClick={() => setIsOpen(false)}>
            {title}
            <img src={vector} alt="Flèche d'ouverture menu" />
        </button>
        <p>{content}</p>
    </div>
  ) : (
    <div className='collapseAbout-close'>
        <button className='collapseAbout-button' onClick={() => setIsOpen(true)}>
            {title}
            <img src={vector} alt="Flèche d'ouverture menu" />
        </button>
    </div>
  )
}