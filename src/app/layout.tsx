import '@/app/styles/global.css';
import Recoil from './components/Recoil';

export const metadata = {
  title: '29QUBE',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
