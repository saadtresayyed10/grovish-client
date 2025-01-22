import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQuestions = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full font-roobert text-white"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="lg:text-4xl">
          How can Grovish boost my revenue and clientele?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl lg:mt-6">
          In addition to saving you time and money, Grovish offers powerful
          salon marketing tools to help you attract new clients and retain
          existing ones. With features like customizable email and SMS
          campaigns, social media integrations, and rebooking reminders, Grovish
          makes it easier than ever to engage with potential clients and
          encourage repeat visits.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="lg:text-4xl lg:mt-12">
          How does Grovish web-app elevate my business?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl lg:mt-6">
          Not only was Grovish designed to streamline your salon or self-care
          business&apos;s operations, enhance efficiency, and deliver a superior
          client experience, but it was also built with a creative aesthetic
          that is meant to be customizable to fit your brand. We want you to
          have a good experience managing your salon business and also wow your
          clients with creative design and ease of use.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="lg:text-4xl lg:mt-12">
          What sets Grovish apart from other applications?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl lg:mt-6">
          Grovish has a sophisticated, modern look that allows you to showcase
          your style to clients and stand out in a crowd. It was designed to be
          easy and intuitive, so you don&apos;t have to spend hours setting up
          or using your salon management software. With features like automated
          waitlists, auto-appointment reminders, and one-click form creation
          tools, the platform makes it easy to manage your salon business all in
          one place. We prioritize making the booking process simple for your
          clients as well, with an easy-to-navigate salon or spa booking site
          included free.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQuestions;
