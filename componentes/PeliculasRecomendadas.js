import React, { useState, useEffect } from 'react';

const PeliculasRecomendadas = () => {
    /* const slidesData = [
        { id: 1, src: 'https://www.rocktotal.com/wp-content/uploads/2016/01/toro-pelicula-cartel-horizontal.jpg', alt: 'Image 1', isFavorite: false },
        { id: 2, src: 'https://www.rocktotal.com/wp-content/uploads/2016/01/toro-pelicula-cartel-horizontal.jpg', alt: 'Image 2', isFavorite: false },
        { id: 3, src: 'https://hips.hearstapps.com/hmg-prod/images/el-lodo-horizontal-100x70-1630996402.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*', alt: 'Image 3', isFavorite: false },
        { id: 4, src: 'https://www.rocktotal.com/wp-content/uploads/2016/01/toro-pelicula-cartel-horizontal.jpg', alt: 'Image 4', isFavorite: false },
        { id: 5, src: 'https://www.rocktotal.com/wp-content/uploads/2016/01/toro-pelicula-cartel-horizontal.jpg', alt: 'Image 5', isFavorite: false },
        { id: 6, src: 'https://hips.hearstapps.com/hmg-prod/images/el-lodo-horizontal-100x70-1630996402.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*', alt: 'Image 6', isFavorite: false },

    ]; */

    /*     const [slides, setSlides] = useState(slidesData);
        const [currentSlide, setCurrentSlide] = useState(0);
        const visibleSlides = 5; */

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

    const toggleFavorite = (index) => {
        const updatedSlides = [...slides];
        updatedSlides[index].isFavorite = !updatedSlides[index].isFavorite;
        setSlides(updatedSlides);
    };

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
        <div class="peliculas-recomendadas contenedor">
            <div class="contenedor-titulo-controles">
                <h3>peliculas vistas</h3>
                <div class="indicadores"></div>
            </div>
            <div className="carousel-containercc">
                <div className="carouselcc">
                    <button className='buttoncc' id="prevBtn" onClick={prevSlide}>{'<'}
                    </button>
                    {slides.map((slide, index) => (
                        <div
                            className="carousel-slidecc"
                            key={slide.id}
                            style={{
                                display:
                                    index >= currentSlide &&
                                        index < currentSlide + visibleSlides
                                        ? 'block' : 'none',
                            }}
                        >
                            <div className="cardcc">
                                <img src={slide.src} alt={slide.alt} />
                                <button
                                    className={`heart-buttoncc ${slide.isFavorite ? 'red' : ''}`}
                                    onClick={() => toggleFavorite(index)}
                                >
                                    <i>♥</i>
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className='buttoncc' id="nextBtn" onClick={nextSlide}>{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default PeliculasRecomendadas;
