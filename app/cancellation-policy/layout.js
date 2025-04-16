import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
    title: "Our Blogs | Copahighfly",
    description: "Read our informational blogs to get details on Copa Airlines services. Check out the policies in advance for a hassle-free experience.",
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
