import { GlobalContext } from '../../context/Context';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import "./index.css"


function Shop() {

    let { state, dispatch } = useContext(GlobalContext);
    let [products, setProducts] = useState([]);
    let [toggleReload, setToggleReload] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        const getAllProducts = async () => {
            try {
                let response = await axios({
                    url: `${state.baseUrl}/products`,
                    method: "get",
                    withCredentials: true
                })
                if (response.status === 200) {
                    console.log("response: ", response.data.data);

                    setProducts(response.data.data.reverse());
                    // setProducts(response.data.data);

                } else {
                    console.log("error in api call")
                }
            } catch (e) {
                console.log("Error in api call: ", e);
            }
        }
        getAllProducts();

    }, [toggleReload])

    let cartHandler = async () => {
        // e.preventDefault();

        try {
            let response = await axios.post(`${state.baseUrl}/cart/${cart._id}`,

                {
                    productId: cart?._id,
                    name: cart?.name,
                    price: cart?.price,
                    // description: cart?.description,
                    quantity: 1,
                    bill: cart?.price * 1
                    // code: cart?.code,
                },
                {
                    withCredentials: true
                }
            )
            console.log("cartpost: ", response.data);
            dispatch({
                type: "ADD_TO_CART",
                payload: response.data

            })
            dispatch({
                type: "total",
                payload: response.data.bill
            })
            setToggleReload(!toggleReload);
            // setEditProduct(null);

        } catch (e) {
            console.log("Error in api call: ", e);
        }

    }

    let displayHandler = () => {
        axios.get(`${state.baseUrl}/cart/${cart._id}`,
            { withCredentials: true })
            .then(function (response) {
                // handle success

                console.log("get cart", response.data.items)
                dispatch({
                    type: "ADD_TO_CART",
                    payload: response.data

                })

                dispatch({
                    type: "total",
                    payload: response.data.data.bill
                })


                setToggleReload(!toggleReload)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className='header'>Kids_Wishh </h1>


            <div className='main'>
                {products?.map(eachProduct => (
                    <div className='productsListDiv' key={eachProduct?._id}>
                        <div className='product'>
                            <div>
                                <img width="100px" src={eachProduct?.productImage} alt="" />
                                <div><b>{eachProduct?.name}</b></div>
                                <div>{eachProduct?.description}</div>
                                <div>{eachProduct?.price}<span>pkr</span></div>

                                <br />
                                <button
                                    className='cart'
                                    onClick={() => {
                                        setCart({
                                            _id: eachProduct._id,
                                            name: eachProduct?.name,
                                            price: eachProduct?.price,
                                            description: eachProduct?.description,
                                            // code: eachProduct?.code
                                        });
                                        cartHandler();
                                        <br />
                                        displayHandler();


                                    }}> <Link to="/cart"></Link>Add to Cart</button>

                            </div>
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    )


        ;
}

export default Shop;