import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTitle from "./components/PageTitle";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Adopt from "./pages/Adopt";
import Release from "./pages/Release";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PetDetails from "./pages/PetDetails";
import AdoptionForm from "./pages/AdoptionForm";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem("petHeavenUser") || "null");
    } catch {return null;}
  });

  function handleLogin(user) {
    setCurrentUser(user);
    localStorage.setItem(
      "petHeavenUser",
      JSON.stringify(user)
    );
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("petHeavenUser");
  }

  return (
    <BrowserRouter>
      <PageTitle />

      <Navbar 
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/pets/:petId" element={<PetDetails currentUser={currentUser} />} />
        <Route path="/adopt/:petId" element={<AdoptionForm currentUser={currentUser} />} />
        <Route path="/release" element={<Release currentUser={currentUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;