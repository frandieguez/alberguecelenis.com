import React from "react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials" data-class="testt">
      <div className="page-wrapper">
        <h3 className="testimonials_title">Testimonials</h3>
        <div className="testimonials_list">
          <ul>
            <li className="testimonial">
              <div className="testimonial_phrase">
                "Calm, Serene, Retro – What a way to relax and enjoy"
              </div>
              <div className="author">Mr. and Mrs. Baxter, UK</div>
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
