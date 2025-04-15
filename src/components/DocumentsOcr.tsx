"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronRight, FileText, ChevronDown, ArrowLeft, ArrowRight, MoreHorizontal } from "lucide-react"

// Datos simulados para cada tipo de documento
const DOCUMENT_DATA = {
  "MEDICAL RECORDS": {
    filename: "medical.pdf",
    color: "bg-blue-100",
    icon: "🏥",
    json: {
      patientName: "John Doe",
      dateOfBirth: "1985-03-15",
      visitDate: "2023-09-22",
      diagnosis: "Common cold",
      prescription: "Rest and fluids",
      followUp: "Only if symptoms persist after 7 days",
      doctorName: "Dr. Sarah Johnson",
      hospitalName: "City General Hospital",
    },
  },
  "INSURANCE CLAIMS": {
    filename: "claim.pdf",
    color: "bg-yellow-100",
    icon: "🔒",
    json: {
      claimNumber: "CLM-2023-45678",
      policyHolder: "Robert Smith",
      policyNumber: "POL-987654",
      dateOfIncident: "2023-06-15",
      claimAmount: 1250,
      claimType: "Auto",
      status: "Pending",
      adjuster: "Michael Brown",
      notes: "Waiting for repair estimate",
    },
  },
  "SHIPPING DOCUMENTS": {
    filename: "shipping.pdf",
    color: "bg-orange-100",
    icon: "🚢",
    json: {
      trackingNumber: "SHP-78901234",
      sender: "Acme Corporation",
      recipient: "Global Enterprises",
      origin: "New York, NY",
      destination: "Los Angeles, CA",
      shipDate: "2023-07-20",
      estimatedDelivery: "2023-07-23",
      weight: 12.5,
      contents: "Office supplies",
      service: "Express",
    },
  },
  LEASES: {
    filename: "lease.pdf",
    color: "bg-green-100",
    icon: "🏠",
    json: {
      tenantName: "Jane Smith",
      landlordName: "ACME Properties",
      startDate: "2023-08-01",
      endDate: "2024-07-31",
      monthlyRent: 1200,
      securityDeposit: 2400,
      leaseTerms: "No pets allowed. Rent due on the 1st of each month.",
      maintenanceResponsibilities: "Tenant responsible for minor repairs.",
    },
  },
  INVOICES: {
    filename: "doc.pdf",
    color: "bg-purple-100",
    icon: "💰",
    json: {
      date: "2023-07-01",
      items: [
        {
          price: 2,
          description: "cookies",
          quantity: 42,
          total: 84,
        },
      ],
      totalAmount: 184,
      currency: "USD",
    },
  },
}

export default function OCRViewer() {
  const [activeCategory, setActiveCategory] = useState<string>("INVOICES")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Lista de categorías para la navegación
  const categories = Object.keys(DOCUMENT_DATA)

  // Obtener los datos del documento activo
  const activeDocument = DOCUMENT_DATA[activeCategory as keyof typeof DOCUMENT_DATA]

  // Función para formatear el JSON con colores
  const formatJSON = (json: any) => {
    const jsonString = JSON.stringify(json, null, 2)

    return jsonString.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = "text-blue-500" // string
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-amber-700" // key
          } else {
            cls = "text-green-600" // string value
          }
        } else if (/true|false/.test(match)) {
          cls = "text-purple-600" // boolean
        } else if (/null/.test(match)) {
          cls = "text-gray-500" // null
        } else {
          cls = "text-orange-500" // number
        }
        return `<span class="${cls}">${match}</span>`
      },
    )
  }

  // Función para navegar a la izquierda
  const navigateLeft = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const categoryIndex = categories.indexOf(activeCategory)
    if (categoryIndex > 0) {
      setActiveCategory(categories[categoryIndex - 1])
    } else {
      setActiveCategory(categories[categories.length - 1])
    }

    setTimeout(() => setIsTransitioning(false), 300)
  }, [activeCategory, categories, isTransitioning])

  // Función para navegar a la derecha
  const navigateRight = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const categoryIndex = categories.indexOf(activeCategory)
    if (categoryIndex < categories.length - 1) {
      setActiveCategory(categories[categoryIndex + 1])
    } else {
      setActiveCategory(categories[0])
    }

    setTimeout(() => setIsTransitioning(false), 300)
  }, [activeCategory, categories, isTransitioning])

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateLeft()
      } else if (e.key === "ArrowRight") {
        navigateRight()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigateLeft, navigateRight])

  // Cerrar el menú móvil cuando se cambia de categoría
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <div className="mb-8 w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px] sm:h-[550px] md:h-[600px]">
      {/* Navegación superior con indicadores */}
      <div className="relative">
        <div className="flex justify-between items-center px-2 sm:px-4 py-2 border-b">
          <button
            onClick={navigateLeft}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Documento anterior"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>

          {/* Indicadores de punto para pantallas medianas y grandes */}
          <div className="hidden sm:flex space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeCategory === category ? "bg-green-600 w-4" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveCategory(category)}
                aria-label={`Ver ${category}`}
              />
            ))}
          </div>

          {/* Menú desplegable para móviles */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 text-xs font-medium"
            >
              {activeCategory} <ChevronDown className="w-3 h-3" />
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-3 py-2 text-xs ${
                      activeCategory === category ? "bg-green-50 text-green-600" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={navigateRight}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Siguiente documento"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Categoría actual - visible en pantallas medianas y grandes */}
        <div className="hidden sm:flex justify-center -mt-0.5">
          <div className="px-3 sm:px-4 py-1 bg-white text-xs sm:text-sm font-medium text-green-600 border border-green-600 rounded-b-lg">
            {activeCategory}
          </div>
        </div>
      </div>

      {/* Contenido principal - Área flexible que puede crecer */}
      <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
        {/* Contenedor para el documento - en móvil arriba, en desktop a la izquierda */}
       

        {/* JSON - Área que puede hacer scroll */}
        <div className="flex-1 p-3 sm:p-6 overflow-auto">
          <div className="border rounded-md relative shadow-sm hover:shadow transition-shadow duration-300 h-full flex flex-col">
            <div className="flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2 bg-gray-50 border-b">
              <span className="text-xs font-medium text-gray-500">JSON EXTRAÍDO</span>
            </div>
            <pre
              className="p-2 sm:p-4 text-xs sm:text-sm overflow-auto flex-1 font-mono"
              dangerouslySetInnerHTML={{
                __html: formatJSON(activeDocument.json),
              }}
            />
          </div>
        </div>
      </div>

      {/* Miniaturas de navegación - Posición fija en la parte inferior */}
      <div className="border-t px-3 sm:px-4 py-2 sm:py-3 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm font-medium text-gray-700">Documentos disponibles</span>
          <span className="text-xs text-gray-500">
            {categories.indexOf(activeCategory) + 1} de {categories.length}{" "}
            <span className="text-gray-400">(muestra)</span>
          </span>
        </div>
        <div className="relative mt-1 sm:mt-2">
          <div className="flex space-x-2 overflow-x-auto pb-2 pr-16">
            {categories.map((category) => {
              const doc = DOCUMENT_DATA[category as keyof typeof DOCUMENT_DATA]
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 flex flex-col items-center p-1 sm:p-2 rounded-lg transition-all ${
                    activeCategory === category ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${doc.color} rounded-md mb-1`}
                  >
                    <span className="text-xs sm:text-sm">{doc.icon}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 whitespace-nowrap">
                    {doc.filename}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

