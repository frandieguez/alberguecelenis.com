import React from "react";
import Image from "next/image";

export default function Rooms() {
  return (
    <div id="rooms" className="rooms">
      <h3 className="rooms_title">
        Habitación privada o camas literas, sábanas y Wi-Fi gratis, así como
        cómodos baños. Lavandería con lavadora, secadora y cocina comunitaria.
      </h3>
      <div className="rooms_content">
        {[
          {
            id: "habitacion-privada",
            photo: (
              <Image
                width="420"
                height="264"
                src="/assets/photos/habitacion-privada.webp"
                alt="Habitacion privada"
                layout="responsive"
                priority
              />
            ),
            name: "Habitación privada",
            explanation:
              "Si necesitas privacidad te ofrecemos habitación familiar doble así como baño privado.",
          },
          {
            id: "literas",
            photo: (
              <Image
                width="417"
                height="558"
                src="/assets/photos/literas.webp"
                alt="Cómodas literas dobles"
                layout="responsive"
                priority
              />
            ),
            name: "Cómodas literas dobles",
            explanation:
              "Excelentes habitaciones compartidas en camas litera con todos los servicios, perfectas para un descanso completo en el Camino de Santiago.",
          },
        ].map((room) => {
          return (
            <div className="rooms_room" key={room.id}>
              <div className="rooms_room_image">{room.photo}</div>
              <div className="rooms_room_info">
                <div className="rooms_room_info_title">{room.name}</div>
                <div className="rooms_room_info_subtitle">
                  {room.explanation}
                </div>
                <button className="rooms_room_info_button button button--small">
                  Explore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
