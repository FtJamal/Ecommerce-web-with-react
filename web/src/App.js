// import Home from "./components/home";
import Products from "./components/products";
import Profile from "./components/profile";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Login from "./components/login";
import Signup from "./components/signup";
import NavBar from "./components/navbar";

import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useContext } from "react"
import { GlobalContext } from './context/Context';
import axios from "axios"




function App() {

  let { state, dispatch } = useContext(GlobalContext);


  useEffect(() => {  //pg load hoty he profile ajaye chahy refresh kre issliye ye app ki file me dala h

    // const getProfile = ()=>{
    // let baseUrl = "http://localhost:5001";

    axios.get(`${state.baseUrl}/profile`,
      {
        withCredentials: true
      })

      .then(function (response) {

        if (response.status === 200) {
          console.log("response: ", response.data);

          dispatch({
            type: "USER_LOGIN",
            payload: response.data
          });
        } else {
          dispatch({
            type: "USER_LOGOUT"
          })
        };

      })

      .catch(function (error) {
        console.log("Error in api call: ", error);
        dispatch({
          type: "USER_LOGOUT"
        })
      });
    // }
  }, [])

  let displayHandler = () => {
    axios.get(`${state.baseUrl}/cart`, 
    { withCredentials: true })
        .then(function (response) {
            // handle success

            console.log("get cart", response.data.items)
            dispatch({
               type : "ADD_TO_CART",
            payload : response.data

            })

            dispatch({
                type : "total",
                payload : response.data.data.bill
            })

            
            // setToggleReload(!toggleReload)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        displayHandler();
}


  return (
    <Router>

      <NavBar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Signup />} />
        {/* <Route path='*' element={<Navigate to ="/" />}></Route> //agr pg pe kch na dikhy tw home pe lejao */}
         
      </Routes>

    </Router>
  );
}

export default App;