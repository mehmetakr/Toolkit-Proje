import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import crudSlice from "./slice/crudSlice";
// Configurestore createstore farkları
// 1 - Varsayılan olarak thunk kurulu gelir
// 2- Verilen reducerlar otomatik olarak birleştirme işlemı yapar (configureStore)

export default configureStore({
  reducer: { counterSlice, crudSlice },
});
