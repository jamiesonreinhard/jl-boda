import React, { useState } from "react";

const MobileNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/info', label: 'Last Minute Info' },
    { href: '/story', label: 'Story' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/registry', label: 'Registry' },
    { href: '/transportation', label: 'Transportation' },
    { href: '/accommodations', label: 'Accommodations' },
    { href: '/tepoztlan', label: 'Tepoztlan' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/rsvp', label: 'RSVP' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7baac8]"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Menu
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav;