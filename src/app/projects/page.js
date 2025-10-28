import FadeInOnScroll from "../components/FadeInOnScroll";
import Footer from "../components/footer";
import Header from "../components/header";
import Showreel from "../components/showreel";
import Works_Grid from "../components/works_grid";
import World from "../components/world";

export default function Projects() {
    return (

        <div>
            <Header></Header>
            <FadeInOnScroll>
                <Showreel></Showreel>
                <World></World>
                <Works_Grid></Works_Grid>
                <Footer></Footer>


            </FadeInOnScroll>



        </div>
    )
}