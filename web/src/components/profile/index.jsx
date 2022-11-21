import { GlobalContext } from '../../context/Context';
import { useContext } from "react";

let Profile = () => {

    let { state, dispatch } = useContext(GlobalContext);
    return (
        <div>
            {(state.user === null) ?
                <div>Loading....</div>
                :
                <div>
                    _id: {state.user?._id}
                    <br />
                    name: {state.user?.name} 
                    <br />
                    email: {state.user?.email}
                </div>

            }
        </div>
    )
};

export default Profile;