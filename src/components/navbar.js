import Link from 'next/link'
import MobileNav from './mobile-navbar'

const links = [
    { href: '/', label: 'Home' },
    { href: '/info', label: 'Final Info' },
    { href: '/story', label: 'Story' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/registry', label: 'Registry' },
    { href: '/transportation', label: 'Transportation' },
    { href: '/accommodations', label: 'Hotels' },
    { href: '/tepoztlan', label: 'Tepoztlan' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/rsvp', label: 'RSVP' },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-[100] gap-4">
        <Link href="/" className="font-semibold hidden xl:block cursive text-[30px]">
          Boda de Leslie y Jamieson
        </Link>
        <Link href="/" className="font-semibold block xl:hidden cursive text-[30px]">
          L & J
        </Link>
        <div className='block xl:hidden'>
          <MobileNav />
        </div>
        <div className="hidden xl:flex space-x-4">
            {links?.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out whitespace-nowrap
                    px-[8px] py-[4px] rounded-[8px] flex items-center ${link.href === "/info" ? "bg-[#fe8cec]" : "bg-[#7baac8]"}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar;