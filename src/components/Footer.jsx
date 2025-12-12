export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 mt-10">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col w-full md:w-2/4 pr-0 md:pr-10">
            {/* Placeholder for Logo */}
            <div className="mb-4 font-bold text-xl text-blue-600">HomeTech</div>
            <h4 className="font-bold mb-2">About Owner:</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Meet Rajesh Kumar, the skilled technician behind HomeTech Repair &
              Installations. With over 8 years of hands-on experience in AC,
              washing machine, and water purifier servicing, Rajesh has built a
              reputation for honest work, accurate troubleshooting, and reliable
              home service. He believes in fixing problems the right way the
              first time.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col w-full md:w-1/4 gap-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
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
          <div className="flex flex-col w-full md:w-1/4">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <div className="mb-4">
              <p className="text-gray-600">Phone Number:</p>
              <p className="font-bold text-lg">526-555-5785</p>
            </div>

            <p className="text-gray-600">Timing:</p>
            <p className="font-bold">Mon - Sun: 9AM - 8PM</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-2 pt-2 text-center text-gray-500 text-xs">
          <p className="text-xs">
            All rights reserved by WebOrbs. Hope you'll enjoy scrolling this
            site.
          </p>
        </div>
      </div>
    </footer>
  );
}
