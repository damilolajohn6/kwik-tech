"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useMobileMenuStore, useUIStore } from "@/store";

export function Header() {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const { isOpen, toggle, close } = useMobileMenuStore();
  const { isScrolled, setIsScrolled } = useUIStore();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  // Close mobile menu on route change
  React.useEffect(() => {
    close();
  }, [pathname, close]);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const logoSrc = React.useMemo(() => {
    if (!mounted) return "/qwik-logo.png";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" 
      ? "/qwik-logo.png"
      : "/qwik-logo.png";
  }, [mounted, theme, resolvedTheme]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
            >
              {/* Logo Image with theme support */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                {/* Show both logos and hide based on theme for smooth transition */}
                <Image
                  src={logoSrc}
                  alt={SITE_CONFIG.name}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
                  )}
                  priority
                />
                <Image
                  src={logoSrc}
                  alt={SITE_CONFIG.name}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
                  )}
                  priority
                />
              </div>
              <span className="hidden sm:block">Qwik Multi Services</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-brand-500 bg-brand-500/10"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-tertiary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side - CTA & Theme Toggle */}
            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden md:flex" />
              <Button asChild className="hidden md:flex" size="sm">
                <Link href="/contact">Get a Quote</Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggle}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {/* Mobile Menu Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-20 h-20 mb-4"
              >
                <Image
                  src="/qwik-logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
                  )}
                />
                <Image
                  src="/qwik-logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
                  )}
                />
              </motion.div>

              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-500"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center gap-4 mt-8"
              >
                <ThemeToggle />
                <Button asChild size="lg">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
