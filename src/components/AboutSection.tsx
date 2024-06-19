"use client";

import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Features",
    id: "technicalFeatures",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Discord.js</li>
        <li>REST APIs</li>
        <li>Weather API</li>
        <li>News API</li>
        <li>Translation API</li>
        <li>Movie API</li>
      </ul>
    ),
  },
  {
    title: "Usage Scenarios",
    id: "usageScenarios",
    content: (
      <ul className="list-disc pl-2">
        <li>Weather updates</li>
        <li>Latest news</li>
        <li>Language translation</li>
        <li>Movie recommendations</li>
        <li>Interactive commands</li>
      </ul>
    ),
  },
  {
    title: "Development Journey",
    id: "developmentJourney",
    content: (
      <ul className="list-disc pl-2">
        <li>Started as a practice project to improve coding skills</li>
        <li>Integration with various APIs for dynamic commands</li>
        <li>Focused on enhancing Node.js and TypeScript knowledge</li>
        <li>Iterative development with continuous improvements</li>
      </ul>
    ),
  },
  {
    title: "Future Plans",
    id: "futurePlans",
    content: (
      <ul className="list-disc pl-2">
        <li>Expand to include more APIs</li>
        <li>Add more interactive and fun commands</li>
        <li>Improve command response times</li>
        <li>Deploy on a dedicated server for better performance</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("technicalFeatures");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="pt-3" id="about">
      <section className="">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            alt="Giovanni's coding illustration made by 'Cartoonize Yourself - ChatGPT 4o'"
            src="/images/coding.png"
            width={500}
            height={500}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold  mb-4">About GiBot</h2>
            <p className="text-base lg:text-lg">
              GiBot is a versatile Discord bot developed to enhance my coding
              skills and provide useful features to users. The bot utilizes
              various APIs to fetch real-time data for commands such as weather
              updates, news, translations, and movie recommendations. Developed
              using Node.js and TypeScript, GiBot showcases the power of modern
              web technologies and API integrations.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("technicalFeatures")}
                active={tab === "technicalFeatures"}
              >
                Technical Features
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("usageScenarios")}
                active={tab === "usageScenarios"}
              >
                Usage Scenarios
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("developmentJourney")}
                active={tab === "developmentJourney"}
              >
                Development Journey
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("futurePlans")}
                active={tab === "futurePlans"}
              >
                Future Plans
              </TabButton>
            </div>
            <div className="mt-8 ">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
