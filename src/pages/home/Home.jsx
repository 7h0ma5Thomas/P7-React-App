import React from 'react';
import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import * as Apartments from '@/data/Apartments.json';
import pic from '@/assets/banner.jpg';
import './home.css';

const allAparts = Apartments.default

export default function Home() {
    return (
        <div className='body'>
            {/* On passe pic et title afin d'afficher l'image et le titre 
            correspondants à cette page précisément */}
            <Banner 
                pic = {pic}
                title = "Chez vous, partout et ailleurs"
            />
            <div className='collection'>
                {/* On récupère les éléments title, id et cover via la 
                méthode "map" afin de les affficher sur la page */}
                {allAparts.map(({ title, id, cover}) => (
                    /* On donne une clé à chaque élément pour leur apporter une 
                    identité stable en cas de changement, d'ajout ou de suppression */
                    <Card 
                        key={title + id}
                        title={title}
                        id={id}
                        cover={cover}
                    />
                ))}
            </div>
        </div>
    );
};