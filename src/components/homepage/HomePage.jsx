import Footer from "../Footer";
import Navbar from "../Navbar";
import FullNavbar from "../FullNavbar";
import About from "./About";
import Cta from "./Cta";
import CustomerStories from "./CustomerStories";

import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import QAndA from "./Qanda";
import Services from "./Services";

export default function HomePage() {
  return (
    <div
      className="z-0 bg-linear-to-br
from-[#91ddcf]
via-[#f7f9f2]
to-[#e8c5e5] "
    >
      <FullNavbar />

      {/* Add IDs here */}
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="customer-stories">
        <CustomerStories />
      </section>

      <section id="cta">
        <Cta />
      </section>

      <section id="qanda">
        <QAndA />
      </section>

      {/* <section id="get-in-touch">
        <GetInTouch />
      </section> */}

      <Footer />
    </div>
  );
}
