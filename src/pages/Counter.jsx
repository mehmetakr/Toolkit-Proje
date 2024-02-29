import React from "react";
//import counterSlice, { increment } from "../redux/slice/counterSlice"
import { increment, dicrement, setcount } from "../redux/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  //aksiyon elemanını devreye sokucak işlem dispatchdir.
  const dispatch = useDispatch();

  const state = useSelector((store) => store.counterSlice);


  return (
    <div className="d-flex gap-4 align-items-center justify-content-center vh-100">
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-success mx-3 fs-4"
      >
        Arti
      </button>
      <span className="fw-bold  fs-4 bg-dark text-white p-2 rounded ">
        {state.count}
      </span>
      <button
        onClick={() => dispatch(dicrement())}
        className="btn btn-primary mx-3 hover:bg-white fs-4"
      >
        Eksi
      </button>

      <button
        onClick={() => dispatch(setcount(0))}
        className="btn btn-danger fs-3 m-5 "
      >
        Sifirla
      </button>
       
    </div>
  );
};

export default Counter;
