import React from 'react';
import './Card.scss'

function Card({ name }) {
    return (
        <div class="card-container">
            <p>{name}</p>
        </div>
    );
}

export default Card;