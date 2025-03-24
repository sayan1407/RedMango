import React from "react";
import { Footer, Header } from "../Components/Layout";
import { Routes, Route } from "react-router-dom";
import {Home, NotFound } from "../Pages";

function App() {
  return (
    <div className="text-primary">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      

      <Footer />
    </div>
  );
}

export default App;
