import React from 'react';
import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import * as Apartments from '@/data/Apartments.json';
import './home.css';

const allAparts = Apartments.default

export default function Home() {
    return (
        <div className='body'>
            <Banner />
            <div className='collection'>
                {allAparts.map(({ title, id, cover}) => (
                    <Card 
                        title={title}
                        id={id}
                        cover={cover}
                        key={title + id}
                    />
                ))}
            </div>
        </div>
    );
};