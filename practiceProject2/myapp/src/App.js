import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";


const App = () => {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  )
}

export default App