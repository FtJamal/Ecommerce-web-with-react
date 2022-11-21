import { useEffect, useContext } from "react"
import { GlobalContext } from './context/Context';
import axios from "axios"




function Product() {

  let { state, dispatch } = useContext(GlobalContext);


  useEffect(() => {

    // const getProfile = ()=>{
    // let baseUrl = "http://localhost:5001";

    axios.get(`${state.baseUrl}/product`,
      {
        withCredentials: true
      })

      .then(function (response) {

        // if (response.status === 200) {
          console.log("response: ", response.data);

          dispatch({ type: "PRODUCT", payload: response.data });
        // } else {
        //   dispatch({
        //     type: "USER_LOGOUT"
        //   })
        // };

      })

      .catch(function (error) {
        console.log("Error in api call: ", error);
        
      });
    // }
  }, [])
  return (
    <div>
        
            <div>
            
                name: {state.product?.name} 
                <br />
                description: {state.product?.description}
                <br />
                price: {state.product?.price}
                <br />
            </div>

        
    </div>
)
};

export default Product;