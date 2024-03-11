import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  // Framer motion

  return (
    <motion.nav
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="navbarLogo">
        <Link to="/">
          <h2>Zestique</h2>
        </Link>
      </div>
      <div className="navList">
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li id="reservation">
            <Link to="/reserve-a-table">Reserve A Table</Link>
          </li>

          <Link to="/profile">
            { currentUser ? (
              <p style={{ color: "white" }}>
                Hello, {`${currentUser?.userName}`}
              </p>
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
