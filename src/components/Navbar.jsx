import {
  Home,
  Wrench,
  User,
  PhoneCall,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Dock from "@/components/ui/dock";

export default function Navbar() {
  const navItems = [
    {
      icon: <Home size={22} className="text-gray-800" />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <Wrench size={22} className="text-gray-800" />,
      label: "Services",
      onClick: () => console.log("Services Clicked"),
    },
    {
      icon: <User size={22} className="text-gray-800" />,
      label: "About",
      onClick: () => console.log("About Clicked"),
    },
    // --- NEW BUTTONS BELOW ---
    {
      // WhatsApp: Opens a chat with your number
      // Replace '1234567890' with your actual number (include country code)
      icon: <MessageCircle size={22} className="text-green-600" />,
      label: "WhatsApp",
      onClick: () => window.open("https://wa.me/919876543210", "_blank"),
    },
    {
      // Call: Opens the phone dialer
      icon: <PhoneCall size={22} className="text-blue-600" />,
      label: "Call Now",
      onClick: () => window.open("tel:+919876543210"),
    },
    {
      // Location: Opens Google Maps
      // Replace 'New Delhi' with your actual address or coordinates
      icon: <MapPin size={22} className="text-red-600" />,
      label: "Location",
      onClick: () =>
        window.open("https://maps.google.com/?q=New+Delhi", "_blank"),
    },
  ];

  return (
    <div className="sticky top-4 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <div className="pointer-events-auto">
        <Dock
          items={navItems}
          panelHeight={60}
          baseItemSize={45}
          magnification={70}
          dockHeight={60}
        />
      </div>
    </div>
  );
}
