import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body}=post
    const userStyle2={
        border: "2px solid purple",
        Padding: "10px",
        borderRadius: "20px"
    }
    const navigate=useNavigate();
    const handleButton=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div style={userStyle2}>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
            
            <Link to={`/posts/${id}`}>view more</Link> 
            <br />
            <button onClick={handleButton}>click to view</button>
        </div>
    );
};

export default Post;