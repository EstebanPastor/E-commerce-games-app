import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import Store from "./components/store/Store";
import SignIn from "./components/sign_in/SignIn";
import Cart from "./components/cart/Cart";
import NotFound from "./components/not_found/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
