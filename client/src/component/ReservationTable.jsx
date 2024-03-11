import Contact from "./Contact";
import {motion} from 'framer-motion'


const ReservationTable = () => {
  return (
    <>
      <motion.div className="reservationTable" id="reservation"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      >
        <h1>Reserve A table</h1>

        <div className="tableContainer">
          <div className="formContainer">
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Name* </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="enter name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="number">Guests* </label>
                  <input
                    type="number"
                    id="name"
                    name="number"
                    placeholder="No of Guest"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="email">Email* </label>
                <input
                  type="email"
                  id="name"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="date">Date* </label>
                  <input type="date" id="name" name="date" />
                </div>
                <div className="col">
                  <label htmlFor="phone">Phone* </label>
                  <input
                    type="phone"
                    id="name"
                    name="phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="message">Message* </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Any special requests?"
                ></textarea>
              </div>

              <button>Submit</button>
            </form>
          </div>
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5687052504863!2d72.84631360991044!3d19.214031181944137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d67c62614d%3A0x38100a6589f147d3!2sRaghuleela%20Mega%20Mall%2C%20Kandivali%2C%20Jai%20Bhim%20Sanjay%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1708945388444!5m2!1sen!2sin"
              className="map"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
      <Contact/>
    </>
  );
};

export default ReservationTable;
