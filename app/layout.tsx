import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
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
        <Sidebar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
