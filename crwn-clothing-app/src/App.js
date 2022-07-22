import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default App;
