import React , { useState }from 'react';

function Vehicles() {
    const [ vehicles , setVehicles ] = useState ([])

    const getVehicles = async () => await fetch("https://swapi.dev/api/vehicles")
    .then ( response => response.json() )
    .then ( object => setVehicles (object.results));

    getVehicles();

    return (
        <div>
            <ul>
                {
                    vehicles.map( item => (
                        <li key = {item}>{item.name}</li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default Vehicles;