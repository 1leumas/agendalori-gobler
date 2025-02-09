import "./globals.css";
import { Providers } from "./providers";
import 'dayjs/locale/pt-br';

export const metadata = {
  title: "Gobler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
