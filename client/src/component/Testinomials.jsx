import test1 from "../assets/profile01.png";
import test2 from "../assets/profile02.png";
import { motion } from "framer-motion";

const Testinomials = () => {
  const testimonial = [
    {
      id: 1,
      paragraph:
        "An enchanting experience at Zestique! The vibrant ambiance, coupled with the sensational flavors, made our evening truly memorable. The attention to detail and commitment to culinary excellence shine through every dish. A must-visit for food enthusiasts!",
      name: "Sarah W.",
      image: test1,
    },
    {
      id: 2,
      paragraph:
        "Zestique Restaurant is a culinary gem! From the first bite to the last, the flavors are nothing short of a masterpiece. Each dish is a delightful dance of unique spices, leaving a lasting impression that keeps us coming back for more.",
      name: "Alex M.",
      image: test2,
    },
    {
      id: 3,
      paragraph:
        "The menu is a fusion of creativity and taste, offering a symphony of flavors that awaken the senses. The friendly staff and stylish atmosphere make it our go-to spot for a culinary adventure that never disappoints.",
      name: "Emily H",
      image: test1,
    },
  ];
  return (
    <motion.div
      className="testinomialContainer"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
    >
      <h2>OUR CUSTOMER OPINION</h2>
      <div className="testContent">
        {testimonial.map((item) => {
          return (
            <div key={item.id} className="container">
              <img src={item.image} alt="" />
              <span>{item.paragraph}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Testinomials;
