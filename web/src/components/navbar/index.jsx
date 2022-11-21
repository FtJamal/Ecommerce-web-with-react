import { Link } from "react-router-dom";
import "./index.css"
import { GlobalContext } from '../../context/Context';
import { useContext } from "react";



export default function NavBar() {

  let { state, dispatch } = useContext(GlobalContext);

  return (
    <nav className="nav">
      <div className="userName">{state?.user?.name} </div>
      <ul>
        {/* <li> <Link to="/">Home</Link>              </li> */}
        <li> <Link to="/products">Products</Link>  </li>
        <li> <Link to="/shop">Shop</Link>    </li>
        <li> <Link to="/login">Login</Link>     </li>
        <li> <Link to="/signup">Signup</Link>   </li>
        <li> <Link to="/profile">Profile</Link>  </li>
        <li> <Link to="/product">Product</Link>  </li>
        <li> <Link to="/cart">Cart</Link>  </li>
      </ul>
    </nav>
  )
}