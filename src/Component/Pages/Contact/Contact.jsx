import React from "react";
import Map from "./ContactMap";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1>Kontaktai</h1>
        <p>El.paštas: info@example.com</p>
        <p>Telefonas: +370 12345678</p>
        <p>Adresas: Pavyzdžio g. 1, Vilnius, Lietuva</p>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
