import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import Store from "./components/store/Store";
import AdminDashboard from "./routes/admin_dashboard/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
