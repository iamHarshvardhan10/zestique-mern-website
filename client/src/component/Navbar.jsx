import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <nav>
      <div className="navbarLogo">
        <Link to="/">
          <h2>Zestique</h2>
        </Link>
      </div>
      <div className="navList">
        <ul>
          <li>Menu</li>
          <li>Reserve A Table</li>

          {currentUser ? (
            
              <Link to="/profile">
                <p style={{ color: "white" }}>
                  Hello, {`${currentUser.userName}`}
                </p>
            
                </Link>
          ) : (
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
          )}

          <li>
            <BsCart4 />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
