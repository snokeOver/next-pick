"use client";

import { useThemeStore } from "@/lib/store/store";
import Header from "./Header";

import { ThemeProvider } from "./ThemeProvider";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useThemeStore();

  console.log(theme);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={"light"}
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}

      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default MainLayout;
