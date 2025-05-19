// src/app/product/page.tsx
import Navigation from "@/components/Navigation";
import ReclaimSection from "@/components/ReclaimSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-start justify-center gap-8 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Product Overview
            </h1>
            <p className="text-lg text-gray-700">
              This project is a web application that allows users to upload
              documents and process them using <strong>AWS Textract</strong> for
              OCR. Además implementa un <strong>LLM</strong> para estructurar la
              data en JSON limpio.
            </p>
            <div className="mt-6">
              <Link href="/booking">
                <Button>Book a Call</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/Wavy_Edu-01_Single-06.jpg"
              alt="OCR processing illustration"
              width={400}
              height={400}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </section>
      </div>
      <ReclaimSection />
    </main>
  );
}
