import AboutDetail from "../components/About/AboutDetail";
import AboutHero from "../components/About/AboutHero";
import RecentWork from "../components/About/RecentWork";
import Skills from "../components/About/Skills";

const About = () => {
    return (
        <>
            <div>
                <AboutHero />
                <AboutDetail />
                <Skills />
                <RecentWork />
            </div>
        </>
    );
};

export default About;
