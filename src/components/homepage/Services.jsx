import { SeasonalHoverCards } from "@/components/ui/seasonal-hover-cards";
import ac1 from "../../assets/Images/ac_service_1.png";
import ac2 from "../../assets/Images/ac_service_2.png";
import ac3 from "../../assets/Images/ac_service_3.png";
import wm1 from "../../assets/Images/wm_service_1.png";
import wm2 from "../../assets/Images/wm_service_2.png";
import wm3 from "../../assets/Images/wm_service_3.png";
import pf1 from "../../assets/Images/pf_service_1.png";
import pf2 from "../../assets/Images/pf_service_2.png";
import pf3 from "../../assets/Images/pf_service_3.png";

export default function Services() {
  const serviceCards = [
    {
      title: "Air conditioner repair and maintenance",
      subtitle: "Cooling Solutions",
      description:
        "We fix broken units, clean filters, and keep systems running efficiently all year.",
      // PASS 3 IMAGES HERE
      imageSrcs: [ac1, ac2, ac3],
    },
    {
      title: "Washing machine installation and repair",
      subtitle: "Laundary Solutions",
      description:
        "From new installations to fixing leaks and mechanical issues, we handle it all.",
      imageSrcs: [wm1, wm2, wm3],
    },
    {
      title: "Purifier repair and installation services",
      subtitle: "Purification Solutions",
      description:
        "Clean air starts with proper maintenance. We install and service all major purifier models.",
      imageSrcs: [pf1, pf2, pf3],
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col items-center mt-28">
          <p className="font-extrabold text-3xl">Services</p>
          <h4>What we repair and install</h4>
          <p>Fast, reliable work of the equipment that matters most to you.</p>
        </div>
        <div className="my-5  mx-auto px-32">
          <SeasonalHoverCards cards={serviceCards} />
        </div>
      </div>
    </>
  );
}
