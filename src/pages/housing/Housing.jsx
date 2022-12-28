import React from 'react';
import Slideshow from '@/components/slideshow/Slideshow';
import Rating from '@/components/rating/Rating';
import Collapse from '@/components/collapse/Collapse';
import * as Apartments from '@/data/Apartments.json';
import { useParams, Navigate } from "react-router-dom"
import './housing.css';

export default function Housing() {
    // On récupère l'id du logement dans l'URL
    const params = useParams()
    const id = params.id
    // On utilise la méthode find afin de récupérer le logement séléctionné
    // grace à son id dans le tableau Apartments (fichier json)
    const selectedApartment = Apartments.default.find(apartment => apartment.id === id)

    // On utilise une condition dans le cas ou l'id du logement serait
    // incorrect, afin de rediriger l'utilisateur sur la page "erreur"
    if(selectedApartment === undefined){
        return <Navigate to='/404' />
    }

    // On récupère la notation des logements
    const selectedApartmentRating = selectedApartment.rating

    return (
        <div className='body-housing'>
            <Slideshow />
            <div className="housing-container">

                <div className="housing-header">
                    <div className="housing-location">
                        <h1>{selectedApartment?.title}</h1>
                        <h2>{selectedApartment?.location}</h2>
                        <div className="housing-location-tags">
                            {/* On récupère les éléments tag et leur index via la 
                            méthode "map" afin de les affficher sur la page */}
                            {selectedApartment?.tags.map((tag, index) => {
                                return(
                                    <div className="housing-location-tags-tag" key={id + tag + index}>
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="housing-infos">
                        <div className="housing-infos-host">
                            <p>{selectedApartment?.host.name}</p>
                            <img className='housing-infos-host-img' src={selectedApartment?.host.picture} alt="Hôte du logement" />
                        </div>
                        <div className="housing-infos-rating">
                            {/* On intègre le composant "Rating" auquel on passe les props
                            "ratingArray" et "maxRate" afin d'afficher la note du logement */}
                            <Rating 
                                ratingArray={selectedApartmentRating} 
                                maxRate={"5"} 
                            />
                        </div>
                    </div>
                </div> 

                <div className="housing-collapses">
                    <div className="housing-collapse-description">
                        <Collapse 
                            title={'Description'}
                            id={selectedApartment?.id}
                            content={selectedApartment?.description}
                        />
                    </div>
                    <div className="housing-collapse-fittings">
                        {/* Dans ce collapse on passe la prop "equipments"
                        contrairement au précédent ou l'on y passe "content"*/}
                        <Collapse 
                            title={'Équipements'}
                            id={selectedApartment?.id}
                            equipments={selectedApartment?.equipments}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};