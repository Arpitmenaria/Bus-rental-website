// app/layout.js
import "./globals.css";
import WhatsAppFloating from "../components/WhatsAppFloating/WhatsAppFloating";

export const metadata = {
  title: "Bus Rental Service",
  description: "Premium bus and coach rental services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
