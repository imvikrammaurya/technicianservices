import Button from "../ui/Button";
import { BorderBeam } from "@/components/ui/border-beam";
import heroImg from "../../assets/Images/hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-16">
        <div className="flex flex-col min-[1152px]:flex-row bg-linear-to-br from-white/30 via-gray-100/10 to-gray-200/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm">
          <div className="flex-1 p-6 sm:p-10 lg:p-14">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-primary">
              Expert repair and installation when you need it
            </h1>
            <p className="mb-8 max-w-prose text-base sm:text-lg text-gray-800/90">
              HomeTech Repair & Installations handles air conditioners, washing
              machines, and purtfiers with precision and care. We show up on
              time, do the work right, and leave your home running smooth.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <div className="relative w-full md:w-fit rounded-md z-20">
                <BorderBeam
                  size={60}
                  duration={4}
                  delay={0}
                  colorFrom="#f97316"
                  colorTo="#ec4899"
                  reverse={false}
                  initialOffset={0}
                  borderThickness={2}
                  opacity={1}
                  glowIntensity={4}
                  beamBorderRadius={60}
                  pauseOnHover={false}
                  speedMultiplier={1.5}
                />
                <Button variant="primary" className="w-full md:w-auto">
                  Book Now
                </Button>
              </div>

              <Button variant="ghost" className="w-full md:w-auto">
                Learn more
              </Button>
            </div>
          </div>
          <div className="hidden min-[1152px]:block flex-1 p-4 sm:p-6 lg:p-8">
            <img
              src={heroImg}
              className="w-full h-full object-cover rounded-xl"
              alt="Technician repairing an appliance"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
