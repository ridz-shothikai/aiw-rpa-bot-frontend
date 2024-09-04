import "../styles/globals.css";
import Providers from "../components/providers/Providers";

export const metadata = {
  title: "Dotech RPA BOT",
  description: "Dotech RPA BOT",
  icons: {
    icon: ['/favicon.ico?v=4'],
    shortcut: ['/favicon.ico?v=4']
  },
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
