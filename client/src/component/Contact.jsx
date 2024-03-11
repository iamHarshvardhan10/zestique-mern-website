import { FaPhone, FaWhatsapp, FaVoicemail } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      className="contactContainer"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
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
    </motion.div>
  );
};

export default Contact;
