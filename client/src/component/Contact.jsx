import { FaPhone, FaWhatsapp, FaVoicemail } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="box">
        <span>
          <FaPhone />
        </span>
        <span>Give Us a call</span>
        <span>+91 6572894590</span>
      </div>
      <div className="box">
        <span>
          <FaWhatsapp />
        </span>
        <span>WhatsApp Us</span>
        <span>+91 6572894590</span>
      </div>
      <div className="box">
        <span>
          <FaVoicemail />
        </span>
        <span>Send us an email</span>
        <span>info@zestique.com</span>
      </div>
    </div>
  );
};

export default Contact;
