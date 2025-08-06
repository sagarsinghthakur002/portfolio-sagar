'use client'; // if using in app/ directory

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'My Projects' },
  { path: '/contact', label: 'Contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${linkStyles} capitalize ${path === link.path ? underlineStyles : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
