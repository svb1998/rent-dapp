import React from 'react'
import Buscador from './components/Buscador';
import Card from './components/Card';
import './Home.scss'

function Home() {
    return (
        <div>
            <div class="searcher-section">
                <h1 class="title">Do you need to rent something?</h1>
                <Buscador />
            </div>
            <div class="categories-section">
                <h2>Categorías principales</h2>
                <div class="categories-container">
                    <Card name={"Deportes"} />
                </div>
            </div>
            <div class="cities-section">
                <h2>Alquila productos cerca de ti</h2>
                <div class="categories-container">
                    <Card name={"Deportes"} />
                </div>
            </div>
        </div>
    );
}

export default Home;