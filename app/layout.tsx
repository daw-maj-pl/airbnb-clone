import { Nunito } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: 'Airbnb Clone',
  description:
    'A service that lets property owners rent out their spaces to travelers looking for a place to stay'
};

const font = Nunito({
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
