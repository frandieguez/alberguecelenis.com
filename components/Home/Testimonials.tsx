import React from "react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials t2">

      <div className="page-wrapper">
        <h3 className="testimonials_title">Testimonials</h3>
        <div className="testimonials_list">
          <ul>
            <li className="testimonial">
              <div className="testimonial_phrase">
                "Un albergue de diez. El mejor albergue en el que he estado en
                mucho tiempo."
              </div>
              <div className="author">Eugenio, España</div>
            </li>
          </ul>
          <div className="testimonials_buttons">
            <button className="button button--small">‹</button>
            <button className="button button--small">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
