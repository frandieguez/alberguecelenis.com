import React from "react";

export default function Facilities() {
  return (
    <div id="facilities" className="facilities">
      <h3 className="facilities_title">Servicios</h3>
      <div className="facilities_content">
        {[
          {
            id: "washer",
            icon: <img src="./icons/facilities-washer.svg" />,
            title: "Lavadora y secadora",
            subtitle:
              "Tenemos nuestra propia lavanderia self-service, donde puedes cuidar tu ropa.",
          },
          {
            id: "showers",
            icon: <img src="./icons/facilities-shower.svg" />,
            title: "Duchas compartidas",
            subtitle:
              "Contamos con duchas compartidas para las literas. Si tu habitación es privada cuentas con baño privado para ti.",
          },
          {
            id: "kitchen",
            icon: <img src="./icons/facilities-kitchen.svg" />,
            title: "Cocina",
            subtitle:
              "Necesitas calentar o preparar algo para comer, contamos con electrodomésticos para ti.",
          },
          {
            id: "environment",
            icon: <img src="./icons/facilities-landscape.svg" />,
            title: "Entorno increíble",
            subtitle:
              "Estarás rodeado de un entorno increíble, sin ninguna molestia ni ruídos, simplemente descanso.",
          },
        ].map((facility) => {
          return (
            <div className="facilities_facility" key={facility.id}>
              <div className="facilities_facility_image">{facility.icon}</div>
              <div className="facilities_facility_title">{facility.title}</div>
              <div className="facilities_facility_subtitle">
                {facility.subtitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
