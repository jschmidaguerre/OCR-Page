"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("en") // Estado inicial
  const t = useTranslations('DropdownMenuRadioGroupDemo')
  const router = useRouter()
  const pathname = usePathname()

  // Sincronizamos el estado con el idioma actual de la URL
  useEffect(() => {
    const currentLanguage = pathname.split("/")[1] || "en"
    setPosition(currentLanguage)
  }, [pathname]) // Ejecuta este efecto cada vez que la ruta cambia

  const handleValueChange = (value: string) => {
    if (value !== position) {
      setPosition(value) // Actualiza el estado
      router.push(`/${value}`) // Navega a la nueva ruta
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{t('select-language')}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('select-language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* RadioGroup con onValueChange para redirigir */}
        <DropdownMenuRadioGroup 
          value={position} 
          onValueChange={handleValueChange}
        >
          <DropdownMenuRadioItem value="en">
            {t('english')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="es">
            {t('spanish')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
