import React from "react";
import "./intro.scss";

export default function Intro(props) {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="/assets/decidiendo.jpg" />
        </div>
      </div>
      <div className="right">
        <div className="textContainer">
            <h2>Renta de Sitios, Blogs, Landing page, Puntos de venta, Oficinas, Academias, Y tiendas Virtuales.</h2>
          <p>
            Además de nuestras opciones de alquiler, también ofrecemos la
            posibilidad de compra de espacios de trabajo y oficinas. Esta opción
            es ideal para aquellos que buscan un espacio de trabajo permanente y
            desean tener la propiedad del lugar. Ofrecemos una amplia variedad
            de opciones de compra y trabajamos con nuestros clientes para
            encontrar la opción que mejor se adapte a sus necesidades y
            presupuesto. Además, ofrecemos planes de financiamiento para ayudar
            a nuestros clientes a hacer realidad su compra.
          </p>
        </div>
      </div>
    </div>
  );
}
