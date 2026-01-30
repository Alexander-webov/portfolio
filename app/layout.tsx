import "./globals.css";
import { manrope, unbounded } from "./fonts";
import "./styles/style.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${unbounded.variable}`}>
        <main className="fullpage snap"> {children}</main>
      </body>
    </html>
  );
}
