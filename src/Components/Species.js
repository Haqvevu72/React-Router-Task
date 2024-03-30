import React , { useState } from 'react';

function Species() {
    const [ species , setSpecies ] = useState ([])

    const getSpecies = async () => await fetch("https://swapi.dev/api/species")
    .then ( response => response.json() )
    .then ( object => setSpecies (object.results));

    getSpecies();

    return (
        <div>
            <ul>
                {
                    species.map( item => (
                        <li key = {item}>{item.name}</li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default Species;