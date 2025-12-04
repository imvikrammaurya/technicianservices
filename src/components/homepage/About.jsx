import Button from "../ui/Button";
import { InteractiveCard } from "@/components/lightswind/interactive-card";
import aboutImg from "../../assets/Images/About_section_image.png";

export default function About() {
  const LISTITEMS = [
    "Certified technicians with roal expertise",
    "Same day service avallable in most areas",
    "Warranty on all parts and labor performed",
  ];
  return (
    <>
      <div className="flex flex-col container mt-35  mx-auto px-25  ">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h4 className="font-extrabold text-3xl mb-8">About</h4>
            <p className="ph">Built on experience and honest work</p>
          </div>
          <div className="w-1/2">
            <p>
              HomeTech Repair & Installations has been serving homes and
              businesses for years. We know these machines inside and out, and
              we troat overy job like it matters
            </p>
            <ul className="mb-8">
              {LISTITEMS.map((listitems, i) => {
                return <li key={listitems}>{listitems}</li>;
              })}
            </ul>
            <Button className="mr-5" variant="ghost">
              Get Started
            </Button>
            <Button className="mb-10" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
        <div className="h-[500px] w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img className="w-full h-full object-cover" src={aboutImg} alt="" />
        </div>
      </div>
    </>
  );
}
