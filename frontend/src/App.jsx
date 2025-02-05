import { React, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/myorders" element={<MyOrders/>}></Route>
        </Routes>
      </div>
      |<Footer />
    </>
  );
};

export default App;
