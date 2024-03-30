import React, { useState } from 'react';

function People() {
    const [ people , setPeople ] = useState ([]);

    const getPeople = async () => await fetch("https://swapi.dev/api/people")
    .then ( response => response.json() )
    .then ( object => setPeople (object.results));

    getPeople();

    return (
        <div>
            <ul>
                {
                    people.map( item => (
                        <li key = {item}>{item.name}</li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default People;