import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Order from './components/order/Order';
import { useContext } from 'react';
import { Store } from './Store';
import AdminProfile from './components/profile/AdminProfile';
import AddProduct from './components/addProduct/AddProduct';
import AllOrder from './components/AllOrders/AllOrder';
import AllProduct from './components/allProduct/AllProduct';
// import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
// import PublicRotue from './components/protectedRoute/PublicRotue';

function App() {

  const{state} = useContext(Store);
  const{user} = state;
const userRole = user?user.role : null
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/allorder' element={<AllOrder />} />
            <Route path='/allproduct' element={<AllProduct />} />
            <Route path='/profile' element={userRole === 'user' ? <Profile /> : <AdminProfile />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
