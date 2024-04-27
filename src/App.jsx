import React from "react";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Course from "./pages/course/Course";
import Pricing from "./pages/pricing/Pricing";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course" element={<Course />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
