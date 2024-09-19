import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
// import { Profile } from "../public/My Profile/images";

// const ProfilePicture = () => {
//   return (
//     <img
//       src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/My%20Profile/MyProfile.jpeg?raw=true"
//       alt="Profile Picture"
//       className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5 p-3"
//     />
//   );
// };
const ProfilePicture = () => {
  return (
    <img
      src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/My%20Profile/MyProfile.png?raw=true"
      alt="Profile Picture"
      className="rounded-full md:w-[500px] md:h-[500px] object-cover bg-gradient-to-br from-indigo-600 to-fuchsia-700"
    />
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>🌐 𝑩𝙖𝙨𝙚𝙙 𝙞𝙣 𝙄𝙣𝙙𝙞𝙖</li>
      <li>
        <a href="mailto:theshobhitt@gmail.com">📧 𝙇𝙚𝙩'𝙨 𝙜𝙚𝙩 𝙞𝙣 𝙩𝙤𝙪𝙘𝙝!</a>
      </li>
      <li>
        📄𝑫𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙢𝙮{" "}
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

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/theshobhitsingh",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/shobhit-singh-the-programmer",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/shobhit_singh_leetcode/",
  },
  {
    icon: <SiGeeksforgeeks />,
    href: "https://www.geeksforgeeks.org/user/shobhit_singh_gfg/",
  },
  {
    icon: <SiHackerrank />,
    href: "https://www.hackerrank.com/profile/shobhitsingh2103",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            𝐇𝐢, I'm{" "}
            <span className="bg-gradient-to-tl from-indigo-600 to-fuchsia-600 text-transparent bg-clip-text font-bold">
              丂卄ㄖ乃卄𝐢𝐭
            </span>
            <WavingHand />
          </h1>
          <h2 className="text-3xl">𝑰'𝒎 𝒂 𝑭𝒖𝒍𝒍-𝑺𝒕𝒂𝒄𝒌 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li
              key={index}
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
            >
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
