import aboutImage from "../assets/asset 5.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      className="aboutContainer"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="rowContainer">
        <div className="imgContainer">
          <img src={aboutImage} alt="" />
        </div>
        <div className="textContainer">
          <span>About Zestique</span>
          <span>
            Zestique Restaurant, a beloved culinary gem nestled in the heart of
            the city, boasts a rich and storied history that has earned it a
            place of distinction in the local dining scene. The restaurants
            journey began over two decades ago when visionary chef and owner,
            Olivia Bennett, embarked on a culinary adventure with a dream to
            create a dining experience that celebrated the diverse and vibrant
            flavors of global cuisine. Her passion for food and creativity led
            to the establishment of Zestique, named after her love for the zesty
            and spirited qualities of her dishes.
          </span>
          <span>
            Throughout the years, Zestique has continually evolved, adapting to
            the ever-changing food landscape while staying true to its roots.
            The restaurants history is marked by a commitment to fresh,
            locally-sourced ingredients, a dedication to culinary innovation,
            and a warm, inviting ambiance
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
