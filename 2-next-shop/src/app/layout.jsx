import Header from "@/components/Header";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="p-5">
        <Header />
        <main> {children} </main>
      </body>
    </html>
  );
}
