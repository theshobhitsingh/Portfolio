import React from "react";
import {
  FaCode,
  FaBook,
  FaUsers,
  FaRocket,
  FaMicroscope,
} from "react-icons/fa";
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
          <b>𝐇ello there!</b> I'm Shobhit, a passionate Full-Stack Developer{" "}
          <b>from India</b> specializing in the <b>MERN stack</b>. Currently,
          I'm pursuing my Bachelor's in Computer Applications, dedicating myself
          to mastering technologies like <b>ReactJS</b>, <b>NodeJS</b>,{" "}
          <b>ExpressJS</b>, <b>MongoDB</b>, <b>SQL</b>, and <b>NextJS</b>. My
          goal is to become a proficient Full-Stack Engineer. Once I feel
          confident in my current stack, I plan to expand my horizons by
          learning <b>Rust</b> and diving deep into the exciting world of{" "}
          <b>Blockchain</b>.
        </p>
        <p>
          I'm always eager to tackle new challenges and continuously improve my
          skills. Let's connect and explore the endless possibilities in tech
          together!
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
        <ul className="space-y-2 text-xl">
          <li className="flex items-center">
            <FaCode className="mr-2" /> <b>𝙲𝚘𝚍𝚒𝚗𝚐</b>
          </li>
          <li className="flex items-center">
            <FaMicroscope className="mr-2" /> <b>𝚂𝚌𝚒𝚎𝚗𝚌𝚎 𝚊𝚗𝚍 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢</b>
          </li>
          <li className="flex items-center">
            <FaBook className="mr-2" /> <b>𝚁𝚎𝚊𝚍𝚒𝚗𝚐 𝙱𝚘𝚘𝚔𝚜</b>
          </li>
          <li className="flex items-center">
            <FaUsers className="mr-2" /> <b>𝙶𝚛𝚘𝚞𝚙 𝙳𝚒𝚜𝚌𝚞𝚜𝚜𝚜𝚒𝚘𝚗𝚜</b>
          </li>
          <li className="flex items-center">
            <FaRocket className="mr-2" /> <b>𝙴𝚡𝚙𝚕𝚘𝚛𝚒𝚗𝚐 †𝚑𝚎 𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚎</b>
          </li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
