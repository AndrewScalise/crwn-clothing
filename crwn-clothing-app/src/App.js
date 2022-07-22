import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/signin/signin.component";

const Shop = () => {
  return <h1>This is supposed to be da shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
