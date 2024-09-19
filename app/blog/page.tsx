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
          "https://gfgstats.onrender.com/?userName=shobhit_singh_gfg"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GeeksforGeeks data");
        }
        const data = await response.json();
        setGfgData(data.data);
      } catch (error) {
        setGfgError((error as Error).message);
      } finally {
        setGfgLoading(false);
      }
    };

    fetchGfgData();
  }, []);

  return (
    <section className="text-white font-sans min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-6xl p-4 md:p-8 overflow-hidden">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center hover:scale-150 duration-300 bg-gradient-to-tl from-indigo-600 to-fuchsia-600 text-transparent bg-clip-text">
          𝐂 𝐨 𝐝 𝐢 𝐧 𝐠 𝐏 𝐫 𝐨 𝐟 𝐢 𝐥 𝐞 𝐬
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GitHub Section */}
          <div
            className="shadow-md rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-white/10 border border-white/20"
            data-aos="fade-down-right"
          >
            <h3 className="text-2xl md:text-3xl text-blue-400 mb-6">𝐆𝐢𝐭𝐇𝐮𝐛</h3>
            <div>
              <img
                src="https://github-readme-stats.vercel.app/api?username=theshobhitsingh&show_icons=true&theme=radical&rank_icon=github&border_radius=10"
                alt="GitHub Stats"
                className="mx-auto mb-6"
              />
            </div>
          </div>

          {/* LeetCode Section */}
          <div
            className="shadow-md rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-white/10 border border-white/20"
            data-aos="fade-down"
          >
            <h3 className="text-2xl md:text-3xl text-orange-400 mb-6">𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞</h3>
            {leetcodeLoading ? (
              <p className="text-gray-400">𝙻𝚘𝚊𝚍𝚒𝚗𝚎 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞 𝙳𝚊𝚝𝚊...</p>
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
                  className="text-orange-400 hover:text-orange-700 cursor-pointer"
                >
                  Viʂiƚ 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞 𝙿𝚛𝚘𝚏𝚒𝚕𝚎
                </a>
              </div>
            ) : null}
          </div>

          {/* GeeksforGeeks Section */}
          <div
            className="shadow-md rounded-lg p-6 md:p-10 text-center backdrop-blur-sm bg-white/10 border border-white/20"
            data-aos="fade-down-left"
          >
            <h3 className="text-2xl md:text-3xl text-green-600 mb-6">𝐆𝐞𝐞𝐤𝐬𝐟𝐨𝐫𝐆𝐞𝐞𝐤𝐬</h3>
            {gfgLoading ? (
              <p className="text-gray-400">𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝐆𝐞𝐞𝐤𝐬𝐟𝐨𝐫𝐆𝐞𝐞𝐤𝐬 𝙳𝚊𝚝𝚊...</p>
            ) : gfgError ? (
              <p className="text-red-400">ɆⱤⱤØⱤ: {gfgError}</p>
            ) : gfgData ? (
              <div>
                <p className="text-gray-300 text-sm md:text-lg mt-4">
                  𝙏𝙤𝙩𝙖𝙡 𝙎𝙤𝙡𝙫𝙚𝙙: {gfgData.TotalProblemSolved}
                </p>
                <p className="text-pink-600 text-sm md:text-lg">
                𝘉𝘢𝘴𝘪𝘤 𝘚𝘰𝘭𝘷𝘦𝘥: {83}
                </p>
                <p className="text-indigo-600 text-sm md:text-lg">
                𝘚𝘤𝘩𝘰𝘰𝘭 𝘚𝘰𝘭𝘷𝘦𝘥: {20}
                </p>
                <p className="text-green-400 text-sm md:text-lg">
                  𝘌𝘢𝘴𝘺 𝘚𝘰𝘭𝘷𝘦𝘥: {121}
                </p>
                <p className="text-yellow-500 text-sm md:text-lg">
                  𝘔𝘦𝘥𝘪𝘶𝘮 𝘚𝘰𝘭𝘷𝘦𝘥: {97}
                </p>
                <p className="text-red-600 text-sm md:text-lg">
                  𝘏𝘢𝘳𝘥 𝘚𝘰𝘭𝘷𝘦𝘥: {17}
                </p>
                <a
                  href="https://www.geeksforgeeks.org/user/shobhit_singh_gfg/"
                  className="text-green-400 hover:text-green-800 cursor-pointer"
                >
                  𝗩𝗶𝘀𝗶𝘁 ⅁𝙛⅁ 𝗣𝗿𝗼𝗳𝗶𝗹𝗲
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
