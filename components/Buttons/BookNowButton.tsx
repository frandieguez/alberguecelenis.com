import React from "react";
import Image from "next/image";

export default function BookNowButton() {
  return (
    <a
      className="btn button book_now ibe"
      href="#"
      target="_blank"
      title="Book some room"
      data-region="emea"
      data-channelcode="alberguecelenisdirect"
    >
      <span className="book_now_content">
        <Image
          width={20}
          height="20"
          src="/icons/icon-house.svg"
          alt="Reserva ahora"
        />
        Reservar ahora
      </span>
    </a>
  );
}
