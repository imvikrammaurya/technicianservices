import ContactForm from "../ui/ContactForm";
import { ShieldCheck, Clock, BadgeCent, Users, Star } from "lucide-react";
export default function Cta() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
      <div className="text-center">
        <h4>Ready to get things fixed</h4>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
        {/* RIGHT SIDE: The "Trust Building" Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* 1. Compelling Headline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
              Why homeowners trust HomeTech?
            </h3>
            <p className="text-gray-600 mt-4 mb-6 text-base sm:text-lg">
              We don't just fix appliances; we restore your peace of mind. Join
              5,000+ happy customers in your area.
            </p>
          </div>

          {/* 2. The "Trust Grid" - 4 Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Benefit 1: Speed */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                  <Clock size={20} />
                </div>
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  Same Day Service
                </p>
              </div>

              <p className="text-sm text-gray-500">
                Book before 12PM and we'll be there today.
              </p>
            </div>

            {/* Benefit 2: Pricing */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <BadgeCent size={20} />
                </div>
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  Upfront Pricing
                </p>
              </div>
              <p className="text-sm text-gray-500">
                No hidden fees. You approve the price first.
              </p>
            </div>

            {/* Benefit 3: Expertise */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700">
                  <Users size={20} />
                </div>
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  Verified Pros
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Background checked and factory trained experts.
              </p>
            </div>

            {/* Benefit 4: Warranty */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700">
                  <ShieldCheck size={20} />
                </div>
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  30-Day Warranty
                </p>
              </div>
              <p className="text-sm text-gray-500">
                If it breaks again, we fix it for free.
              </p>
            </div>
          </div>

          {/* 3. Social Proof Card (The "Nudge") */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-400 w-16 h-16 rounded-full opacity-10 blur-xl"></div>

            <div className="flex gap-1 mb-3 text-yellow-400">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>

            <p className="text-gray-700 italic mb-4">
              "My AC broke down in the middle of a heatwave. The technician
              arrived in 2 hours, was polite, and fixed it instantly. Highly
              recommended!"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                SS
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-none mb-1 ">
                  Sakshi Singh
                </p>
                <p className="text-xs text-gray-500 leading-none">
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Right Side */}
      </div>
    </div>
  );
}
