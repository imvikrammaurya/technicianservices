import Footer from "../Footer";
import Navbar from "../Navbar";
import About from "./About";
import Cta from "./Cta";
import CustomerStories from "./CustomerStories";
import DoBest from "./Dobest";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import QAndA from "./Qanda";
import Services from "./Services";

export default function HomePage() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CustomerStories />
      <DoBest />
      <Cta />
      <QAndA />
      <GetInTouch />

      <Footer />
    </div>
  );
}
