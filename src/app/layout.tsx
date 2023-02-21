"use client";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ThemeProvider attribute="class" defaultTheme={"system"}>
          <Header>{children}</Header>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
