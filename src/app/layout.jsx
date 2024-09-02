import "../styles/globals.css";
import Providers from "../components/providers/Providers";

export const metadata = {
  title: "AIW RPA BOT",
  description: "The AIW RPA BOT App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
