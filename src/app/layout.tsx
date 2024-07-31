import "../styles/globals.css";
import localFont from "next/font/local";
import Providers from "@/modules/providers";

const satoshi = localFont({
  src: [
    {
      path: '../../public/font/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Black.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={satoshi.className}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
