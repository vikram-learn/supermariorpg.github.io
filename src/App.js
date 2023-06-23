import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                
                <Routes>
                    <Route  path="*" element = {<Blog/>}/>
                    <Route  path="/" element = {<Blog/>}/>
                    <Route  path="/about" element={<About/>}/>
                    <Route  path="/contact" element={<Contact/>}/>
                </Routes>
                    
                    
                <Footer />
            </Router>
        </>
    );
}

export default App;
