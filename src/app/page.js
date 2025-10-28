import Image from "next/image";
import Animation from "./components/animation";
import Header from "./components/header";
import World from "./components/world";
import MainScreen from "./components/mainScreen";
import World2 from "./components/world2";
import Works_Grid from "./components/works_grid";
import Footer from "./components/footer";
import Showreel from "./components/showreel";
import FadeInOnScroll from "./components/FadeInOnScroll";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Showreel></Showreel>
      <FadeInOnScroll>

        <MainScreen></MainScreen>


      </FadeInOnScroll>
      <FadeInOnScroll>
        <World></World>

      </FadeInOnScroll>

      <FadeInOnScroll>
        <Works_Grid></Works_Grid>

      </FadeInOnScroll>

      <FadeInOnScroll>
        <Footer></Footer>

      </FadeInOnScroll>




    </div>
  );
}
