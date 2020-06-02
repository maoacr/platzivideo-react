import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
	<div className="carousel-item">
        <img className="carousel-item__img" src="assets/7.jpg" alt="random" />
        <div className="carousel-item__details">
            <div>
                <img src="https://img.icons8.com/flat_round/64/000000/plus.png" alt="play" />
                <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="plus" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;