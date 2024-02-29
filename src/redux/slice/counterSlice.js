/* Counterslice da slice ile  birlikte reducerlarımız ve aksyionlarımız aynı dosya içerisinde olucak
  
     ?  slice  oluşturma
 1 ) import  createslice 
2 ) gerekli parametreleri tanımla 
-- name : slice ismi "string"
-- initialstate : başlangıç state 'i
---Reducers : aksiyonları görevini tanımladıgımız fonksiyonlarımız.
(ör : SET_ARTTIR vs gibi aksıyonlar burada tanımlı olur..)

 */

import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter", //slice ismi
  initialState: { count: 0, is_dark_theme: true },

  //state in nasıl değişicegine karar veren fonksiyonlar.
  //Reducer/ aksiyon fonksiyonları
  reducers: {
    increment: (state) => {
      state.count++;
    },
    dicrement: (state) => {
   state.count--;
    },
//Payload tanımlaması yapıcaksak action u parametre olarak geçmemiz lazım..
    setcount: (state, action) => {


state.count = action.payload

    },

changetheme: (state) =>{

state.is_dark_theme =  !state.is_dark_theme

}


  },
});

console.log(counterSlice);

export default counterSlice.reducer;
export const { increment, dicrement, setcount ,changetheme } = counterSlice.actions;
