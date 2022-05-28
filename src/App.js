import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/login/login/Login";
import Register from "./Pages/login/Register/Register";
import AuthProvider from "./contexts/authProvider/AuthProvider";
import Products from "./Pages/Products/Products/Products";
import Deshboard from "./Pages/Deshboard/Deshboard/Deshboard";
import Payment from "./Pages/Deshboard/Deshboard/payment/Payment";
import MyOrder from "./Pages/Deshboard/MyOrder/MyOrder";
import Review from "./Pages/Deshboard/Review/Review";
import ManageProducts from "./Pages/Deshboard/ManageProducts/ManageProducts";
import MakaAdmin from "./Pages/Deshboard/MakeAdmin/MakaAdmin";
import ManageAllOrder from "./Pages/Deshboard/ManageAllOrder/ManageAllOrder";
import AddAProduct from "./Pages/Deshboard/AddAProduct/AddAProduct";
import Purchase from "./Pages/Purchase/Purchase";
import OrderNow from "./Pages/Home/OrderNow/OrderNow";
import PrivateRoute from "./Pages/login/PrivateRoute/PrivateRoute";

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
          <Route
            path="purchase/:serviceId"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route path="ordernow" element={<OrderNow />}></Route>
          <Route
            path="/deshboard"
            element={
              <PrivateRoute>
                <Deshboard />
              </PrivateRoute>
            }
          >
            <Route path={`/deshboard/payment`} element={<Payment />} />
            <Route path={`/deshboard/myorder`} element={<MyOrder />} />
            <Route path={`/deshboard/review`} element={<Review />} />
            <Route
              path={`/deshboard/manageproducts`}
              element={<ManageProducts />}
            />
            <Route path={`/deshboard/makeadmin`} element={<MakaAdmin />} />
            <Route
              path={`/deshboard/manageAllOrder`}
              element={<ManageAllOrder />}
            />
            <Route path={`/deshboard/addaproducts`} element={<AddAProduct />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
