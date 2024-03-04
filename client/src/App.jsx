import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./component/Profile";
import PrivatePage from "./pages/PrivatePage";
import Menu from "./component/Menu";
import ReservationTable from "./component/ReservationTable";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reserve-a-table" element={<ReservationTable/>} />
          <Route element={<PrivatePage />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
