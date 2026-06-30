import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-wide mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <Link to="/" className="text-white text-[15px] font-medium tracking-tight hover:opacity-80 transition-opacity">
            Arvind Mohanta
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[12px] text-white/80 hover:text-white transition-colors tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/arvindmohanta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/80 hover:text-white transition-colors tracking-tight"
            >
              LinkedIn
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/arvindmohanta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
