import React from "react";
import BookNowButton from "../Buttons/BookNowButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_text">
        <div>
          <div className="hero_text_welcome">Bienvenido a</div>
          <h2 className="hero_text_subname">Albergue</h2>
          <h1 className="hero_text_name">Celenis</h1>
          <div className="hero_text_legend">
            Un lugar idílico donde descansar en el Camino Portugés de Santiago
            en Caldas de Reis.
          </div>
        </div>
      </div>
      <div className="hero_footer">
        <div>
          <BookNowButton />
        </div>
        <div className="btn btn--rounded">‹</div>
        {/* <div>Scroll</div> */}
      </div>
    </div>
  );
}
