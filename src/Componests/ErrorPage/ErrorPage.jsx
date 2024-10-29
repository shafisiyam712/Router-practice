import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <h2>Oopss!!</h2>
            <p>{error.statusText||error.message}</p>
            {
                error.status===404 && 
                <div>
                    <h2>Page Not found</h2>
                    <p>Go back where you form</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;