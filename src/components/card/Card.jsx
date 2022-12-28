import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

// On passe les props "title", "id" et "cover"
export default function Card({ title, id, cover }) {
  return (
    /* On attribut une clé à chaque élément "card" pour leur apporter
    une identité stable, cela permet d'identifier le/les éléments qui
    ont été ajoutés, supprimés ou modifiés dans notre liste */
    <div className='card' key={title + id}>
        <Link className='card-link' to={`/housing/${id}`}>
                <div className='card-background'></div>
                <img className='card-pic' src={cover} alt={title} />
                <h2 className='card-title'>{title}</h2> 
        </Link>
    </div>
  )
}
