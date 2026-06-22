"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Palette } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Inicio", id: "inicio" },
    { href: "/sobre-mi", label: "Sobre Mí", id: "sobre-mi" },
    { href: "/portafolio", label: "Portafolio", id: "portafolio" },
    { href: "/contacto", label: "Contacto", id: "contacto" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} glass-container`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Palette className={styles.logoIcon} size={20} />
          <span className={styles.logoText}>
            Elizabeth <span className={styles.logoLastName}>Aquino Villeda</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.menuDesktop}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.menuMobile} ${isOpen ? styles.mobileOpen : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""}`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
