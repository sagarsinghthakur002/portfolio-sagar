'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Nav = ({
  containerStyles = 'flex gap-8 items-center',
  linkStyles = 'relative text-gray-800 transition duration-300 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-black',
  underlineStyles = 'after:scale-x-100 text-black font-semibold',
}) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {Links.map((link, index) => {
        const isActive = path === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} ${isActive ? underlineStyles : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
