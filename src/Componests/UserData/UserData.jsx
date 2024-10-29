import { Link } from "react-router-dom";


const UserData = ({user}) => {
    const {id,name,email,phone}=user
    const userStyle={
        border: "2px solid purple",
        Padding: "10px",
        borderRadius: "20px"
    }
    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <p>Email: {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>Show More</Link>
            <Link></Link>
        </div>
    );
};

export default UserData;