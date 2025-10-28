import FadeInOnScroll from "../components/FadeInOnScroll";
import Footer from "../components/footer";
import Header from "../components/header";
import Picture from "../components/Picture";
import Showreel from "../components/showreel";
import Team from "../components/team";
import VolumeCgValues from "../components/VolumeCgValues";

export default function About() {
    return (
        <div>
            
                <Header></Header>

           

            
                <Showreel></Showreel>
           

            <FadeInOnScroll>
                <VolumeCgValues></VolumeCgValues>

            </FadeInOnScroll>

            <FadeInOnScroll>
                <Picture></Picture>

            </FadeInOnScroll>

            <FadeInOnScroll>
                <Team></Team>

            </FadeInOnScroll>
             
             <FadeInOnScroll>
                <Footer></Footer>

             </FadeInOnScroll>
            



        </div>
    )
}
