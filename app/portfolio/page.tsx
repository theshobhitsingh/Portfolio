// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const projects = [
//   {
//     title: "𝗖𝗿𝘆𝗽𝘁𝗼 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗲",
//     mockup:
//       // "https://cdn.dribbble.com/userupload/13799952/file/original-da19059e6b93db48b8e91b499c768751.jpg?resize=752x",
//       "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/394773684_317022850942266_6568933141082428595_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xgj2kBHdofcQ7kNvgHKSn5X&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=A9hfMDk8ZHzoebKec5G9OlK&oh=00_AYDc1M9OKl33qQots5dqSjVlqIZ-65fAO9jH8V5iHXVn1Q&oe=67BC9C0B",
//     live: "https://thecryptouniverse.vercel.app/",
//     code: "https://github.com/theshobhitsingh/CryptoApp",
//   },
//   {
//     title: "𝙔𝙤𝙪𝙏𝙪𝙗𝙚  𝗦𝗰𝗿𝗮𝗽𝗽𝗲𝗿",
//     mockup:
//       // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.creativefabrica.com%2Fwp-content%2Fuploads%2F2022%2F03%2F26%2FYouTube-sign-dark-iconic-background-Graphics-27876508-1.jpg&f=1&nofb=1&ipt=7d52dd0035df0f6d6c92833c71c8e74c08897ff5443ce519d9f7c2bd8c10c445&ipo=images",
//       "https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953527_640.jpg",
//     live: "https://github.com/theshobhitsingh/YT-Downloader",
//     code: "https://github.com/theshobhitsingh/YT-Downloader",
//   },
//   {
//     title: "𝙉𝙀𝙒𝙎 𝗡𝗲𝘅𝘂𝘀",
//     mockup:
//       // "https://cdn.dribbble.com/userupload/3671842/file/original-95ad00366a64a19b9d6f1b1e2fda27c0.jpg?crop=0x0-1600x1200&resize=400x300&vertical=center",
//       "https://as2.ftcdn.net/v2/jpg/02/09/53/11/1000_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg",
//     live: "https://news-nexus-alpha.vercel.app/",
//     code: "https://github.com/theshobhitsingh/News-Nexus",
//   },
//   {
//     title: "𝙕𝙖𝙥𝗠𝗮𝗶𝗹",
//     mockup:
//       // "https://cdn.vectorstock.com/i/1000v/96/23/email-line-icon-on-black-background-flat-vector-25959623.jpg",
//       "https://martech.org/wp-content/uploads/2016/05/email2.png",
//     live: "https://zapmail-f50b1.web.app/",
//     code: "https://github.com/theshobhitsingh/ZapMail",
//   },

//   {
//     title: "𝘾𝙤𝙣𝙫𝙚𝙧𝙩.𝙞𝙤",
//     mockup:
//       // "https://images.sftcdn.net/images/t_app-icon-m/p/b177e4e9-9238-4fe9-be38-d0c80cdf795f/3939120187/file-converter-file%20converter%20icon.png",
//       "https://cdn-icons-png.flaticon.com/512/1322/1322164.png",
//     live: "https://convert-my-files.vercel.app/",
//     code: "https://github.com/theshobhitsingh/Convert.io",
//   },

//   {
//     title: "𝐌𝐮𝐥𝐭𝐢𝐓𝐡𝐫𝐞𝐚𝐝𝐞𝐝 𝐖𝐞𝐛𝐒𝐞𝐫𝐯𝐞𝐫",
//     mockup:
//       // "https://img.freepik.com/premium-photo/smart-data-centers-hd-8k-wallpaper-stock-photographic-image_915071-33308.jpg",
//       "https://img.freepik.com/premium-vector/computer-server-with-data-center-icons_24911-50311.jpg",
//     live: "https://github.com/theshobhitsingh/MultiThreaded-WebServer",
//     code: "https://github.com/theshobhitsingh/MultiThreaded-WebServer",
//   },
//   {
//     title: "𝐄𝐧𝐜𝐫𝐲𝐩𝐭𝐢𝐟𝐲",
//     mockup:
//       // "https://www.megaport.com/uploads/comparing-encryption-in-transit-options-megaport.webp",
//       "https://cdn.prod.website-files.com/654d48e43ed3ff3779c3a2ea/65529c4b641019196dd9a099_649c8e879342031908efb782_Encryption-Illustration-Padlock-Data-Security-SafeBase-p-800.jpeg",
//     live: "https://github.com/theshobhitsingh/Encryptify",
//     code: "https://github.com/theshobhitsingh/Encryptify",
//   },
//   {
//     title: "𝐋𝐢𝐯𝐞 𝗪𝗲𝗮𝘁𝗵𝗲𝗿",
//     mockup:
//       // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F884849.jpg&f=1&nofb=1&ipt=a7517aac0dbfd994b0d1535326b044ce35884c3e10d01a5cf89f63193c69a3b4&ipo=images",
//       "https://img.freepik.com/premium-vector/weather-forecast-displaying-conditions-tunis-tokyo-london-with-temperatures_770668-3740.jpg",
//     live: "https://theshobhitsingh.github.io/live_weather/",
//     code: "https://github.com/theshobhitsingh/live_weather",
//   },
//   {
//     title: "𝘾𝙝𝙖𝙩-𝙍𝙤𝙤𝙢",
//     mockup:
//       // "https://thegadgetlover.com/wp-content/uploads/2016/06/Chatrooms.png",
//       "https://ik.imagekit.io/ably/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png?tr=w-1728,q-50",
//     live: "https://github.com/theshobhitsingh/Chat-Room",
//     code: "https://github.com/theshobhitsingh/Chat-Room",
//   },
//   {
//     title: "𝘾𝙤𝙘𝙤𝙈𝙤𝙘𝙤",
//     mockup:
//       // "https://media.licdn.com/dms/image/C5612AQFzaNkTx6omsA/article-cover_image-shrink_720_1280/0/1616111395954?e=2147483647&v=beta&t=58p4Q_2PGWUTfFv7oY7KvZUbLBUtizeLkx2opYIGjAw",
//       "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg",
//     live: "https://github.com/theshobhitsingh/CocoMoco.com",
//     code: "https://github.com/theshobhitsingh/CocoMoco.com",
//   },
//   {
//     title: "𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝐀𝐩𝐩",
//     // mockup: "/mockups/todoMock.png",
//     mockup:
//       "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
//     live: "https://priority-scheduler.vercel.app/",
//     code: "https://github.com/theshobhitsingh/Priority-Scheduler",
//   },
//   {
//     title: "𝙁𝙞𝙡𝙚 𝙁𝙤𝙡𝙞𝙤",
//     mockup:
//       // "https://i.pinimg.com/1200x/f8/27/64/f82764d775275b1b102f4adad5eab05a.jpg",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd6Q8C65OyxcLdalFbk2LZY74-Yp4SPIa1mRYcAL1zss735lexoQSeOvFow5GmbLMyhU&usqp=CAU",
//     live: "https://github.com/theshobhitsingh/FileFolio",
//     code: "https://github.com/theshobhitsingh/FileFolio",
//   },
//   {
//     title: "𝙎𝙞𝙢𝙤𝙣 𝙎𝙖𝙮𝙨 𝗚𝗮𝗺𝗲",
//     mockup:
//       // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplays.org%2Fscreenshots%2Fsimon-says-game.png&f=1&nofb=1&ipt=bd4628ee14ba58f6119816a39ed61a01be0a148e55fd1268e8b2ec09a5c47e09&ipo=images",
//       "https://img.itch.zone/aW1nLzE3MTIwMDE3LmpwZWc=/original/QIYkrh.jpeg",
//     live: "https://theshobhitsingh.github.io/simon_says/",
//     code: "https://github.com/theshobhitsingh/simon_says",
//   },
// ];

// const cardStyle: React.CSSProperties = {
//   borderRadius: "12px",
//   overflow: "hidden",
//   background: "rgba(255, 255, 255, 0.1)",
//   backdropFilter: "blur(10px)",
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//   margin: "16px",
//   transition: "transform 0.3s, box-shadow 0.3s",
//   cursor: "pointer",
//   position: "relative",
//   border: "2px solid transparent",
//   zIndex: "-100",
// };

// const cardHoverStyle: React.CSSProperties = {
//   transform: "scale(1.05)",
//   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//   animation: "glow 1s infinite alternate",
// };

// const imageStyle: React.CSSProperties = {
//   width: "100%",
//   height: "200px",
//   objectFit: "cover" as React.CSSProperties["objectFit"],
// };

// const titleStyle: React.CSSProperties = {
//   fontSize: "18px",
//   fontWeight: "bold",
//   margin: "10px 0",
// };

// const buttonStyle: React.CSSProperties = {
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "5px",
//   color: "black",
//   cursor: "pointer",
//   transition: "background 0.3s",
//   margin: "5px 10px",
// };

// const liveButtonStyle: React.CSSProperties = {
//   ...buttonStyle,
//   background: "#AFDBF5",
// };

// const sourceButtonStyle: React.CSSProperties = {
//   ...buttonStyle,
//   background: "#E6E6FA",
// };

// const glowEffect = `
// @keyframes glow {
//   0% {
//     border-color: rgba(255, 255, 255, 0.5);
//     box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
//   }
//   100% {
//     border-color: rgba(0, 112, 243, 1);
//     box-shadow: 0 0 20px rgba(0, 112, 243, 1);
//   }
// }
// `;

// const Projects: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div style={{ textAlign: "center", paddingTop: "80px" }}>
//       {" "}
//       <style>{glowEffect}</style>
//       <p>𝘼𝙡𝙡 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙞𝙤𝙣𝙨:</p>
//       <Link
//         href="https://github.com/theshobhitsingh"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ textDecoration: "none", color: "#76ABDF", fontWeight: "bold" }}
//       >
//         קг๏Ŧ𝚒l𝚎𝙼𝚎.dev
//       </Link>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           padding: "20px",
//         }}
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               ...cardStyle,
//               ...(hoveredIndex === index ? cardHoverStyle : {}),
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="z-40"
//           >
//             <img src={project.mockup} alt={project.title} style={imageStyle} />
//             <div style={{ padding: "16px" }}>
//               <h2 style={titleStyle}>{project.title}</h2>
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={liveButtonStyle}
//               >
//                 𝑳𝒊𝒗𝒆
//               </Link>
//               <Link
//                 className=" text-black"
//                 href={project.code}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={sourceButtonStyle}
//               >
//                 𝑺𝒐𝒖𝒓𝒄𝒆
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "𝗖𝗿𝘆𝗽𝘁𝗼 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗲",
    mockup:
      "https://www.prosegur.com/dam/jcr:a808e88d-aaf0-47c0-956d-d481ca8694fc/shutterstock_1929459776%20(1).jpg",
    live: "https://thecryptouniverse.vercel.app/",
    code: "https://github.com/theshobhitsingh/CryptoApp",
  },
  {
    title: "𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝗦𝗰𝗿𝗮𝗽𝗽𝗲𝗿",
    mockup:
      "https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953527_640.jpg",
    live: "https://github.com/theshobhitsingh/YT-Downloader",
    code: "https://github.com/theshobhitsingh/YT-Downloader",
  },
  {
    title: "𝙉𝙀𝙒𝙎 𝗡𝗲𝘅𝘂𝘀",
    mockup:
      "https://as2.ftcdn.net/v2/jpg/02/09/53/11/1000_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg",
    live: "https://news-nexus-alpha.vercel.app/",
    code: "https://github.com/theshobhitsingh/News-Nexus",
  },
  {
    title: "𝙕𝙖𝙥𝗠𝗮𝗶𝗹",
    mockup: "https://martech.org/wp-content/uploads/2016/05/email2.png",
    live: "https://zapmail-f50b1.web.app/",
    code: "https://github.com/theshobhitsingh/ZapMail",
  },
  {
    title: "𝘾𝙤𝙣𝙫𝙚𝙧𝙩.𝙞𝙤",
    mockup: "https://cdn-icons-png.flaticon.com/512/1322/1322164.png",
    live: "https://convert-my-files.vercel.app/",
    code: "https://github.com/theshobhitsingh/Convert.io",
  },
  {
    title: "𝐌𝐮𝐥𝐭𝐢𝐓𝐡𝐫𝐞𝐚𝐝𝐞𝐝 𝐖𝐞𝐛𝐒𝐞𝐫𝐯𝐞𝐫",
    mockup:
      "https://img.freepik.com/premium-vector/computer-server-with-data-center-icons_24911-50311.jpg",
    live: "https://github.com/theshobhitsingh/MultiThreaded-WebServer",
    code: "https://github.com/theshobhitsingh/MultiThreaded-WebServer",
  },
  {
    title: "𝐄𝐧𝐜𝐫𝐲𝐩𝐭𝐢𝐟𝐲",
    mockup:
      "https://cdn.prod.website-files.com/654d48e43ed3ff3779c3a2ea/65529c4b641019196dd9a099_649c8e879342031908efb782_Encryption-Illustration-Padlock-Data-Security-SafeBase-p-800.jpeg",
    live: "https://github.com/theshobhitsingh/Encryptify",
    code: "https://github.com/theshobhitsingh/Encryptify",
  },
  {
    title: "𝐋𝐢𝐯𝐞 𝗪𝗲𝗮𝘁𝗵𝗲𝗿",
    mockup:
      "https://img.freepik.com/premium-vector/weather-forecast-displaying-conditions-tunis-tokyo-london-with-temperatures_770668-3740.jpg",
    live: "https://theshobhitsingh.github.io/live_weather/",
    code: "https://github.com/theshobhitsingh/live_weather",
  },
  {
    title: "𝘾𝙝𝙖𝙩-𝙍𝙤𝙤𝙢",
    mockup:
      "https://ik.imagekit.io/ably/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png?tr=w-1728,q-50",
    live: "https://github.com/theshobhitsingh/Chat-Room",
    code: "https://github.com/theshobhitsingh/Chat-Room",
  },
  {
    title: "𝘾𝙤𝙘𝙤𝙈𝙤𝙘𝙤",
    mockup: "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg",
    live: "https://github.com/theshobhitsingh/CocoMoco.com",
    code: "https://github.com/theshobhitsingh/CocoMoco.com",
  },
  {
    title: "𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝐀𝐩𝐩",
    mockup:
      "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
    live: "https://priority-scheduler.vercel.app/",
    code: "https://github.com/theshobhitsingh/Priority-Scheduler",
  },
  {
    title: "𝙁𝙞𝙡𝙚 𝙁𝙤𝙡𝙞𝙤",
    mockup:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd6Q8C65OyxcLdalFbk2LZY74-Yp4SPIa1mRYcAL1zss735lexoQSeOvFow5GmbLMyhU&usqp=CAU",
    live: "https://github.com/theshobhitsingh/FileFolio",
    code: "https://github.com/theshobhitsingh/FileFolio",
  },
  {
    title: "𝙎𝙞𝙢𝙤𝙣 𝙎𝙖𝙮𝙨 𝗚𝗮𝗺𝗲",
    mockup:
      "https://img.itch.zone/aW1nLzE3MTIwMDE3LmpwZWc=/original/QIYkrh.jpeg",
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
  animation: "glow 1s alternate",
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
  color: "black",
  cursor: "pointer",
  transition: "background 0.3s",
  margin: "5px 10px",
};

const liveButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#AFDBF5",
  transition: "background 0.3s ease",
};

const sourceButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#E6E6FA",
  transition: "background 0.3s ease",
};

const sourceButtonHoverStyle: React.CSSProperties = {
  background: "#D4005F",
};

const liveButtonHoverStyle: React.CSSProperties = {
  background: "#1E3A8A",
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
    <div style={{ textAlign: "center", paddingTop: "80px" }}>
      <style>{glowEffect}</style>
      <p>𝘼𝙡𝙡 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙞𝙤𝙣𝙨:</p>
      <Link
        href="https://github.com/theshobhitsingh"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#76ABDF", fontWeight: "bold" }}
      >
        קг๏Ŧ𝚒l𝚎𝙼𝚎.dev
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
            className="z-40"
          >
            <img src={project.mockup} alt={project.title} style={imageStyle} />
            <div style={{ padding: "16px" }}>
              <h2 style={titleStyle}>{project.title}</h2>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    ...liveButtonStyle,
                    ...(hoveredIndex === index ? liveButtonHoverStyle : {}),
                  }}
                  aria-label={`View live demo of ${project.title}`}
                >
                  ━⊱ 𝑳𝒊𝒗𝒆
                </button>
              </Link>
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    ...sourceButtonStyle,
                    ...(hoveredIndex === index ? sourceButtonHoverStyle : {}),
                  }}
                  aria-label={`View source code for ${project.title}`}
                >
                  𝑺𝒐𝒖𝒓𝒄𝒆 ⊰━
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
