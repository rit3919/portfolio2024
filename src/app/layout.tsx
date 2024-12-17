import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
    title: "RinTakagi Portfolio",
    description: "This page is a portfolio of Rin Takagi."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" href="./IMG_2573.PNG" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
