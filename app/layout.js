import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Cheap Copa Airlines Flights | Copahighfly",
  description: "Find exclusive deals on Copa Airlines booking, and make affordable reservations. Call Copahighfly for deals, and travel for less!",
  // robots: {
  //   index: false,
  //   follow: true, // set to false if you don't want search engines to follow links
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
