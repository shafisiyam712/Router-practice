import { useLoaderData } from "react-router-dom";
import UserData from "../UserData/UserData";
import './user.css'

const User = () => {
    const user=useLoaderData()
    return (
        <div>
            <h2>Our users {user.length}</h2>
            <div className="user">
            {
                user.map(user=> <UserData key={user.id} user={user}></UserData>)
            }
            </div>
            
        </div>
    );
};

export default User;