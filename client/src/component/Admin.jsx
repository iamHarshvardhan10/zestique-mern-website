import { useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.config";
import { useNavigate, Link } from "react-router-dom";

const Admin = () => {
  const [files, setFiles] = useState([]);
  // console.log(files);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    calories: 0,
    weight: 0,
    serving: 1,
    price: 99,
    veg: true,
    nonVeg: false,
    breakfast: false,
    lunch: false,
    dinner: true,
    appetizer: false,
    salad: true,
    sweets: false,
    drinks: false,
    foodPair: [],
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  console.log(formData);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState([]);

  const navigate = useNavigate();

  const handleImageSubmit = (e) => {
    e.preventDefault();
    setImageUploadLoading(true);
    if (files.length > 0 && files.length < 7) {
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises).then((urls) => {
        setFormData({
          ...formData,
          imageUrls: formData.imageUrls.concat(urls),
        });
        setImageUploadError(false);
        setImageUploadLoading(false);
      });
    } else {
      setImageUploadError("You can Upload only 6 images");
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleChange = (e) => {
    if (
      e.target.id === "veg" ||
      e.target.id === "nonVeg" ||
      e.target.id === "breakfast" ||
      e.target.id === "lunch" ||
      e.target.id === "dinner" ||
      e.target.id === "appetizer" ||
      e.target.id === "salad" ||
      e.target.id === "sweets" ||
      e.target.id === "drinks"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (e.target.type === "number" || e.target.type === "textarea") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }

    if (e.target.id === "name") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }

    if (e.target.id === "foodPair") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value.split(",").map((item) => item.trim()),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      navigate("/");
      if (data.success === false) {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        setError(true);
        const res = await fetch("/api/user/listing");
        const data = await res.json();

        if (!data.error) {
          // console.log(data);
          setShowMenu(data);
          setLoading(false);
          setError(false);
        } else {
          alert("Fetching Data");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMenuData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/listing/delete/${id}` , {
        method:'DELETE'
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setShowMenu((prev) => prev.filter((menu) => menu._id != id));
      console.log(showMenu);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="admin_container">
      <h1>Admin Dashboard</h1>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <div className="form_col1">
            <input
              type="text"
              id="name"
              placeholder="Dish Name..."
              required
              onChange={handleChange}
              value={formData.name}
            />
            <textarea
              type="text"
              id="description"
              placeholder="Dish Description."
              required
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className="form_col2">
            <div className="number_box">
              <span>Calories</span>
              <input
                type="number"
                id="calories"
                name="calories"
                onChange={handleChange}
                value={formData.calories}
              />
            </div>
            <div className="number_box">
              <span>Weight</span>
              <input
                type="number"
                id="weight"
                name="weight"
                onChange={handleChange}
                value={formData.weight}
              />
            </div>
            <div className="number_box">
              <span>Servings</span>
              <input
                type="number"
                id="serving"
                name="serving"
                onChange={handleChange}
                value={formData.serving}
              />
            </div>
            <div className="number_box">
              <span>Price</span>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
                value={formData.price}
              />
            </div>
          </div>
          <div className="form_col3">
            <div className="checkboxes">
              <span>Vegetrain</span>
              <input
                type="checkbox"
                id="veg"
                onChange={handleChange}
                checked={formData.veg}
              />
            </div>
            <div className="checkboxes">
              <span>Non-Vegetrain</span>
              <input
                type="checkbox"
                id="nonVeg"
                onChange={handleChange}
                checked={formData.nonVeg}
              />
            </div>
            <div className="checkboxes">
              <span>Breakfast</span>
              <input
                type="checkbox"
                id="breakfast"
                onChange={handleChange}
                checked={formData.breakfast}
              />
            </div>
            <div className="checkboxes">
              <span>Lunch</span>
              <input
                type="checkbox"
                id="lunch"
                onChange={handleChange}
                checked={formData.lunch}
              />
            </div>
            <div className="checkboxes">
              <span>Dinner</span>
              <input
                type="checkbox"
                id="dinner"
                onChange={handleChange}
                checked={formData.dinner}
              />
            </div>
            <div className="checkboxes">
              <span>Appetizer</span>
              <input
                type="checkbox"
                id="appetizer"
                onChange={handleChange}
                checked={formData.appetizer}
              />
            </div>
            <div className="checkboxes">
              <span>Salad</span>
              <input
                type="checkbox"
                id="salad"
                onChange={handleChange}
                checked={formData.salad}
              />
            </div>
            <div className="checkboxes">
              <span>Sweets</span>
              <input
                type="checkbox"
                id="sweets"
                onChange={handleChange}
                checked={formData.sweets}
              />
            </div>
            <div className="checkboxes">
              <span>Drinks</span>
              <input
                type="checkbox"
                id="drinks"
                onChange={handleChange}
                checked={formData.drinks}
              />
            </div>
          </div>
          <div className="form_col4">
            <div className="form_input">
              <label htmlFor="foodPair">Food Combos</label>
              <input
                type="text"
                id="foodPair"
                name="foodPair"
                multiple
                placeholder="Food Pair..."
                onChange={handleChange}
                value={formData.foodPair}
              />
            </div>
            <div className="form_input1">
              <label htmlFor="imageUrls">Upload Image</label>
              <div className="form_col">
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  id="imageUrls"
                  name="imageUrls"
                  accept="image/*"
                  multiple
                />
                <button type="button" onClick={handleImageSubmit}>
                  {imageUploadLoading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
          <button className="btn">
            {loading ? "Creating Listing Menu..." : "Create Listing"}
          </button>
        </form>
        {error && <p>{error}</p>}
        {imageUploadError && <h1>Upload 7 and Less Than Files</h1>}
      </div>

      <div className="showMenu">
        <h1>Your Listed Menu</h1>
        <ul className="menuListing">
          {Array.isArray(showMenu) &&
            showMenu.map((menus, i) => {
              return (
                <li key={i} className="listedItem">
                  <Link to={`/listings/${menus._id}`}>
                    <img
                      src={menus.imageUrls}
                      alt=""
                      style={{
                        width: "125px",
                        height: "75px",
                        borderRadius: "25px",
                      }}
                    />
                  </Link>
                  <Link to={`/listings/${menus._id}`}>
                    <h2>{menus.name}</h2>
                  </Link>

                  <div className="delEditButtons">
                    <button onClick={() => handleDelete(menus._id)}>
                      Delete
                    </button>
                    <Link to={`/edit-dashboard/${menus._id}`}>Edit</Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
