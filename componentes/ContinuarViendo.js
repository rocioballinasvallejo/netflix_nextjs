import React, { useState, useEffect } from 'react';

const ContinuarViendo = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const visibleSlides = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '8a61b43a2fmshb3e0453de901c71p1c41a0jsn79d98fa98dd2',
                        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
                    },
                };

                const response = await fetch(url, options);
                const data = await response.json();

                const newSlides = data.d.map((item) => ({
                    id: item.id,
                    src: item.i.imageUrl,
                    alt: item.l,
                    isFavorite: false,
                }));

                setSlides(newSlides);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
        if (currentSlide < 0) {
            setCurrentSlide(slides.length - visibleSlides);
        }
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1);
        if (currentSlide + visibleSlides > slides.length) {
            setCurrentSlide(0);
        }
    };

    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
                <h3>Continuar Viendo</h3>
                <div className="indicadores"></div>
            </div>

            <div className="carousel-containercc">
                <div className="carouselcc">
                    <button className="buttoncc" id="prevBtn" onClick={prevSlide}>
                        {'<'}
                    </button>
                    {slides.map((slide, index) => (
                        <div
                            className="carousel-slidecc"
                            key={slide.id}
                            style={{
                                display:
                                    index >= currentSlide &&
                                        index < currentSlide + visibleSlides
                                        ? 'block'
                                        : 'none',
                            }}
                        >
                            <div className="cardcc2">
                                <img src={slide.src} alt={slide.alt} />
                            </div>
                        </div>
                    ))}
                    <button className="buttoncc" id="nextBtn" onClick={nextSlide}>
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContinuarViendo;
