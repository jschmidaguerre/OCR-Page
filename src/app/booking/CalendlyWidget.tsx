// src/app/booking/CalendlyWidget.tsx
'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  locale?: string
}

// Le enseñamos a TS que window.Calendly existe y qué métodos tiene
declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void
    }
  }
}

export default function CalendlyWidget({ locale = 'es' }: CalendlyWidgetProps) {
  useEffect(() => {
    const scriptId = 'calendly-widget-script'

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.id = scriptId
      script.async = true
      document.head.appendChild(script)
    } else if (window.Calendly?.initInlineWidgets) {
      // Ya tipado, así no necesitamos @ts-expect-error
      window.Calendly.initInlineWidgets()
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={`https://calendly.com/tu-usuario/demo?locale=${locale}`}
      style={{ minWidth: '320px', height: '630px' }}
    />
  )
}
