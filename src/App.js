import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import Store from "./components/store/Store";
import SignIn from "./components/sign_in/SignIn";
import Cart from "./components/cart/Cart";
import AdminDashboard from "./routes/admin_dashboard/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
