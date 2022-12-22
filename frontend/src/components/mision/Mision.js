import React from "react";
import "./Mision.css";

function Mision() {
  return (
    <>
      <section className="mision">
        <div className="container">
          <h1 className="title2">MISION</h1>
          <p className="parMision">
            Formamos parte de una sociedad que brinda un excelente servicio de
            movilidad ágil, eficiente, cómodo y sostenible para conocer las
            ciudades y lugares de interés de donde nos encontramos, respondiendo
            a las dinámicas del mundo y contribuyendo a una mejora en cuanto a
            la movilidad y mejorando la calidad de vida de los usuarios de
            nuestro servicio.
          </p>
        </div>
        <img
          className="image4"
          srcSet="https://motorcycleparadise.net/wp-content/uploads/2020/04/IMG_4746-scaled.jpg, 
            https://motorcycleparadise.net/wp-content/uploads/2020/04/IMG_4746-scaled.jpg 1.5x, 
            https://motorcycleparadise.net/wp-content/uploads/2020/04/IMG_4746-scaled.jpg 2x"
          sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
          src="https://motorcycleparadise.net/wp-content/uploads/2020/04/IMG_4746-scaled.jpg"
          alt="paradise"
        />
      </section>
    </>
  );
}

export default Mision;
