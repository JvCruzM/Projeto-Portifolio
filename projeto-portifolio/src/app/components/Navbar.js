"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Acadêmico', path: '/academico' },
    { name: 'Profissional', path: '/profissional' },
    { name: 'Projetos', path: '/projetos' },
  ];

  return (
    <nav className="p-6 bg-[#0a0a0a] border-b border-purple-900/30 shadow-md">
      <ul className="flex gap-6 justify-center text-lg font-semibold flex-wrap">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          
          return (
            <li key={link.name}>
              <Link 
                href={link.path} 
                className={`transition-all duration-300 pb-1 border-b-2 ${
                  isActive 
                    ? 'text-purple-500 border-purple-500'
                    : 'text-gray-400 border-transparent hover:text-green-400'
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}