import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { BorderBeam } from "@/components/lightswind/border-beam";

export default function Hero() {
  const { theme, isDark } = useTheme();
  return (
    <>
      <div className="container mb-25 mt-15 mx-auto px-25  ">
        <div className="flex flex-row bg-linear-to-br from-white/30 via-gray-100/10 to-gray-200/40 backdrop-blur-xl rounded-l-lg ">
          <div className="p-20 ">
            <h4 className="font-semibold text-5xl mb-8">
              Expert repair and installation when you need it
            </h4>
            <p className="mb-8">
              HomeTech Repair & Installations handles air conditioners, washing
              machines, and purtfiers with precision and care. We show up on
              time, do the work right, and leave your home running smooth.
            </p>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-fit rounded-md  z-20">
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
                <Button variant="primary" className="">
                  Book Now
                </Button>
              </div>

              <Button variant="ghost">Learn more</Button>
            </div>
          </div>
          <div className="">
            <img
              src="src\assets\Images\hero.jpg"
              className="p-3 rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
