import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/login/login/Login";
import Register from "./Pages/login/Register/Register";
import AuthProvider from "./contexts/authProvider/AuthProvider";
import Products from "./Pages/Products/Products/Products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
