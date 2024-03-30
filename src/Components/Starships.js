import React  , { useState } from 'react';

function Starships() {
    const [ starships , setStarShips ] = useState ([])

    const getStarShips = async () => await fetch("https://swapi.dev/api/starships")
    .then ( response => response.json() )
    .then ( object => setStarShips (object.results));

    getStarShips();

    return (
        <div>
            <ul>
                {
                    starships.map( item => (
                        <li key = {item}>{item.name}</li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default Starships;