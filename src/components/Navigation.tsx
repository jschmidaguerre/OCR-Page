'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (
    sectionId: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="sticky top-4 z-50 w-full flex justify-center">
      <header
        className={cn(
          "rounded-2xl py-1 transition-all duration-300 backdrop-blur-sm",
          scrolled
            ? "bg-blue-600/80 text-white shadow-lg border border-gray-200"
            : "bg-white/90 text-gray-900 border border-gray-200",
          isOpen && "rounded-3xl"
        )}
      >
        <nav className="flex items-center h-14 px-6 relative mx-auto max-w-screen-xl w-full">
          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-3 mx-auto">
            <a
              href="#home"
              onClick={(e) => scrollToSection("home", e)}
              className="py-1.5 rounded-full text-3xl font-bold mr-96"
            >
              spom
            </a>
            {/* <a
              href="#product"
              onClick={(e) => scrollToSection("product", e)}
              className="px-3 py-1.5 rounded-full text-lg transition-colors hover:bg-gray-100"
            >
              Producto
            </a> */}
            <a
              href="#usecases"
              onClick={(e) => scrollToSection("usecases", e)}
              className="px-3 py-1.5 rounded-full text-lg transition-colors hover:bg-gray-100"
            >
              Casos de uso
            </a>
            {/* <a
              href="#pricing"
              onClick={(e) => scrollToSection("pricing", e)}
              className="px-3 py-1.5 rounded-full text-lg transition-colors hover:bg-gray-100"
            >
              Precios
            </a> */}
          </div>

          {/* Botón y hamburguesa */}
          <div className="flex items-center ml-auto">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bautipriano@gmail.com&cc=juanseaguerre@gmail.com&su=Consulta%20de%20servicios&body=Hola%2C%0A%0AMe%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20%0A%0APor%20favor%20cont%C3%A1ctenme%20para%20coordinar%20una%20reuni%C3%B3n.%0A%0AGracias%2C%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#f38240] hover:bg-[#dd7335] text-lg rounded-lg ml-5"
              >
                Solicitar demo
              </Button>
            </a>

            <button
              className="md:hidden ml-4 p-1.5 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 pt-0">
            <div className="flex flex-col space-y-1">
              {/* <a
                href="#product"
                onClick={(e) => scrollToSection("product", e)}
                className="px-3 py-2 rounded-full text-base hover:bg-gray-100"
              >
                Producto
              </a> */}
              <a
                href="#usecases"
                onClick={(e) => scrollToSection("usecases", e)}
                className="px-3 py-2 rounded-full text-base hover:bg-gray-100"
              >
                Casos de uso
              </a>
              {/* <a
                href="#pricing"
                onClick={(e) => scrollToSection("pricing", e)}
                className="px-3 py-2 rounded-full text-base hover:bg-gray-100"
              >
                Precios
              </a> */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bautipriano@gmail.com&cc=juanseaguerre@gmail.com&su=Consulta%20de%20servicios&body=Hola%2C%0A%0AMe%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20%0A%0APor%20favor%20cont%C3%A1ctenme%20para%20coordinar%20una%20reuni%C3%B3n.%0A%0AGracias%2C%0A%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-full text-base hover:bg-gray-100"
              >
                Solicitar demo
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
