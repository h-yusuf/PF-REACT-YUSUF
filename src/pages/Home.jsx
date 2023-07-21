import About from "../components/Home/About";
import Education from "../components/Home/Education";
import Hero from "../components/Home/Hero";
import Quotes from "../components/Home/Quotes";

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <About />
                <Quotes />
                <Education />
            </div>
        </>
    );
};

export default Home;
