import React from "react";
import { FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-lg w-full text-center py-6 opacity-60">
      <p className="flex items-center justify-center">
      𝐶𝑟𝑎𝑓𝑡𝑒𝑑 𝑤𝑖𝑡ℎ &hearts;&nbsp; 𝑏𝑦 &nbsp;𝑺𝒉𝒐𝒃𝒉𝒊𝒕 𝑺𝒊𝒏𝒈𝒉
      </p>
      <p className="mt-2 flex items-center justify-center">
        <FaRocket className="mr-2 text-xl" />
        &copy;𝟸0𝟸5 
      </p>
    </div>
  );
};

export default Footer;
