import { useContext } from 'react';
import { FormElementContext } from '.';
import { cn } from '@/lib/utils';

export const FormSection = ({ children }: { children: React.ReactNode }) => {
  const double = useContext(FormElementContext);
  return (
    <div
      className={cn('w-full p-3 grid grid-cols-1 justify-items-center gap-5', {
        'md:grid-cols-2': double,
      })}
    >
      {children}
    </div>
  );
};
