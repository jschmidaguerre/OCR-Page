"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// Optionally, use any icon library you prefer:
import { Menu, X } from "lucide-react"


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="border-b">
      <nav className="container relative mx-auto flex h-16 items-center px-4">
        {/* Logo + Desktop Links */}
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold">
            spom
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/product"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Product
            </a>
            <a
              href="/#usecases"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Use Cases
            </a>
            <a
              href="/pricing"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Request Demo (Right-aligned) */}
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/booking">
            <Button>Request demo</Button>
          </Link>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 z-50 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              <a
                href="/product"
                className="block text-gray-700 transition-colors hover:text-gray-900"
                onClick={toggleMenu}
              >
                Product
              </a>
              <a
                href="/#usecases"
                className="block text-gray-700 transition-colors hover:text-gray-900"
                onClick={toggleMenu}
              >
                Use Cases
              </a>
              <a
                href="/pricing"
                className="block text-gray-700 transition-colors hover:text-gray-900"
                onClick={toggleMenu}
              >
                Pricing
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
