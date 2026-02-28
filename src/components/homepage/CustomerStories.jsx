import React from "react";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/ui/3d-scroll-trigger";

export default function CustomerStories() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="flex flex-col items-center text-center">
        <p className="font-extrabold text-2xl sm:text-3xl mb-4 text-primary">
          Customer stories
        </p>
        <p>Hear what our clients have to say about our work.</p>
      </div>

      {/* 3D scroll rows */}
      <ThreeDScrollTriggerContainer className="space-y-6">
        {/* Row 1 – moves one way (right ➜ left) */}
        <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
          {/* 🔽 use your EXISTING testimonial divs here */}
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “AC bilkul thanda nahi kar raha tha. Technician ne ekdum perfect
                repair kiya. Ab toh room instantly cool ho jata hai! Paisa
                vasool service 😄”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\riya.png"
                  alt="Riya Malhotra"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Riya Malhotra
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “My AC stopped cooling in the middle of the night. They came
                early morning and fixed it quickly. Very professional and
                reasonable pricing too. I’ve already recommended them to my
                neighbours!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\r.png"
                  alt="Rahul Sharma"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Rahul Sharma
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Washing machine se ajeeb awaaz aa rahi thi. Ye log aaye aur 30
                minutes me theek kar diya! Aisi quick service aaj kal milti kaha
                hai”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\n.png"
                  alt="Nikita Shetty"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Nikita Shetty
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “I bought a new washing machine and their installation was so
                smooth! No mess, explained everything, and checked properly
                before leaving. Loved the service!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\s.png"
                  alt="Sneha Kapoor"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Sneha Kapoor
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Our water purifier was giving a weird taste. They cleaned and
                serviced it like brand new! Saves us a lot of money instead of
                replacing. Highly trustworthy team.”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\a.png"
                  alt="Amit Desai"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Amit Desai
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
        </ThreeDScrollTriggerRow>

        {/* Row 2 – opposite direction (left ➜ right) */}
        <ThreeDScrollTriggerRow
          baseVelocity={3}
          direction={-1}
          className="mt-4"
        >
          <div className="your-card-classes-here">
            <div className="whitespace-normal break-words min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Their technicians are really polite. They fixed my AC gas
                leakage in one go. Cooling is better than before. Totally worth
                calling them!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\p.png"
                  alt="Priya Singh"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Priya Singh
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal break-words min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Humare water purifier ka filter choke ho gaya tha. Inhone fast
                service di aur clean karke ekdum naya jaisa bana diya. Family
                khush, main khush 🙌”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\sandeep.png"
                  alt="Sandeep Pujara"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Sandeep Pujara
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “I booked them for AC installation at my office. Super neat work
                and perfect fitting. They even guided us on energy saving tips.
                Highly recommended!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\k.png"
                  alt="Karan Verma"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Karan Verma
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “AC installation bohot smooth tha. Na noise, na mess. Setup dekh
                kar lagaa ki professionals kaam kar rahe hain. Highly
                recommended!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\vikram.png"
                  alt="Vikram Chauhan"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Vikram Chauhan
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Fast and friendly service! My washing machine drum issue was
                solved in less than an hour. I’ll definitely call them again if
                anything else happens.”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\d.png"
                  alt="Divya Menon"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Divya Menon
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
        </ThreeDScrollTriggerRow>

        {/* Row 3 – same as row 1 */}
        <ThreeDScrollTriggerRow baseVelocity={3} direction={1} className="mt-4">
          <div className="your-card-classes-here">
            <div className="whitespace-normal break-words min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “My purifier was completely dead. They repaired it and replaced
                a part for a very fair price. Staff is knowledgeable and honest.
                I already shared their number with relatives.”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\a.png"
                  alt="Ajay Yadav"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Ajay Yadav
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal break-words min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Water purifier ki servicing ke baad pani ka taste hi improve ho
                gaya! Technician ne saara process samjha kar kiya. Very
                trustworthy team 👍”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\harshita.png"
                  alt="Harshita Tiwari"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Harshita Tiwari
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Amazing experience! They handled two AC installations in my
                home — perfect alignment and wiring. No extra charges or hidden
                fees. Very satisfied!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\a.png"
                  alt="Aishwarya Reddy"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Aishwarya Reddy
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Mere ghar ki washing machine bilkul ruk gayi thi. Ye aaye,
                dikkat dhundi aur jaldi solve kar di. Mere doston ko bhi unka
                number de diya 😅”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\farhan.png"
                  alt="Farhan Ansari"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Farhan Ansari
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="your-card-classes-here">
            <div className="whitespace-normal  min-w-[280px] max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 flex flex-col justify-between mx-3">
              <div className="mb-3 text-sm flex flex-row justify-between">
                <span className="text-black mr-1">★★★★★</span>
                <img
                  src="/src/assets/Images/google-g.png"
                  alt="Google Review"
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                “Quick response, great customer support, and quality repair. My
                washing machine works smoothly now. My family is super happy —
                thank you guys!”
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
                <img
                  src="src\assets\Images\m.png"
                  alt="Mohit Bansal"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    Mohit Bansal
                  </span>
                  <span className="text-xs text-gray-500">Hariyana</span>
                </div>
              </div>
            </div>
          </div>
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </div>
  );
}
