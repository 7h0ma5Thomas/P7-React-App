import React from 'react';
import Collapse from '@/components/collapse/Collapse';
import Banner from '@/components/banner/Banner';
import picAbout from '@/assets/bannerAbout.jpg';
import * as collapseDatas from '@/data/CollapseDatas.json';
import './about.css';

// On importe un tableau contenant les données
// à afficher dans le composant collapse 
const allDatas = collapseDatas.default

export default function About() {
    return (
        <div className='body-about'>
            {/* On passe pic au composant banner afin d'afficher l'image 
            correspondante à cette page précisément, on ne passse pas de titre */}
            <Banner 
                pic={picAbout}
            />
            <div className='body-about-collapses'>
            {/* On utilise la méthode "map" pour récupérer chaque éléments 
            que l'on passe au composant afin de les afficher sur cette page*/}
            {allDatas.map(({ title, id, content }) => (
                <Collapse 
                    key={title + id}
                    title={title}
                    id={id}
                    content={content}
                />
            ))}   
            </div>
        </div>
    );
};