"use client";

import { InlineWidget } from 'react-calendly';

export default function CalendlyWidget() {
  return (
    <div className="mx-auto max-w-3xl">
      <InlineWidget
        url="https://calendly.com/juanseaguerre/30min"
        styles={{ height: '700px' }}
      />
    </div>
  );
}
