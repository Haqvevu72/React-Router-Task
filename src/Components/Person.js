import React , { useState } from 'react';
import { useParams } from 'react-router-dom';

function Person() {
    const { personId } = useParams();

    const [ person , setPerson ] = useState ();

    const getPerson = async () => await fetch(`https://swapi.dev/api/people/${personId}`)
    .then ( response => response.json() )
    .then ( object => setPerson (object));

    getPerson();

    return (
        <div>
            <h1>{person && person.name}</h1>
        </div>
    );
}

export default Person;
