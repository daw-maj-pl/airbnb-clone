import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from '@/app/providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb Clone',
  description:
    'A service that lets property owners rent out their spaces to travelers looking for a place to stay'
};

const font = Nunito({
  subsets: ['latin']
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
