"use client";
import React from "react";
import Link from "next/link";
import { colors } from "../styles/colors";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

interface NavLinkProps {
  name: string;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Contribute", path: "/contribute" },
  ];

  const NavLink: React.FC<NavLinkProps> = ({ name, path }) => (
    <Link
      href={path}
      style={currentPage === path.replace("/", "")
        ? { background: colors.primary, color: "#fff", boxShadow: "0 2px 8px rgba(79,70,229,0.15)" }
        : { color: colors.text, background: colors.background }
      }
      className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out ${currentPage === path.replace("/", "") ? "hover:bg-indigo-700" : "hover:text-indigo-600 hover:bg-gray-100"}`}
    >
      {name}
    </Link>
  );

  return (
    <header style={{ background: colors.background, borderBottom: `1px solid ${colors.lightText}` }} className="shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div style={{ color: colors.text }} className="text-2xl font-extrabold tracking-tight">
              <span style={{ color: colors.primary }}>TCBS</span>-CLI
            </div>
          </div>
          {/* Navigation Links (Desktop) */}
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-4">
            {navItems.map(item => (
              <NavLink key={item.path} {...item} />
            ))}
            <a 
              href="https://github.com/TechCraft-By-Subrata/tcbs-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: colors.text, borderColor: colors.lightText }}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out border"
            >
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Repository
              </span>
            </a>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <nav className="flex sm:hidden gap-2 overflow-x-auto py-2">
          {navItems.map(item => (
            <NavLink key={item.path} {...item} />
          ))}
          <a 
            href="https://github.com/TechCraft-By-Subrata/tcbs-cli" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: colors.text, borderColor: colors.lightText }}
            className="px-3 py-2 rounded-lg text-sm font-medium hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out border whitespace-nowrap"
          >
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              Repository
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
