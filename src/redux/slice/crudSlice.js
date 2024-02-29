import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "12",
      title: "navbar aksiyonu",
      author: "mehmet",
      assigned: "Mehmet",
      date: "34-23-2049",
    },
    {
      id: "23",
      title: "header aksiyonu",
      author: "eren",
      assigned: "yilmaz",
      date: "23-42-2052",
    },
  ],
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addtask: (state, action) => {
      // todoya id ekleme işlemı (burada uuid yi import ettik)
      action.payload.id = v4();
      //Veriyi tasklerımınz arasına ekleme işlemı yaptık
      state.tasks.push(action.payload);
      // todoya id ekle
    },
    edittask: (state, action) => {
      // güncelllenecek  elemanın dizideki sırasını bul

      const ik = state.tasks.findIndex((t) => t.id == action.payload.id);

      //elemanı güncelle

      state.tasks.splice(ik, 1, action);
    },
    deletetask: (state, action) => {
      // 1/Yöntem - Filter,

      /* 
      const filtered = state.tasks.filter((task) => task.id !== action.payload);

      state.tasks = filtered;
 */

      //Burada  son aşamada filtered ı state e eşitlememmiz lazım..

      // 2-) Splice yöntemi ile diziden eleman kaldırma
      // - Silinecek elemanın sırasınnı bulma

      // index degerine ulasıyoruz burada.
      const f = state.tasks.findIndex((t) => t.id !== action.payload);

      const findex = state.tasks.splice(f, 1);
      // state i güncelleme işlemı yapalım şimdi de

      state.t = f;
    },
  },
});

//    aksiyonları tek tek export et .
export const { addtask, edittask, deletetask } = crudSlice.actions;

// reduceri export etme işlemı
export default crudSlice.reducer;
