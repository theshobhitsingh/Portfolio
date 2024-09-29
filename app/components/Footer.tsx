import React from "react";
import { FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-lg w-full text-center py-6 opacity-60">
      <p className="flex items-center justify-center">
        Ｍａｄｅ　ｗｉｔｈ &hearts; ｂｙ Ｓｈｏｂｈｉｔ　Ｓｉｎｇｈ 
        <span className="ml-2"> &copy; ２０２４ </span>
        <FaRocket className="ml-2 text-xl" />
      </p>
    </div>
  );
};

export default Footer;
