"use client";
import React, { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "𝐂𝐫𝐲𝐩𝐭𝐨 𝐖𝐨𝐫𝐥𝐝",
    mockup:
      "https://cdn.dribbble.com/userupload/13799952/file/original-da19059e6b93db48b8e91b499c768751.jpg?resize=752x",
    live: "https://thecryptouniverse.vercel.app/",
    code: "https://github.com/theshobhitsingh/CryptoApp",
  },
  {
    title: "𝐍𝐞𝐰𝐬 𝐖𝐞𝐛 𝐀𝐩𝐩",
    mockup:
      "https://cdn.dribbble.com/userupload/3671842/file/original-95ad00366a64a19b9d6f1b1e2fda27c0.jpg?crop=0x0-1600x1200&resize=400x300&vertical=center",
    live: "https://news-nexus-alpha.vercel.app/",
    code: "https://github.com/theshobhitsingh/News-Nexus",
  },
  {
    title: "𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐒𝐜𝐫𝐚𝐩𝐩𝐞𝐫 ",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.creativefabrica.com%2Fwp-content%2Fuploads%2F2022%2F03%2F26%2FYouTube-sign-dark-iconic-background-Graphics-27876508-1.jpg&f=1&nofb=1&ipt=7d52dd0035df0f6d6c92833c71c8e74c08897ff5443ce519d9f7c2bd8c10c445&ipo=images",
    live: "https://github.com/theshobhitsingh/YT-Downloader",
    code: "https://github.com/theshobhitsingh/YT-Downloader",
  },
  {
    title: "𝐏𝐫𝐢𝐨𝐫𝐢𝐭𝐲 𝐀𝐩𝐩",
    mockup: "/mockups/todoMock.png",
    live: "https://priority-scheduler.vercel.app/",
    code: "https://github.com/theshobhitsingh/Priority-Scheduler",
  },
  {
    title: "𝐋𝐢𝐯𝐞 𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐀𝐩𝐩",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F884849.jpg&f=1&nofb=1&ipt=a7517aac0dbfd994b0d1535326b044ce35884c3e10d01a5cf89f63193c69a3b4&ipo=images",
    live: "https://theshobhitsingh.github.io/live_weather/",
    code: "https://github.com/theshobhitsingh/live_weather",
  },
  {
    title: "𝐒𝐢𝐦𝐨𝐧 𝐒𝐚𝐲𝐬 𝐎𝐧𝐥𝐢𝐧𝐞 𝐆𝐚𝐦𝐞",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplays.org%2Fscreenshots%2Fsimon-says-game.png&f=1&nofb=1&ipt=bd4628ee14ba58f6119816a39ed61a01be0a148e55fd1268e8b2ec09a5c47e09&ipo=images",
    live: "https://theshobhitsingh.github.io/simon_says/",
    code: "https://github.com/theshobhitsingh/simon_says",
  },
];

const cardStyle: React.CSSProperties = {
  borderRadius: "12px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  margin: "16px",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  position: "relative",
  border: "2px solid transparent",
};

const cardHoverStyle: React.CSSProperties = {
  transform: "scale(1.05)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  animation: "glow 1s infinite alternate",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover" as React.CSSProperties["objectFit"],
};

const titleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  transition: "background 0.3s",
  margin: "5px 10px",
};

const liveButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#AFDBF5",
};

const sourceButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#E6E6FA",
};

const glowEffect = `
@keyframes glow {
  0% {
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  100% {
    border-color: rgba(0, 112, 243, 1);
    box-shadow: 0 0 20px rgba(0, 112, 243, 1);
  }
}
`;

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ textAlign: "center" }}>
      <style>{glowEffect}</style> {/* Inject the glow effect into the page */}
      <p>𝘼𝙡𝙡 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙞𝙤𝙣𝙨:</p>
      <Link
        href="https://github.com/theshobhitsingh"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}
      >
        קг๏Ŧ𝚒l𝚎𝙼𝚎.𝚙𝚕
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredIndex === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.mockup} alt={project.title} style={imageStyle} />
            <div style={{ padding: "16px" }}>
              <h2 style={titleStyle}>{project.title}</h2>
              <Link href={project.live} target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
                ᒪIᐯE
              </Link>
              <Link href={project.code} target="_blank" rel="noopener noreferrer" style={sourceButtonStyle}>
                𝚂𝚘𝚞𝚛𝚌𝚎
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
