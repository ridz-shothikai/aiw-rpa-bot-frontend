// src/app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';

import { QueryClientProviderWrapper } from '../lib/QueryClientProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <QueryClientProviderWrapper>
        <main>{children}</main>
        </QueryClientProviderWrapper>
        
        
      </body>
    </html>
  );
}
