// src/app/booking/CalendlyWidget.tsx
'use client';

import { useEffect } from "react";

interface CalendlyWidgetProps {
  locale?: string;
}

export default function CalendlyWidget({ locale = "es" }: CalendlyWidgetProps) {
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.id = scriptId;
      s.async = true;
      document.head.appendChild(s);
    } else {
      // si ya existe, forzamos la inicialización de cualquier widget nuevo
      // @ts-expect-error
      window.Calendly?.initInlineWidgets()
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={`https://calendly.com/tu-usuario/demo?locale=${locale}`}
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
}
