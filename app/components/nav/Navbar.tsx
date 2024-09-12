import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";
import MobileNavDropdown from "./MobileNavDropdown";
// const Hello =  require("../../../public/logo.png")

const Logo = ({ className }: { className?: string }) => {
  return (
    // <Hello/>
    <img
      alt="Logo"
      src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/logo.png?raw=true"
      className={`w-20 bg-cover `}
    />
  );
};

export const navLinks = [
  {
    label: "𝐇𝐨𝐦𝐞",
    href: "/",
    mobile: true,
  },
  {
    label: "𝐀𝐛𝐨𝐮𝐭",
    href: "/about",
    mobile: true,
  },
  {
    label: "𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬",
    href: "/portfolio",
    mobile: true,
  },
  {
    label: <Logo />,
    href: "/",
    mobile: false,
  },
  {
    label: "𝐌𝐨𝐫𝐞",
    href: "/blog",
    mobile: true,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        {/* <Link href="/">
          <Logo className="md:hidden" />
        </Link> */}
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
