import React, { useState } from 'react';

function Films() {

    const [ films , setFilms ] = useState([]);

    const getFilms = async () => await fetch("https://swapi.dev/api/films")
    .then ( response => response.json() )
    .then ( object => setFilms ( object.results ) );

    getFilms();

    return (
        <div>
            <ul>
                {
                    films.map( item => (
                        <li key={item}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Films;