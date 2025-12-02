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
    <div
      className="z-0 bg-gradient-to-br
from-[#91ddcf]
via-[#f7f9f2]
to-[#e8c5e5] "
    >
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
