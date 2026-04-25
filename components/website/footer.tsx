import { Heart } from 'lucide-react';
import { SITE_NAME } from './utils/websiteConstants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-border/80 pb-24 pt-6 xl:pb-6'>
      <div className='container mx-auto max-w-5xl px-4'>
        <div className='flex flex-col items-center justify-center gap-1.5 text-center'>
          <p className='flex items-end gap-1.5 text-balance text-sm font-medium text-foreground/90'>
            © {year} {SITE_NAME} |
            Built with
            {/* <Heart className='size-3.5 shrink-0 text-rose-500/80' aria-label='care' /> */}
            <img src="https://numan-dev.web.app/images/num_heart.gif" width="26px" aria-label='care' alt="heart" />
          </p>
          <p className='text-balance text-xs text-muted-foreground'>
            UI components and patterns for React and Next.js applications.
          </p>
        </div>
      </div>
    </footer>
  );
};
