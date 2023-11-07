import "./App.css";
import React from "react";
import Home1 from "./components/Home1";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Book_A_Table from "./components/Book_A_Table";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Family from "./components/Family";
import Friends from './components/Friends'
import Birthday from "./components/Birthday"
import Cart from "./components/Cart";
import Register from "./components/Register";
import Signin from "./components/Signin";
import Contact from './components/Contact'
import Aboutus from "./components/Aboutus";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import { useEffect, useState } from "react";
import Rooms from "./components/Rooms";
import Bookroom from "./components/Bookroom";
function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("MyUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updaterUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setUser(user);
  };
  const onLogout = () => {
    // Implement the logout logic here, which should clear the user data.
    localStorage.removeItem("MyUser");
    setUser(null); // Clear the user state.
  };

  return (
    <React.Fragment>
     

     <Navbar updaterUser={updaterUser} user={user} onLogout={onLogout} />
      
      
  
     
        <Routes>
          
          <Route path="/" > {
        user&&user._id ?
        <Route path="/" element={ <Home1 updaterUser={updaterUser}/>}></Route>
         :<Route path="/"element={ <Signin updaterUser={updaterUser}/>}></Route>
      }</Route>
       <Route path="/home" element={ <Home1 />}></Route>
          <Route path="/bookatable" element={<Book_A_Table />}></Route>
          <Route path="/bookatable" element={<Book_A_Table />}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/family" element={<Family/>}></Route> 
          <Route path="/friend" element={<Friends/>}></Route>
          <Route path="/birthday" element={<Birthday/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Signin updaterUser={updaterUser}/>}></Route>
          <Route path="/Contact us" element={<Contact/>}></Route>
          <Route path="/About us" element={<Aboutus/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/room" element={<Rooms/>}></Route>
          <Route path="/bookroom" element={<Bookroom/>}></Route>
        </Routes><Footer></Footer>
  
    </React.Fragment>
  );
}

export default App;
