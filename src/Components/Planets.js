import React, { useState } from 'react';

function Planets() {
    const [ planets , setPlanets ] = useState ([])

    const getPlanets = async () => await fetch("https://swapi.dev/api/planets")
    .then ( response => response.json() )
    .then ( object => setPlanets (object.results));

    getPlanets();

    return (
        <div>
            <ul>
                {
                    planets.map( item => (
                        <li key = {item}>{item.name}</li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default Planets;