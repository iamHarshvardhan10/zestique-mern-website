import About from "./About";
import ReservationTable from "./ReservationTable";
import Testinomials from "./Testinomials";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <motion.div
        className="homeContainer"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="homeInfo">
          <span>Open since 1982</span>
          <span>Every Bite Narrates A Tale</span>
          <span>
            Over the years, we have had the pleasure of serving more than 3,000
            individuals
          </span>
          <div className="btn">
            <button>
              <Link to="/reserve-a-table">Reserve A table</Link>
            </button>
            <button>
              <Link to="/menu">See the menu</Link>
            </button>
          </div>
        </div>
      </motion.div>
      <ReservationTable />
      <About />
      <Testinomials />
    </>
  );
};

export default Home;
