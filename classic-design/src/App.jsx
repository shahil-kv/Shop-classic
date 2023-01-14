import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import Pay from './pages/pay';

import {
  BrowserRouter, Route, Routes, Navigate
} from "react-router-dom"
import Sucess from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Routes>
        {/* if({!user})  return <Navigate to='/' /> : */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate replace to='/' /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate replace to='/' /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
