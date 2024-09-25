import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Ferramenta de busca IFPR",
  description: "Ferramenta de busca de projetos do IFPR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
