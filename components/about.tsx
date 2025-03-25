"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While working as an{" "}
        <span className="font-medium">Account Manager</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem or just building whatever I want. My core stack
        is{" "}
        <span className="font-medium">
          React, Express.js, Node.js, and postgreSQL
        </span>
        . Additionally, I am proficient in using the command line interface and am always eager to expand my technical skills by learning about new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading books, airsoft, camping, and fishing. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning and practicing Brazilian Jiu-Jitsu and hopefully plan on competing!
      </p>
    </motion.section>
  );
}
