import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div class='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180s`}/>
        <h1>{props.monster.name}</h1>
            
    </div>
)

