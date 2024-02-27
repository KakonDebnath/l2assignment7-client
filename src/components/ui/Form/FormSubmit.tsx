import { useContext } from 'react';
import { FormElementContext } from '.';
import { cn } from '@/lib/utils';
import { Button } from '../button';

export const FormSubmit = ({ children }: { children: React.ReactNode }) => {
  const double = useContext(FormElementContext);
  return (
    <div
      className={cn('flex justify-end w-full max-w-md', {
        'md:col-start-2': double,
      })}
    >
      <Button
        className={cn('w-full', {
          'md:w-fit': double,
        })}
        type="submit"
      >
        {children}
      </Button>
    </div>
  );
};
