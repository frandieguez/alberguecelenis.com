import React from "react";
import BookNowButton from "../../Buttons/BookNowButton";
import Image from "next/image";

import "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="footer" className={`footer`}>
      <div className="footer_group_wrapper page-wrapper">
        <div className="footer_group">
          <Image
            className="footer_logo"
            src="/assets/images/logo-white-small.svg"
            height="39"
            width="135"
            alt="Celenis Hostel"
          />
          <div className="footer_group_info_address">
            Rúa das Silgadas, 16, <br />
            36650 Caldas de Reis, Pontevedra <br />
          </div>
          <div className="footer_group_info_phone">+34 650 71 43 55</div>
          <div className="footer_group_info_email">
            &#097;&#108;&#098;&#101;&#114;&#103;&#117;&#101;&#099;&#101;&#108;&#101;&#110;&#105;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </div>
        </div>
        <div className="footer_group footer_group_social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Albergue-Celenis-103833938584978"
                title="Visit our Facebook page"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <Image
                    height="30"
                    width="40"
                    src="/icons/social-facebook.svg"
                    alt="Facebook"
                  />
                </div>
                Facebook
              </a>
            </li>  
            {/* <li>
              <a
                href="https://twitter.com/alberguecelenis"
                title="Visit our Twitter profile"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <Image
                    width="35"
                    height="40"
                    src="/icons/social-twitter.svg"
                    alt="Twitter"
                  />
                </div>
                Twitter
              </a>
            </li> */}
            <li>
              <a
                href="https://www.instagram.com/alberguecelenis"
                title="Visit our Instagram profile"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <Image
                    width="40"
                    height="40"
                    src="/icons/social-instagram.svg"
                    alt="Instagram"
                  />
                </div>
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_group footer_grous_links">
          <ul>
            <li>
              <a href="/aviso-legal">Aviso Legal</a>
            </li>
            <li>
              <a href="#contact-us">Contacto</a>
            </li>
            <li>Términos &amp; condiciones</li>
          </ul>
        </div>
        <div className="footer_group footer_grous_button">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
