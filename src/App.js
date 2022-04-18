import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Shared/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout/Checkout';
import Blogs from './Components/Home/Blogs/Blogs';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
