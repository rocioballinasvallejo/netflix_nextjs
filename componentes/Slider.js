import React from 'react';

const Slider = () => {
    return (
        <div className="pelicula-principal">
            <div className="contenedor">
                <h3 className="titulo">One Piece</h3>
                <p className="descripcion">
                    One Piece narra la historia de un joven llamado Monkey D. Luffy, que inspirado por su amigo pirata Shanks, comienza un viaje para alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá encontrar el tesoro One Piece dejado por el anterior rey de los piratas Gol D. Roger.
                </p>

                <button className="color-primary hasLabel hasIcon ltr-podnco" tabIndex="-1" type="button">
                    <div className="ltr-1st24vv">
                        <div className="medium ltr-iyulz3" role="presentation">
                            <svg width="180" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true">
                                <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="ltr-1npqywr" style={{ width: '1rem' }}></div>
                    <span className="ltr-1vh9doa">Reproducir</span>
                </button>

                <button className="color-secondary hasLabel hasIcon ltr-18ezbm2" data-uia="billboard-more-info" type="button">
                    <div className="ltr-1st24vv">
                        <div className="medium ltr-iyulz3" role="presentation">
                            <svg width="180" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-0 e1mhci4z1" data-name="CircleI" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="ltr-1npqywr" style={{ width: '1rem' }}></div>
                    <span className="ltr-1vh9doa">Más información</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;