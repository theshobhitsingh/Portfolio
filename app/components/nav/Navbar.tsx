import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle'
import MobileNavDropdown from './MobileNavDropdown'

const Logo = ({ className }: { className?: string }) => {
  return (
    <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F174%2F755%2Flarge_2x%2Fletter-s-logo-s-letter-design-with-square-free-vector.jpg&f=1&nofb=1&ipt=8ce44ae71c9eb8f09e96a91b9cc0d6c22daacbbf850dc0e15f2834e389cb4463&ipo=images" className={`w-20 ${className}`} />
  )
}

export const navLinks = [
  {
    label: 'about',
    href: '/about',
    mobile: true
  },
  {
    label: 'portfolio',
    href: '/portfolio',
    mobile: true
  },
  {
    label: <Logo />,
    href: '/',
    mobile: false
  },
  {
    label: 'blog',
    href: '/blog',
    mobile: true
  }
]

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}><Link href={link.href}>{link.label}</Link></li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <Link href="/"><Logo className="md:hidden" /></Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar