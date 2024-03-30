import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Categories.css';

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
                    people.map( (item , index) => (
                        <li key = {item}>
                            <nav>
                                <NavLink to = {`/people/${index+1}`}>{item.name}</NavLink>
                            </nav>
                        </li>
                    ) )
                }
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default People;