import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';

import { cn } from '~/lib/utils';
import type { Layout } from '~/lib/types';

import { AppSidebar } from '~/modules/app-sidebar';
import { BackButton } from '~/modules/(buttons)/back-button';
import { CemeterySidebar } from '~/modules/cemetery-sidebar';

import { css } from './styles';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const Root: Layout = ({ children }) => (
  <html
    dir='ltr'
    lang='en'
    suppressHydrationWarning
    suppressContentEditableWarning
  >
    <body className={cn(poppins.variable, css.body)}>
      <AppSidebar />
      <CemeterySidebar />

      <main className={css.main}>
        <BackButton className={css.backButton} />
        {children}
        <Toaster
          richColors
          position='bottom-right'
        />
      </main>
    </body>
  </html>
);

export const metadata: Metadata = {
  title: 'Oak Tree Cemetery - Process Manager',
  description: 'Funeral Services Management System',
};

export default Root;
