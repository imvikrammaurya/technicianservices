import Button from "../ui/Button";
import aboutImg from "../../assets/Images/About_section_image.png";

export default function About() {
  const LISTITEMS = [
    "Certified technicians with roal expertise",
    "Same day service avallable in most areas",
    "Warranty on all parts and labor performed",
    "📍Bhonds | Gurgaon | Bhonds | GurgaonBhonds | GurgaonBhonds | Gurgaon",
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="font-extrabold text-2xl sm:text-3xl mb-3 text-primary">
              About
            </p>
            <p className="ph mb-0">Built on experience and honest work</p>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-base sm:text-lg text-gray-800/90">
              HomeTech Repair & Installations has been serving homes and
              businesses for years. We know these machines inside and out, and
              we troat overy job like it matters
            </p>
            <ul className="mb-8 space-y-2 list-disc pl-5 text-gray-700">
              {LISTITEMS.map((listitems) => {
                return (
                  <li key={listitems} className="break-words">
                    {listitems}
                  </li>
                );
              })}
            </ul>
            {/* <Button className="mr-5" variant="ghost">
              Get Started
            </Button> */}
            <Button className="mb-10" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
        <div className="mt-6 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img className="w-full h-full object-cover" src={aboutImg} alt="" />
        </div>
      </div>
    </>
  );
}
