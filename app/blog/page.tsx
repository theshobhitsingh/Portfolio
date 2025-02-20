"use client";
import React, { useState, useEffect } from "react";

interface LeetcodeData {
  totalSolved: number;
  ranking: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface GfgData {
  TotalProblemSolved: number;
  EasyProblemsSolved: number;
  MediumProblemsSolved: number;
  HardProblemsSolved: number;
}

const Blog = () => {
  const [leetcodeData, setLeetcodeData] = useState<LeetcodeData | null>(null);
  const [gfgData, setGfgData] = useState<GfgData | null>(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [gfgLoading, setGfgLoading] = useState(true);
  const [leetcodeError, setLeetcodeError] = useState<string | null>(null);
  const [gfgError, setGfgError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/shobhit_singh_leetcode"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }
        const data = await response.json();
        setLeetcodeData(data);
      } catch (error) {
        setLeetcodeError((error as Error).message);
      } finally {
        setLeetcodeLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  useEffect(() => {
    const fetchGfgData = async () => {
      try {
        const response = await fetch(
          "https://geeks-for-geeks-api.vercel.app/shobhit_singh_gfg"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GeeksforGeeks data");
        }
        const data = await response.json();
        setGfgData(data.data);
        console.log("hello", gfgData);
      } catch (error) {
        setGfgError((error as Error).message);
      } finally {
        setGfgLoading(false);
      }
    };

    fetchGfgData();
  }, []);

  return (
    <div>
      <style>{`
        .card {
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease-out;
          filter: blur(20px);
          z-index: 0;
        }
        
        .card:hover::before {
          transform: translate(-50%, -50%) scale(1);
        }
        
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
        }
        
        .card-content {
          position: relative;
          z-index: 1; /* Ensures content is above the pseudo-element */
        };
      `}</style>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 animate-text">
      𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝑷𝒓𝒐𝒇𝒊𝒍𝒆𝒔
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* GitHub Section */}
        <div
          className="card shadow-lg rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-gray-800 border border-gray-700"
          data-aos="fade-up"
        >
          <div className="card-content">
            <h3 className="text-2xl md:text-3xl text-blue-500 mb-4 font-semibold">
              𝐆𝐢𝐭𝐇𝐮𝐛
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=theshobhitsingh&show_icons=true&theme=radical&rank_icon=github&border_radius=10"
              alt="GitHub Stats"
              className="mx-auto mb-4 rounded-lg shadow-md"
            />
            <a
              href="https://github.com/theshobhitsingh"
              className="text-blue-400 hover:text-blue-600"
            >
              View Profile
            </a>
          </div>
        </div>

        {/* LeetCode Section */}
        <div
          className="card shadow-lg rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-gray-800 border border-gray-700"
          data-aos="fade-up"
        >
          <div className="card-content">
            <h3 className="text-2xl md:text-3xl text-orange-400 mb-4 font-semibold">
              𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞
            </h3>
            {leetcodeLoading ? (
              <p className="text-gray-400">Loading 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞 Data...</p>
            ) : leetcodeError ? (
              <p className="text-red-600">ɆⱤⱤØⱤ: {leetcodeError}</p>
            ) : leetcodeData ? (
              <div>
                <p className="text-gray-300 text-sm md:text-lg mt-4">
                  𝙏𝙤𝙩𝙖𝙡 𝙎𝙤𝙡𝙫𝙚𝙙: {leetcodeData.totalSolved}
                </p>
                <p className="text-gray-300 text-sm md:text-lg">
                  𝙒𝙤𝙧𝙡𝙙 𝙍𝙖𝙣𝙠: {leetcodeData.ranking}
                </p>
                <p className="text-green-400 text-sm md:text-lg">
                  𝘌𝘢𝘴𝘺 𝘚𝘰𝘭𝘷𝘦𝘥: {leetcodeData.easySolved}
                </p>
                <p className="text-yellow-500 text-sm md:text-lg">
                  𝘔𝘦𝘥𝘪𝘶𝘮 𝘚𝘰𝘭𝘷𝘦𝘥: {leetcodeData.mediumSolved}
                </p>
                <p className="text-red-600 text-sm md:text-lg">
                  𝘏𝘢𝘳𝘥 𝘚𝘰𝘭𝘷𝘦𝘥: {leetcodeData.hardSolved}
                </p>
                <a
                  href="https://leetcode.com/u/shobhit_singh_leetcode/"
                  className="text-orange-400 hover:text-orange-700"
                >
                  Visiƚ 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞 𝙿𝚛𝚘𝚏𝚒𝚕𝚎
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* GeeksforGeeks Section */}
        <div
          className="card shadow-lg rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-gray-800 border border-gray-700"
          data-aos="fade-up"
        >
          <div className="card-content">
            <h3 className="text-2xl md:text-3xl text-green-600 mb-4 font-semibold">
              𝐆𝐞𝐞𝐤𝐬𝐟𝐨𝐫𝐆𝐞𝐞𝐤𝐬
            </h3>
            {gfgLoading ? (
              <p className="text-gray-400">𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝐆𝐞𝐞𝐤𝐬𝐟𝐨𝐫𝐆𝐞𝐞𝐤s 𝙳𝚊𝚝𝚊...</p>
            ) : gfgError ? (
              <p className="text-red-400">ɆⱤⱤØⱤ: {gfgError}</p>
            ) : gfgData ? (
              <div>
                {/* Total problems solved */}
                <p className="text-gray-300 text-sm md:text-lg mt-4">
                  𝙏𝙤𝙩𝙖𝙡 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.solvedStats.easy.count}
                </p>

                {/* Easy problems solved */}
                <p className="text-green-400 text-sm md:text-lg">
                  𝙀𝙖𝙨𝙮 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.solvedStats.easy.count}
                </p>

                {/* Medium problems solved */}
                <p className="text-yellow-500 text-sm md:text-lg">
                  𝙈𝙚𝙙𝙞𝙪𝙢 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.solvedStats.medium.count}
                </p>

                {/* Hard problems solved */}
                <p className="text-red-600 text-sm md:text-lg">
                  𝙃𝙖𝙧𝙙 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.solvedStats.hard.count}
                </p>

                {/* School problems solved */}
                <p className="text-indigo-600 text-sm md:text-lg">
                  𝙎𝙘𝙝𝙤𝙤𝙡 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.solvedStats.school.count}
                </p>

                <a
                  href="https://www.geeksforgeeks.org/user/shobhit_singh_gfg/"
                  className="text-green-400 hover:text-green-800"
                >
                  Visit ⅁f⅁ 
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Blog;
