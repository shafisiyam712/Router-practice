import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData()
    const {postId}=useParams()
    console.log(postId);
    
    const {id,body}=post
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h5>post no {id}</h5>
            <p>{body}</p>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default PostDetails;