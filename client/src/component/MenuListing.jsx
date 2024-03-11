import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {} from "react-icons/fa";

const MenuListing = () => {
  const params = useParams();
  const [menuListing, setMenuListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchingMenu = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/listing/getListing/${params.id}`);
        const data = await res.json();

        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setMenuListing(data);
        setLoading(false);
        setError(error);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchingMenu();
  }, [params.id]);
  return (
    <div className="menuListing">
      {loading && <h1>Loading Wait...</h1>}
      {error && <h2>Error ! Something went Wronf</h2>}
      {menuListing && (
        <div className="listing">
          <img src={menuListing.imageUrls} alt="" />
          <h1>{menuListing.name}</h1>
          <div className="listingBox">
            <div className="row1">
              <div className="col1">
                {menuListing.veg === true && <p>Vegetarian</p>}
                {menuListing.nonVeg === true && <p>non-Vegetarian</p>}
                {menuListing.breakfast === true && <p>breakfast</p>}
                {menuListing.lunch === true && <p>lunch</p>}
                {menuListing.dinner === true && <p>dinner</p>}
                {menuListing.appetizer === true && <p>appetizer</p>}
                {menuListing.salad === true && <p>salad</p>}
                {menuListing.sweets === true && <p>sweets</p>}
                {menuListing.drinks === true && <p>drinks</p>}
              </div>
              <div className="col2">
                <div className="cols">
                  <span>Calories/100g</span>
                  <span>{menuListing.calories}</span>
                </div>
                <div className="cols">
                  <span>Weight</span>
                  <span>{menuListing.weight}g</span>
                </div>
                <div className="cols">
                  <span>Serving</span>
                  <span>{menuListing.serving}</span>
                </div>
                <div className="cols">
                  <span>Price</span>
                  <span>{menuListing.price}₹/Serving</span>
                </div>
              </div>
              <div className="col3">
                <h4>Food Pairing</h4>
                <ul>
                  {menuListing.foodPair.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="row2">
              <h3>Description</h3>
              <p>{menuListing.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuListing;
