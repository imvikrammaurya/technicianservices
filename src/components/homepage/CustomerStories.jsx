import React from "react";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/ui/3d-scroll-trigger";

import googleGImg from "../../assets/Images/google-g.png";
import riyaImg from "../../assets/Images/riya.png";
import rahulImg from "../../assets/Images/R.png";
import nikitaImg from "../../assets/Images/n.png";
import snehaImg from "../../assets/Images/s.png";
import aImg from "../../assets/Images/a.png";
import priyaImg from "../../assets/Images/p.png";
import sandeepImg from "../../assets/Images/sandeep.png";
import karanImg from "../../assets/Images/k.png";
import vikramImg from "../../assets/Images/vikram.png";
import divyaImg from "../../assets/Images/d.png";
import harshitaImg from "../../assets/Images/harshita.png";
import farhanImg from "../../assets/Images/farhan.png";
import mohitImg from "../../assets/Images/m.png";

function TestimonialCard({ quote, name, location, avatarImg }) {
  return (
    <div className="shrink-0 whitespace-normal break-words min-w-[240px] sm:min-w-[280px] max-w-[300px] sm:max-w-[320px] bg-[#f5f5f5] rounded-md border border-gray-200 shadow-sm p-4 sm:p-5 flex flex-col justify-between mx-2 sm:mx-3">
      <div className="mb-3 text-sm flex flex-row justify-between">
        <span className="text-black mr-1" aria-label="5 star rating">
          ★★★★★
        </span>
        <img
          src={googleGImg}
          alt="Google Review"
          className="h-5 w-auto"
          loading="lazy"
        />
      </div>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200">
        <img
          src={avatarImg}
          alt={name}
          className="h-8 w-8 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{name}</span>
          <span className="text-xs text-gray-500">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default function CustomerStories() {
  const row1 = [
    {
      quote:
        "“AC bilkul thanda nahi kar raha tha. Technician ne ekdum perfect repair kiya. Ab toh room instantly cool ho jata hai! Paisa vasool service 😄”",
      name: "Riya Malhotra",
      location: "Hariyana",
      avatarImg: riyaImg,
    },
    {
      quote:
        "“My AC stopped cooling in the middle of the night. They came early morning and fixed it quickly. Very professional and reasonable pricing too. I’ve already recommended them to my neighbours!”",
      name: "Rahul Sharma",
      location: "Hariyana",
      avatarImg: rahulImg,
    },
    {
      quote:
        "“Washing machine se ajeeb awaaz aa rahi thi. Ye log aaye aur 30 minutes me theek kar diya! Aisi quick service aaj kal milti kaha hai”",
      name: "Nikita Shetty",
      location: "Hariyana",
      avatarImg: nikitaImg,
    },
    {
      quote:
        "“I bought a new washing machine and their installation was so smooth! No mess, explained everything, and checked properly before leaving. Loved the service!”",
      name: "Sneha Kapoor",
      location: "Hariyana",
      avatarImg: snehaImg,
    },
    {
      quote:
        "“Our water purifier was giving a weird taste. They cleaned and serviced it like brand new! Saves us a lot of money instead of replacing. Highly trustworthy team.”",
      name: "Amit Desai",
      location: "Hariyana",
      avatarImg: aImg,
    },
  ];

  const row2 = [
    {
      quote:
        "“Their technicians are really polite. They fixed my AC gas leakage in one go. Cooling is better than before. Totally worth calling them!”",
      name: "Priya Singh",
      location: "Hariyana",
      avatarImg: priyaImg,
    },
    {
      quote:
        "“Humare water purifier ka filter choke ho gaya tha. Inhone fast service di aur clean karke ekdum naya jaisa bana diya. Family khush, main khush 🙌”",
      name: "Sandeep Pujara",
      location: "Hariyana",
      avatarImg: sandeepImg,
    },
    {
      quote:
        "“I booked them for AC installation at my office. Super neat work and perfect fitting. They even guided us on energy saving tips. Highly recommended!”",
      name: "Karan Verma",
      location: "Hariyana",
      avatarImg: karanImg,
    },
    {
      quote:
        "“AC installation bohot smooth tha. Na noise, na mess. Setup dekh kar lagaa ki professionals kaam kar rahe hain. Highly recommended!”",
      name: "Vikram Chauhan",
      location: "Hariyana",
      avatarImg: vikramImg,
    },
    {
      quote:
        "“Fast and friendly service! My washing machine drum issue was solved in less than an hour. I’ll definitely call them again if anything else happens.”",
      name: "Divya Menon",
      location: "Hariyana",
      avatarImg: divyaImg,
    },
  ];

  const row3 = [
    {
      quote:
        "“My purifier was completely dead. They repaired it and replaced a part for a very fair price. Staff is knowledgeable and honest. I already shared their number with relatives.”",
      name: "Ajay Yadav",
      location: "Hariyana",
      avatarImg: aImg,
    },
    {
      quote:
        "“Water purifier ki servicing ke baad pani ka taste hi improve ho gaya! Technician ne saara process samjha kar kiya. Very trustworthy team 👍”",
      name: "Harshita Tiwari",
      location: "Hariyana",
      avatarImg: harshitaImg,
    },
    {
      quote:
        "“Amazing experience! They handled two AC installations in my home — perfect alignment and wiring. No extra charges or hidden fees. Very satisfied!”",
      name: "Aishwarya Reddy",
      location: "Hariyana",
      avatarImg: aImg,
    },
    {
      quote:
        "“Mere ghar ki washing machine bilkul ruk gayi thi. Ye aaye, dikkat dhundi aur jaldi solve kar di. Mere doston ko bhi unka number de diya 😅”",
      name: "Farhan Ansari",
      location: "Hariyana",
      avatarImg: farhanImg,
    },
    {
      quote:
        "“Quick response, great customer support, and quality repair. My washing machine works smoothly now. My family is super happy — thank you guys!”",
      name: "Mohit Bansal",
      location: "Hariyana",
      avatarImg: mohitImg,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
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
          {row1.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              location={t.location}
              avatarImg={t.avatarImg}
            />
          ))}
        </ThreeDScrollTriggerRow>

        {/* Row 2 – opposite direction (left ➜ right) */}
        <ThreeDScrollTriggerRow
          baseVelocity={3}
          direction={-1}
          className="mt-4"
        >
          {row2.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              location={t.location}
              avatarImg={t.avatarImg}
            />
          ))}
        </ThreeDScrollTriggerRow>

        {/* Row 3 – same as row 1 */}
        <ThreeDScrollTriggerRow baseVelocity={3} direction={1} className="mt-4">
          {row3.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              location={t.location}
              avatarImg={t.avatarImg}
            />
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </div>
  );
}
