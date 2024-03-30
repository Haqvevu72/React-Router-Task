import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {

    const [ categories , setCategories ] = useState ( {} );

    const getCategories = async () => await fetch ( "https://swapi.dev/api/" )
    .then ( response => response.json() )
    .then ( object =>  setCategories ( object ));

    getCategories();

    const arr = Object.keys(categories);

    return (
        <div className = 'nav-bar-container'>
            <ul className = 'nav-bar-elements'>
                <li>
                    <NavLink className='nav-link' to = '/'>home</NavLink>
                </li>
                {
                    arr.map ( item => (
                        <li key = { item }>
                            <nav>
                                <NavLink className='nav-link' to = {item}>{item}</NavLink>
                            </nav>
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default Header;