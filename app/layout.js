import "./globals.css";

export const metadata = {
  title: "Artistic Studio by Shahrukh Azhar",
  description:
    "Artistic Studio by Shahrukh Azhar — contemporary art, original artworks, collections and creative work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}