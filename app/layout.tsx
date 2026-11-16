import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: '青楓館高等学院 AI部',
  description: '青楓館高等学院 AI部の活動紹介',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
