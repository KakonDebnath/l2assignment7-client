import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import { TContainer } from '@/types';
import { useContext } from 'react';

const Container = ({ children, className }: TContainer) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn(
        'w-full max-w-[1440px] mx-auto',
        {
          'bg-slate-100 bg-opacity-75 ': themeContext?.theme === 'light',
        },
        {
          'bg-[#0D1426] text-[#94A3B8]': themeContext?.theme === 'dark',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
