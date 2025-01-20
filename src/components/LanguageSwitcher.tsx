"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (locale: string) => {
    // If you store your locale in the first segment: /en..., /es...
    const segments = pathname.split("/");
    // segments[1] might be "en" or "es"
    segments[1] = locale;
    // Rebuild
    const newPath = segments.join("/");
    // Keep any query params
    const newSearch = searchParams ? `?${searchParams.toString()}` : "";

    router.push(newPath + newSearch);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}
