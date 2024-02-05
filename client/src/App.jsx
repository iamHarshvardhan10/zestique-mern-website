import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
