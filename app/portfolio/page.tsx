"use client";
import Link from "next/link";
import React, { CSSProperties } from "react";

const CardContainer: CSSProperties = {
  position: "relative",
  width: "360px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "16px",
  gap: "16px",
  borderRadius: "12px",
  cursor: "pointer",
  color: "white",
  overflow: "hidden",
  transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  margin: "0 16px",
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(15px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

const CardImage: CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
};

const CardContent: CSSProperties = {
  flex: 2,
};

const CardButtons: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "12px",
};

const Button: CSSProperties = {
  border: "none",
  color: "white",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  textAlign: "center",
  flex: 1,
  margin: "0 5px",
};

const ButtonSecondary: CSSProperties = {
  ...Button,
  backgroundColor: "#545AA7",
};

const ButtonPrimary: CSSProperties = {
  ...Button,
  backgroundColor: "#0C2340",
};

const Heading: CSSProperties = {
  fontSize: "22px",
  textTransform: "capitalize",
  fontWeight: "700",
  marginBottom: "10px",
};

const projects = [
  {
    title: "ᑕᖇYᑭTO 𝙰𝚙𝚙",
    mockup:
      "https://cdn.dribbble.com/userupload/13799952/file/original-da19059e6b93db48b8e91b499c768751.jpg?resize=752x",
    live: "https://thecryptouniverse.vercel.app/",
    code: "https://github.com/theshobhitsingh/CryptoApp",
  },
  {
    title: "𝐍𝐄𝐖𝐒 𝚆𝚎𝚋 𝙰𝚙𝚙",
    mockup:
      "https://cdn.dribbble.com/userupload/3671842/file/original-95ad00366a64a19b9d6f1b1e2fda27c0.jpg?crop=0x0-1600x1200&resize=400x300&vertical=center",
    live: "https://news-nexus-alpha.vercel.app/",
    code: "https://github.com/theshobhitsingh/News-Nexus",
  },
  {
    title: "𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝚂𝚌𝚛𝚊𝚙𝚙𝚎𝚛",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.creativefabrica.com%2Fwp-content%2Fuploads%2F2022%2F03%2F26%2FYouTube-sign-dark-iconic-background-Graphics-27876508-1.jpg&f=1&nofb=1&ipt=7d52dd0035df0f6d6c92833c71c8e74c08897ff5443ce519d9f7c2bd8c10c445&ipo=images",
    live: "https://github.com/theshobhitsingh/YT-Downloader",
    code: "https://github.com/theshobhitsingh/YT-Downloader",
  },
  {
    title: "𝐏𝐫𝐢𝐨𝐫𝐢𝐭𝐲 𝙰𝚙𝚙",
    mockup: "/mockups/todoMock.png",
    live: "https://priority-scheduler.vercel.app/",
    code: "https://github.com/theshobhitsingh/Priority-Scheduler",
  },
  {
    title: "𝐋𝐢𝐯𝐞 𝘞𝘦𝘢𝘵𝘩𝘦𝘳 𝘈𝘱𝘱",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F884849.jpg&f=1&nofb=1&ipt=a7517aac0dbfd994b0d1535326b044ce35884c3e10d01a5cf89f63193c69a3b4&ipo=images",
    live: "https://theshobhitsingh.github.io/live_weather/",
    code: "https://github.com/theshobhitsingh/live_weather",
  },
  {
    title: "𝙎𝙞𝙢𝙤𝙣 𝙎𝙖𝙮𝙨 𝙾𝚗𝚕𝚒𝚗𝚎 𝙶𝚊𝚖𝚎",
    mockup:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplays.org%2Fscreenshots%2Fsimon-says-game.png&f=1&nofb=1&ipt=bd4628ee14ba58f6119816a39ed61a01be0a148e55fd1268e8b2ec09a5c47e09&ipo=images",
    live: "https://shobhitsingh.github.io/simon_says/",
    code: "https://github.com/theshobhitsingh/simon_says",
  },
];

const Portfolio = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>𝘼𝙡𝙡 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙞𝙤𝙣𝙨:</p>
      <Link
        href="https://github.com/theshobhitsingh"
        style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}
      >
        קг๏Ŧ𝚒𝚕𝚎𝙼𝚎.𝚍𝚎𝚟
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "10px",
        }}
      >
        {projects.map((project, index) => (
          <div key={index} style={CardContainer}>
            <img src={project.mockup} alt={project.title} style={CardImage} />
            <div style={CardContent}>
              <h1 style={Heading}>{project.title}</h1>
              <div style={CardButtons}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={ButtonSecondary}
                >
                  Ｌｉｖｅ
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={ButtonPrimary}
                >
                  Ｓｏｕｒｃｅ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
