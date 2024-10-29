import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation=useNavigation();
    const location=useLocation();
    console.log(location);
    
    return (
        <div>
            <Header></Header>
            {/* <h2>This is Home</h2> */}
            {
                navigation.status==='loading'?
                <p>Loading.....</p>:
                 <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;