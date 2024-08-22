import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import ShopDisplay from "./Shop/ShopDisplay";
import OurStore from "./Shop/OurStore";
import LikeDisplay from "./Shop/LikeDisplay";
import AlsoLike from "./Components/AlsoLike";
import Cart from "./Pages/Cart";
import Proceed from "./Components/Proceed";

const App = () => {
  return (
    <>
      <Logo />
      <hr />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="our-store" element={<OurStore />} />
          <Route path="shop" element={<ShopDisplay />}>
            <Route path=":id" element={<ShopDisplay />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="like-shop" element={<AlsoLike />} />
          <Route path="like" element={<LikeDisplay />}>
            <Route path=":id" element={<LikeDisplay />} />
          </Route>
          <Route path="cart/proceed" element={<Proceed />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
