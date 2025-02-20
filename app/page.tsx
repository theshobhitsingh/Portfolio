"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { animated } from "@react-spring/web";
import { FaMapMarkerAlt, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { FloatingDock } from "@/Components/ui/floating-dock"; 

const ProfilePicture = () => {
  return (
    <img
      src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/My%20Profile/MyProfile.png?raw=true"
      alt="Profile Picture"
      className="rounded-full w-[300px] h-[300px] object-cover"
      style={{
        boxShadow:
          "0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(249, 168, 212, 0.6)",
      }}
    />
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>
        <FaMapMarkerAlt className="inline mr-2" /> 𝑩𝙖𝙨𝙚𝙙 𝙞𝙣 𝙄𝙣𝙙𝙞𝙖
      </li>
      <li>
        <FaEnvelope className="inline mr-2" />
        <a href="mailto:theshobhitt@gmail.com"> 𝙇𝙚𝙩'𝙨 𝙜𝙚𝙩 𝙞𝙣 𝙩𝙤𝙪𝙘𝙝!</a>
      </li>
      <li>
        <FaFileDownload className="inline mr-2" />
        𝑫𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙢𝙮{" "}
        <a className="link link-primary" href="" download="">
          𝑹𝙚𝙨𝙪𝙢𝙚
        </a>
      </li>
    </ul>
  );
};

const WavingHand = () => {
  return <span className="animate-wave inline-block">👋</span>;
};

// const socials = [
//   {
//     icon: <FaGithub />,
//     href: "https://github.com/theshobhitsingh",
//   },
//   {
//     icon: <FaLinkedin />,
//     href: "https://linkedin.com/in/shobhit-singh-the-programmer",
//   },
//   {
//     icon: <SiLeetcode />,
//     href: "https://leetcode.com/u/shobhit_singh_leetcode/",
//   },
//   {
//     icon: <SiGeeksforgeeks />,
//     href: "https://www.geeksforgeeks.org/user/shobhit_singh_gfg/",
//   },
//   {
//     icon: <SiHackerrank />,
//     href: "https://www.hackerrank.com/profile/shobhitsingh2103",
//   },
// ];

const phrases = [
  "𝙄 𝙖𝙢 𝙖 𝘚𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳",
  "𝙄 𝙖𝙢 𝙖 🕸️ 𝘋𝘦𝘴𝘪𝘨𝘯𝘦𝘳",
  "𝙄 𝙖𝙢 𝙖 𝘍𝘳𝘰𝘯𝘵-𝘌𝘯𝘥 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳",
  "𝙄 𝙖𝙢 𝙖 𝘉𝘢𝘤𝘬-𝘌𝘯𝘥 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳",
  "𝙄 𝙖𝙢 𝙖 𝘍𝘶𝘭𝘭-𝘚𝘵𝘢𝘤𝘬 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFadeClass("fade-in");
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      title: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/theshobhitsingh",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/shobhit-singh-the-programmer",
    },
    {
      title: "Leetcode",
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/shobhit_singh_leetcode/",
    },
    {
      title: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      href: "https://www.geeksforgeeks.org/user/shobhit_singh_gfg/",
    },
    {
      title: "HackerRank",
      icon: <SiHackerrank />,
      href: "https://www.hackerrank.com/profile/shobhitsingh2103",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      <ProfilePicture />
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            𝐇𝐢, I'm{" "}
            <span className="bg-gradient-to-tl from-indigo-600 to-fuchsia-600 text-transparent bg-clip-text font-bold">
              𝑺𝒉𝒐𝒃𝒉𝒊𝒕
            </span>
            <WavingHand />
          </h1>
          <animated.h2 className={`text-3xl ${fadeClass}`}>
            {phrases[index]}
          </animated.h2>
        </div>
        <BulletPoints />
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {/* {socials.map((social, index) => (
            <li
              key={index}
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
            >
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))} */}
        </ul>
        <FloatingDock items={items} />
      </div>
    </div>
  );
}
