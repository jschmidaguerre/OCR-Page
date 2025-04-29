import Navigation from "@/components/Navigation";
import ReclaimSection from "@/components/ReclaimSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routing } from "@/i18n/routing"; // 👈 Importar locales para exportar rutas
import Image from 'next/image';

// 👇 Esta función es requerida para rutas dinámicas con export estático
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default function ProductPage() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-start justify-center gap-8 md:flex-row md:items-center">
          {/* Left: Text Description */}
          <div className="md:w-1/2">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Product Overview
            </h1>
            <p className="text-lg text-gray-700">
              This project is a web application that allows users to upload
              documents and process them using <strong>AWS Textract</strong> for
              Optical Character Recognition (OCR). Additionally, it implements a
              <strong> Large Scale Language Model (LLM)</strong> to improve the
              accuracy and processing of the extracted information, providing key
              data in clean and structured JSON format.
            </p>
            <div className="mt-6">
              <Link href="/booking">
                <Button>Book a Call</Button>
              </Link>
            </div>
          </div>

          {/* Right: OCR Image */}
          <div className="flex justify-center md:w-1/2">
          <Image
              src="/Wavy_Edu-01_Single-06.jpg"
              alt="OCR processing illustration"
              width={400} // o el tamaño real de tu imagen
              height={400} // lo mismo
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </section>
      </div>
      <ReclaimSection />
    </main>
  );
}
