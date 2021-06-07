import React from "react";

export default function ContactUs() {
  return (
    <div id="contact-us" className="contact-us">
      <div className="page-wrapper">
        <h3 className="contact-us_title">We are here for you</h3>
        <div>
          At Celenis Hotel, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </div>
        <div className="contact-us_content">
          <div className="contact-us_content_info">
            <div>
              Address XX, Caldas de Reis <br />
            </div>
            <a href="#" className="contact-us_content_info_view-map">
              View map <span className="arrow">&rarr;</span>
            </a>
            <div className="phone">Phone: +34 XXX XXX XXX</div>
            <div className="email">Email: alberguecelenis@gmail.com</div>
          </div>
          <form action="" className="contact-us_content_form">
            <label htmlFor="form_name">Name</label>
            <input
              type="text"
              name="name"
              id="form_name"
              placeholder="Your name"
            />
            <label htmlFor="form_email">Email</label>
            <input
              type="text"
              name="email"
              id="form_email"
              placeholder="Your email to respond you back"
            />
            <label htmlFor="form_body">Your message</label>
            <textarea
              name="body"
              id="form_body"
              cols={35}
              rows={10}
              placeholder="Write her your message"
            ></textarea>
            <button className="button button--dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}