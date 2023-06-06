import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { GlobalContextProvider } from './Context/store';
import './globals.css';

export const metadata = {
  title: 'Manatime',
  description: 'Front-end test for Manatime'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-['Roboto'] bg-manatime_light_grey">
        <GlobalContextProvider>
          <Sidebar />
          <Navbar />
          <main>{children}</main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
