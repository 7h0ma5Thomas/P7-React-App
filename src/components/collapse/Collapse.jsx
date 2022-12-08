import React from 'react';
import { useState } from 'react';
import vector from '@/assets/Vector.png';
import './collapse.css'

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='collapse-open'>
        <button className='collapse-button' onClick={() => setIsOpen(false)}>
            {title}
            <img src={vector} alt="Flèche d'ouverture menu" />
        </button>
        <p>{content}</p>
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