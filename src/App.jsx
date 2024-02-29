import React from "react";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crudpages from "./pages/Crudpages";
import { Modal } from "react-bootstrap";

const App = () => {
  const { is_dark_theme } = useSelector((store) => store.counterSlice);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={is_dark_theme ? "text-bg-dark" : "text-bg-light "}
    >
      

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Crudpages />} />
          <Route path="/sayac" element={<Counter />} />
          <Route  path="/modal" element={<Modal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
