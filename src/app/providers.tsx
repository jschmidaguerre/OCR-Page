"use client";

import { ReactNode, FunctionComponent } from 'react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

// Define a type that includes children
interface ProvidersProps extends AppProps {
  children: ReactNode;
}

// Create a component that wraps the children
const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
}

// Export this component wrapped with `appWithTranslation`
export default appWithTranslation(Providers);
