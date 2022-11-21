import { GlobalContext } from '../../context/Context';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

const Cart = () => {

    let { state, dispatch } = useContext(GlobalContext);
    // let [cart, setCart] = useState([]);
    let [toggleReload, setToggleReload] = useState(false);
    // const cart = state.cart

    let deleteHandler = () => {
        axios.delete(`${state.baseUrl}/cart/${state.cart.item.id}`,
            { withCredentials: true })
            .then(function (response) {
                // handle success

                console.log("delete cart", response.data)
                dispatch({
                    type: "DELETE_FROM_CART",
                    payload: response.data

                })

               

                setToggleReload(!toggleReload)

            })
            .catch(function (error) {
                // handle error
                console.log("error :", error);
            })
    }


    return (
        <div>
            <h1 className='header'>Cart </h1>

            <div>
                {(state.cart.length === 0) ?
                    <div>Your cart is empty....</div>
                    :
                    <div className='main'>
                        {state.cart.items?.map(item => (
                            <div className='productsListDiv' key={item?._id}>
                                <div className='product'>
                                    <div>
                                        <h3>name:{item.name}</h3>
                                        <div>Rs{item?.price}</div>
                                        <div>quantity:{item?.quantity}</div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    dispatch({type: "ADD" })
                                                }}>
                                                    + </button>
                                            {state.myNum}
                                            <button
                                                onClick={() => {
                                                    deleteHandler();
                                                }}> - </button></div>
                                        <h4> Total amount: {state.bill}</h4>

                                        <br />
                                        <button type="submit"> Cart</button>
                                    </div>
                                </div>

                            </div>
                        ))
                        }

                    </div>

                }
                <br />
            </div>
        </div>
    )
}

export default Cart;

