import Link from "next/link";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-end py-8">
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};
export const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/courses", title: "Courses" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
];

export default Header;
