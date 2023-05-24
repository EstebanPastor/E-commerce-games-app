import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import AdminDashboard from "./routes/admin_dashboard/AdminDashboard";


function App() {
  return (
    <>
    <h1>Hola</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
