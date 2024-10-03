import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact App",
  description: "Contact App by Ferri Adi Prasetya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <main className='bg-white max-w-4xl mx-auto my-12 p-8 rounded-2xl shadow-md'>
          <h1 className='text-5xl text-center mb-8 font-semibold'>
            Contact App
          </h1>

          {children}
        </main>
      </body>
    </html>
  );
}

