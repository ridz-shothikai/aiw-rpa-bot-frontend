// src/app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Home from '../app/home/page.js';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        
        <main>{children}</main>
        
      </body>
    </html>
  );
}
