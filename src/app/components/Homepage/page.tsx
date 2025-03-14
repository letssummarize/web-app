import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";

function HomePage() {
    return(
        <div className=" min-h-screen bg-[#161616]">
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    )
}
export default HomePage;