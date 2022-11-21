import React, { createContext, useReducer } from "react"
import { reducer } from "./Reducer";

export const GlobalContext = createContext("Initial Value"); //this is reducers intial value

let data = {//these value goes to state
  user: {},
  product:{},
  cart:[],
  
  // cart: null,
  //   loading: false,

  bill:0,
  isLogin: null,
  darkTheme: true,
  myNum : 1,
  baseUrl: (window.location.href.indexOf("https") === -1) ? "http://localhost:5001" : "https://handsome-twill-ray.cyclic.app"}



export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}