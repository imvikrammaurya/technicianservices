import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default function QAndA() {
  const allFaqs = [
    // --- LEFT COLUMN: Logistics, Scheduling & Money ---
    {
      title: "Do you offer same-day service?",
      content:
        "Yes. We schedule same-day appointments in most areas when you call before noon. Emergency repairs outside normal hours can be arranged for an additional fee.",
      value: "item-1",
    },
    {
      title: "Do you offer services on weekends?",
      content:
        "Yes, we work 7 days a week, including Sundays and most public holidays. We understand that appliance breakdowns don't stick to a schedule!",
      value: "item-2",
    },
    {
      title: "How do I schedule an appointment?",
      content:
        "Call us directly, use our online booking system, or send an email. We’ll confirm based on technician availability. Cancellations can be made up to 24 hours before.",
      value: "item-3",
    },
    {
      title: "What areas do you service?",
      content:
        "We cover most of the greater metro area and surrounding suburbs. Contact us with your address and we’ll let you know if we can reach you.",
      value: "item-4",
    },
    {
      title: "How much does a service call cost?",
      content:
        "Service calls start at a flat diagnostic fee, which applies toward your repair if you proceed. We provide clear quotes before starting any major job.",
      value: "item-5",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept all major modes of payment including UPI (GPay, PhonePe, Paytm), Cash, and major Credit/Debit cards upon service completion.",
      value: "item-6",
    },

    // --- RIGHT COLUMN: Trust, Quality & Scope ---
    {
      title: "Can you install new equipment?",
      content:
        "Absolutely. We install air conditioners, washing machines, and purifiers with full setup. We handle all connections, venting, and electrical work to code.",
      value: "item-7",
    },
    {
      title: "Do you service all brands?",
      content:
        "We work on most major air conditioner, washing machine, and purifier brands (LG, Samsung, Voltas, etc). Call us with your model number to confirm.",
      value: "item-8",
    },
    {
      title: "Do you use genuine spare parts?",
      content:
        "Yes, we only use 100% genuine OEM parts or high-quality compatible components recommended by the manufacturer. All parts come with their own warranty.",
      value: "item-9",
    },
    {
      title: "What warranty do you provide?",
      content:
        "All parts come with manufacturer warranties. Our labor carries a one-month guarantee. If something fails due to our work, we fix it at no charge.",
      value: "item-10",
    },
    {
      title: "Do you offer Annual Maintenance Contracts (AMC)?",
      content:
        "Yes! We offer comprehensive AMC plans that include scheduled servicing, filter replacements, and priority support to prevent costly breakdowns.",
      value: "item-11",
    },
    {
      title: "Still have questions?",
      content: "Reach out to us directly and we'll answer anything.",
      value: "item-12",
    },
  ];

  const midIndex = Math.ceil(allFaqs.length / 2);
  const leftFaqs = allFaqs.slice(0, midIndex);
  const rightFaqs = allFaqs.slice(midIndex);

  return (
    <div className="flex flex-col container mt-35 mx-auto px-4 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold font-heading text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">Got questions? We have answers.</p>
      </div>

      {/* Two-Column Grid Layout */}
      <div className="grid px-20 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-start">
        {/* Column 1 */}
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {leftFaqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                {/* FIX 1: Added 'text-xl' to make TITLE bigger */}
                <AccordionTrigger className="text-xl">
                  {faq.title}
                </AccordionTrigger>

                {/* FIX 2: Added 'text-lg' to make CONTENT bigger */}
                <AccordionContent className="text-lg">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Column 2 */}
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {rightFaqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                {/* FIX 1: Added 'text-xl' to make TITLE bigger */}
                <AccordionTrigger className="text-xl">
                  {faq.title}
                </AccordionTrigger>

                {/* FIX 2: Added 'text-lg' to make CONTENT bigger */}
                <AccordionContent className="text-lg">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
