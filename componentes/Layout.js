import React from "react";

import Header from "./Header";
import Slider from "./Slider";
import PeliculasRecomendadas from "./PeliculasRecomendadas";
import ContinuarViendo from "./ContinuarViendo";
import Dramaticas from "./Dramaticas";
import Carousel from "./cerrusel";
import Image from 'next/image'

const LayoutComponent = () => {
    return (
        <div>
            <Header />
            <Slider/>
            <PeliculasRecomendadas/>
            <ContinuarViendo/>
            <Dramaticas/>
            {/* <div className="App">
      <h1>React Carousel</h1>
      <Carousel images={images} />
      <div>
      { <Image src=""width={300/10} height={300/10} alt="no carga la imagen"/> }
      </div>
    </div> */}
        </div>
    )
}
export default LayoutComponent;