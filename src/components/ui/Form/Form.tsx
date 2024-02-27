import { createContext } from 'react';
import { cn } from '@/lib/utils';

import { FieldValues, SubmitHandler } from 'react-hook-form';

export type TForm = {
  children: React.ReactNode;
  double?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
};

export const FormElementContext = createContext< boolean | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={double }>
      <form
        onSubmit={onSubmit}
        className={cn('border border-gray-500 rounded-md p-5 w-full mx-auto', {
          'max-w-5xl': double,
          'max-w-md': !double,
        })}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
