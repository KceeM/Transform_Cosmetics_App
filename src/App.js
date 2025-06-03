import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Sets from "./pages/Sets";
import Quiz from "./pages/Quiz";
import Wholesale from "./pages/Wholesale";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
     <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      </main>
        
    </Router>

    
  );
}

export default App;
