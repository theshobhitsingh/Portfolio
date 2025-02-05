import React from "react";
import { FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-lg w-full text-center py-6 opacity-60">
      <p className="flex items-center justify-center">
        𝙲𝚛𝚊𝚏𝚝𝚎𝚍&nbsp;𝚠𝚒𝚝𝚑&nbsp;&hearts;&nbsp; 𝚋𝚢 &nbsp;𝚂𝚑𝚘𝚋𝚑𝚒𝚝 &nbsp;𝚂𝚒𝚗𝚐𝚑
      </p>
      <p className="mt-2 flex items-center justify-center">
        <FaRocket className="mr-2 text-xl" />
        &copy; ②⓪②⑤
      </p>
    </div>
  );
};

export default Footer;
