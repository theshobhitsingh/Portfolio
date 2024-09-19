import React from "react";
import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skills } from "../../lib/constants";

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutMe/" />
        <Prompt directory="/aboutMe" branch={true} content="cat README.md" />
        <p>
          <b>Hello there!</b> I'm Shobhit, a Full-stack dev <b>from India</b>,
          specializing in <b>MERN stack</b>.I'm currently a student pursuing my
          Bachelor's in Computer Applications. I am dedicated & focused on
          learning ReactJS, NodeJS, ExpressJS, MongoDB, SQL, NextJS and
          more...to become a good Full-Stack Engineer. Once I feel i have become
          fairly proficient in my current stack, I plan to expand my horizons to
          learn Rust and Dive Deep into the world of Blockchain.
        </p>
        <p>
          Outside of my coding life, I love Reading Books and Discussing about
          Science, Innovation and Technology.
        </p>
        <p>Join me on my Journey! Exciting things are coming up🚀</p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt
          directory="/skillsAndTools/Proficient"
          branch={true}
          content="ls"
        />
        <div className="flex justify-start flex-wrap md:justify-between">
          <ul>
            <SkillList
              title="𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙞𝙣𝙜 𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚𝙨"
              items={skills.ProgrammingLanguages}
            />
            <SkillList title="𝙁𝙧𝙤𝙣𝙩𝙚𝙣𝙙 𝙎𝙠𝙞𝙡𝙡𝙨" items={skills.FrontendSkills} />
            <SkillList title="𝘽𝙖𝙘𝙠𝙚𝙣𝙙 𝙎𝙠𝙞𝙡𝙡𝙨" items={skills.BackendSkills} />
            <SkillList title="𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 𝙎𝙠𝙞𝙡𝙡𝙨" items={skills.DatabasesSkills} />
            <SkillList title="𝙎𝙩𝙮𝙡𝙞𝙣𝙜" items={skills.Styling} />
          </ul>
          <ul className="md:text-right">
            <SkillList
              title="𝙇𝙞𝙗𝙧𝙖𝙧𝙞𝙚𝙨 & 𝙁𝙧𝙖𝙢𝙚𝙬𝙤𝙧𝙠𝙨"
              items={skills.LibrariesFrameworks}
            />
            <SkillList title="𝙏𝙤𝙤𝙡𝙨𝙊𝙛𝙏𝙝𝙚𝙏𝙧𝙖𝙙𝙚" items={skills.ToolsOfTheTrade} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory="/HobbiesAndInterests" branch={true} content="ls" />
        <ul>
          <li> 🧑‍💻 CӨDIПG </li>
          <li> 🔭 𝚂𝚌𝚒𝚎𝚗𝚌𝚎 𝚊𝚗𝚍 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢 </li>
          <li> 📚 𝚁𝚎𝚊𝚍𝚒𝚗𝚐 𝙱𝚘𝚘𝚔𝚜 </li>
          <li> 🧠 𝙶𝚛𝚘𝚞𝚙 𝙳𝚒𝚜𝚌𝚞𝚜𝚜𝚜𝚒𝚘𝚗𝚜 </li>
          <li> 🌌 𝙴𝚡𝚙𝚕𝚘𝚛𝚒𝚗𝚐 †𝚑𝚎 𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚎</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
