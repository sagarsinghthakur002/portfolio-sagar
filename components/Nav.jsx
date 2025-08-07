'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'My Projects' },
  { path: '/contact', label: 'Contact' },
];

const Nav = ({
  containerStyles = 'flex gap-6 items-center',
  linkStyles = 'text-gray-700 hover:text-black transition duration-200',
  underlineStyles = 'border-b-2 border-black pb-1 font-semibold',
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
            className={`${linkStyles} capitalize ${isActive ? underlineStyles : ''}`}
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
