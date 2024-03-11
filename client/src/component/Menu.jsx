import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Menu = () => {
  const [menuListing, setMenuListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        setError(true);
        const res = await fetch("/api/user/listing");
        const data = await res.json();
        if (!data.error) {
          console.log("Successful API call", data);
          setMenuListing(data);
          setLoading(false);
          setError(false);
        } else {
          alert("Error in Fetching Data");
        }
      } catch (error) {
        setError("Error! Did not find any listing");
      }
    };
    fetchMenuData();
  }, []);

  const handleFilterChange = (filter) => {
    setFilters(filter);
    setActiveFilter(filter);
    console.log(activeFilter);
  };

  const filterMenu = menuListing.filter((menu) => {
    if (filters === "all") {
      return true;
    } else if (filters === "veg") {
      return menu.veg === true;
    } else if (filters === "nonVeg") {
      return menu.nonVeg === true;
    } else if (filters === "breakfast") {
      return menu.breakfast === true;
    } else if (filters === "lunch") {
      return menu.lunch === true;
    } else if (filters === "dinner") {
      return menu.dinner === true;
    } else if (filters === "appetizer") {
      return menu.appetizer === true;
    } else if (filters === "salad") {
      return menu.salad === true;
    } else if (filters === "sweets") {
      return menu.sweets === true;
    } else if (filters === "drinks") {
      return menu.drinks === true;
    }
  });
  console.log(filterMenu);
  return (
    <motion.div
      className="menuContainer"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span>
        <span>Our Amazing</span> Menu
      </span>
      <div className="menuFilter">
        <button
          onClick={() => handleFilterChange("all")}
          className={activeFilter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("veg")}
          className={activeFilter === "veg" ? "active" : ""}
        >
          Veg
        </button>
        <button
          onClick={() => handleFilterChange("nonVeg")}
          className={activeFilter === "nonVeg" ? "active" : ""}
        >
          Non-Veg
        </button>
        <button
          onClick={() => handleFilterChange("breakfast")}
          className={activeFilter === "breakfast" ? "active" : ""}
        >
          breakfast
        </button>
        <button
          onClick={() => handleFilterChange("lunch")}
          className={activeFilter === "lunch" ? "active" : ""}
        >
          lunch
        </button>
        <button
          onClick={() => handleFilterChange("dinner")}
          className={activeFilter === "dinner" ? "active" : ""}
        >
          dinner
        </button>
        <button
          onClick={() => handleFilterChange("appetizer")}
          className={activeFilter === "appetizer" ? "active" : ""}
        >
          appetizer
        </button>
        <button
          onClick={() => handleFilterChange("salad")}
          className={activeFilter === "salad" ? "active" : ""}
        >
          salad
        </button>
        <button
          onClick={() => handleFilterChange("sweets")}
          className={activeFilter === "sweets" ? "active" : ""}
        >
          sweets
        </button>
        <button
          onClick={() => handleFilterChange("drinks")}
          className={activeFilter === "drinks" ? "active" : ""}
        >
          drinks
        </button>
      </div>
      <div className="menuCard">
        {Array.isArray(filterMenu) &&
          filterMenu.map((menu, i) => {
            return (
              <Link to={`/listings/${menu._id}`} key={i}>
                <div className="card">
                  <img src={menu.imageUrls} alt="" />

                  <div className="content">
                    <span>{menu.name}</span>
                    <span>{menu.weight}g</span>
                  </div>
                  <div className="contentInfo">
                    <span>{menu.price}₹</span>
                  </div>
                </div>
              </Link>
            );
          })}
        {loading && <h1>FETCHING...</h1>}
        {error && <h1>{error}</h1>}
      </div>
    </motion.div>
  );
};

export default Menu;
