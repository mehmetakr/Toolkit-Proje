import React from "react";
import { useDispatch } from "react-redux";
import { changetheme } from "../redux/slice/counterSlice";
import { NavLink ,Link} from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center  justify-content-between   mb-3 p-4">
      <h1>Redux Toolkit</h1>

      <nav>
        <NavLink className="p-4  m-4  rounded bg-black text-decoration-none" to={"/"}>CRUD</NavLink>

        <NavLink className="p-4 m-4 text-decoration-none bg-black rounded" to={"/sayac"}>Counter</NavLink>

        <button
          className="rounded text-white"
          onClick={() => dispatch(changetheme())}
        >
          Temayı değiştir
        </button>
      </nav>
    </div>
  );
};

export default Header;
