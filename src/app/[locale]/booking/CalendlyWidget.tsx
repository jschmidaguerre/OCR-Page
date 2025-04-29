// app/[locale]/booking/CalendlyWidget.tsx
'use client';

interface CalendlyWidgetProps {
  locale: string;
}

export default function CalendlyWidget({ locale }: CalendlyWidgetProps) {
  return (
    <div
      className="calendly-inline-widget"
      data-url={`https://calendly.com/tu-usuario/demo?locale=${locale}`}
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
}
