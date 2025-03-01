import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Order from './components/order/Order';

function App() {

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
            <Route path='/profile' element={<Profile />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
