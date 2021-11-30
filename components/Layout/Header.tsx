import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header_links">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Albergue-Celenis-103833938584978"
                title="Visit our Facebook page"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <Image
                    width="11"
                    height="20"
                    src="/icons/social-facebook.svg"
                    alt="Facebook"
                  />
                </div>
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
                    width="20"
                    height="16"
                    src="/icons/social-twitter.svg"
                    alt="Twitter"
                  />
                </div>
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
                    width="20"
                    height="20"
                    src="/icons/social-instagram.svg"
                    alt="Instagram"
                  />
                </div>
              </a>
            </li>
            <li>
              <a className="header_link-phone" href="tel:0034650-714-355">
                📞 +34 650 714 355
              </a>
            </li>
          </ul>
        </div>
        <div className="header_logo">
          <a href="/#" className="header_logo_image">
            <Image
              src="/logos/logo-blue-center.svg"
              width="180"
              height="61"
              alt="Celenis Hostel"
            />
          </a>
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <a href="/#rooms" title="Ver información sobre la habitaciones">
                Habitaciones
              </a>
            </li>
            <li>
              <a href="/#facilities" title="Ver información de los servicios">
                Servicios
              </a>
            </li>
            {/* <li>
              <a href="/#contact-us">Contact us</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
