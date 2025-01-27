"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers Component
 * Wraps the application with the ThemeProvider component that provides theme context to entire application.
 *
 * @param {React.ReactNode} children - The components to be wrapped by the provider.
 */

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // Defaults to the system's theme preference.
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
