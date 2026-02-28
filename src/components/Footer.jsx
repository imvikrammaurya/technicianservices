import googleMapsImg from "../assets/Images/Google Maps.png";

export default function Footer() {
  return (
    // FIX: Changed 'py-10' to 'pt-10 pb-2' to reduce bottom space
    <footer className="bg-transparent mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col w-full lg:flex-1">
            {/* Placeholder for Logo */}
            <div className="mb-4 font-bold text-xl text-blue-600">HomeTech</div>
            <h4 className="font-semibold mb-2 text-xl">About Owner:</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-prose">
              Shakurala, the skilled technician behind HomeTech Repair &
              Installations. With over 8 years of hands-on experience in AC,
              washing machine, and water purifier servicing, Rajesh has built a
              reputation for honest work, accurate troubleshooting, and reliable
              home service. He believes in fixing problems the right way the
              first time.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4 gap-2 items-start">
            <h4 className="font-bold mb-2 text-xl">Quick Links</h4>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Disclaimer
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Sitemap.xml
            </a>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
            <h4 className="font-bold mb-2 text-xl">Contact Us</h4>
            <div className="mb-4">
              <p className="text-gray-600 mb-1">Phone Number:</p>
              <p className="font-bold text-sm mb-1 h-5">526-555-5785</p>
            </div>

            <p className="text-gray-600 mb-1">Timing:</p>
            <p className="font-bold text-sm">Mon - Sun: 9AM - 8PM</p>
            <img
              src={googleMapsImg}
              alt="Map preview"
              className="mt-4 w-full max-w-xs opacity-65 border border-gray-300 rounded-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copyright Section */}
          <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-xs">
            <p className="text-xs">
              All rights reserved by WebOrbs. Hope you'll enjoy scrolling this
              site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
