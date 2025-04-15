"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils" // Assuming you're using shadcn/ui which has this utility
import { useLocale } from "next-intl"
import Image from "next/image"

export default function Navigation() {
  const t = useTranslations('NavigationMenu');
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Track scroll position to add styles when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuOpen && !event.target.closest('.language-dropdown')) {
        setLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [languageMenuOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen)
  }

  const changeLanguage = (newLocale) => {
    // Assuming you have a route system that supports locale prefixes
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setLanguageMenuOpen(false);
  }

  return (
    <div className="sticky top-4 z-50 w-full flex justify-center ">
      {/* Language Dropdown as floating island */}
    
      <header 
        className={cn(
          "rounded-2xl py-1 transition-all duration-300 backdrop-blur-sm",
          scrolled 
            ? "bg-blue-600/80 text-white shadow-lg border border-gray-200" 
            : "bg-white/90 text-gray-900 borderborder-gray-200",
          isOpen && "rounded-3xl" // Expand when menu is open
        )}
      >
        <nav className="flex items-center h-14 px-6 relative mx-auto max-w-screen-xl w-full">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 mx-auto">
            <Link
              href="/product"
              className={cn(
                "py-1.5 rounded-full text-3xl font-bold mr-96"
              )}
            >
              spom
            </Link>

            <Link
              href="/product"
              className={cn(
                "px-3 py-1.5 rounded-full text-lg transition-colors",
                scrolled 
                  ? "hover:bg-white/20" 
                  : "hover:bg-gray-100"
              )}
            >
              {t('product')}
            </Link>
            <Link
              href="/#usecases"
              className={cn(
                "px-3 py-1.5 rounded-full text-lg transition-colors",
                scrolled 
                  ? "hover:bg-white/20" 
                  : "hover:bg-gray-100"
              )}
            >
              {t('use-cases')}
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "px-3 py-1.5 rounded-full text-lg transition-colors",
                scrolled 
                  ? "hover:bg-white/20" 
                  : "hover:bg-gray-100"
              )}
            >
              {t('pricing')}
            </Link>
          </div>

          {/* Request Demo & Mobile Menu */}
          <div className="flex items-center ml-auto">
            <Link href="/booking">
              <Button 
                size="lg" 
                className="bg-[#f38240] hover:bg-[#dd7335] text-lg rounded-lg ml-5"
              >
                {t('request-demo')}
              </Button>
            </Link>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className="md:hidden ml-4 p-1.5 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (inside the navbar) */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 pt-0">
            <div className="flex flex-col space-y-1">
              <Link
                href="/product"
                className={cn(
                  "px-3 py-2 rounded-full text-base transition-colors",
                  scrolled 
                    ? "hover:bg-white/20" 
                    : "hover:bg-gray-100"
                )}
                onClick={toggleMenu}
              >
                {t('product')}
              </Link>
              <Link
                href="/#usecases"
                className={cn(
                  "px-3 py-2 rounded-full text-base transition-colors",
                  scrolled 
                    ? "hover:bg-white/20" 
                    : "hover:bg-gray-100"
                )}
                onClick={toggleMenu}
              >
                {t('use-cases')}
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  "px-3 py-2 rounded-full text-base transition-colors", 
                  scrolled 
                    ? "hover:bg-white/20" 
                    : "hover:bg-gray-100"
                )}
                onClick={toggleMenu}
              >
                {t('pricing')}
              </Link>
            </div>
          </div>
        )}
      </header>

    </div>
  )
}