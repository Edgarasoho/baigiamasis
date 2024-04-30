import React from "react";
import Map from "./ContactMap";
import "./StyleContact.scss";
import { MdFactory } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div className="contact-info">
        <h1>Kontaktai</h1>
        <p>
          <MdAlternateEmail />
          El.paštas: info@example.com
        </p>
        <p>
          <FaPhoneVolume />
          Telefonas: +370 12345678
        </p>
        <p>
          <FaAddressBook />
          Adresas: Pavyzdžio g. 1, Vilnius, Lietuva
        </p>
        <br />

        <p>
          <MdFactory />
          Gamybos adresas: Pavyzdžio g. 1, Vilnius, Lietuva
        </p>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
