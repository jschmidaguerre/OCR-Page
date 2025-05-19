'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default function DropdownMenuDemo() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menú</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Secciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a
          href="#home"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpen(false)}
        >
          Inicio
        </a>
        <a
          href="#product"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpen(false)}
        >
          Producto
        </a>
        <a
          href="#usecases"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpen(false)}
        >
          Casos de uso
        </a>
        <a
          href="#pricing"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpen(false)}
        >
          Precios
        </a>
        <a
          href="#contacto"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpen(false)}
        >
          Contacto
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
