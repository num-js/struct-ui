import { SITE_NAME } from './utils/websiteConstants';
import Image from 'next/image';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-border/80 pb-24 pt-6 xl:pb-6'>
      <div className='container mx-auto max-w-5xl px-4'>
        <div className='flex flex-col items-center justify-center gap-1.5 text-center'>
          <p className='flex items-end gap-1.5 text-balance text-sm font-medium text-foreground/90'>
            © {year} {SITE_NAME} |
            Built with
            <Image src="/images/num_heart.gif" width={26} height={26} aria-label='numan ahmed' alt="numan ahmed" />
          </p>
          <p className='text-balance text-xs text-muted-foreground'>
            UI components and patterns for React and Next.js applications.
          </p>
        </div>
      </div>
    </footer>
  );
};
