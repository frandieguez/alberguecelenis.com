import React from "react";
import BookNowButton from "../Buttons/BookNowButton";

export default function Hero() {
  return (
    <div className="hero">
      {/* <div className="hero_promotion">
        <img src="/assets/photos/flyer.jpg" />,
      </div>
      <div className="hero_hours">
        <strong className="hero_hours__title">
          Horario de recepción en Septiembre y Octubre
        </strong>
        <div className="hero_hours__subtitle">9:30 - 17:30</div>
      </div> */}
      <div className="hero_text">
        <div>
          <div className="hero_text_welcome">Bienvenido a</div>
          <h2 className="hero_text_subname">Albergue</h2>
          <h1 className="hero_text_name">Celenis</h1>
          <div className="hero_text_legend">
            Un lugar idílico donde descansar en el Camino Portugués de Santiago
            en Caldas de Reis.
          </div>
        </div>
      </div>
      <div className="hero_footer">
        <div>
          <BookNowButton />
        </div>
        <div className="btn btn--rounded">
          <div className="btn--rounded_text">⌄</div>
        </div>
        {/* <div>Scroll</div> */}
      </div>
    </div>
  );
}
