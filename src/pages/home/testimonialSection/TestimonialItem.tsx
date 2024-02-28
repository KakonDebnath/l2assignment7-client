import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import { useContext } from 'react';

export type TTestimonialItems = {
  _id: string;
  email: string;
  name: string;
  designation: string;
  message: string;
  image: string;
};

const TestimonialItem = ({
  items,
  className,
}: {
  items: TTestimonialItems;
  className?: string;
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn(
        'hover:bg-gradient-to-r hover:from-[rgba(6,28,61,0.7)] hover:to-[rgba(6,28,61,1)] rounded-2xl p-10 pr-20 transition-all shadow-md',
        {
          'hover:border border-white': themeContext?.theme === 'dark',
        },
        {
          'hover:text-[#94A3B8]': themeContext?.theme === 'light',
        },
        className
      )}
    >
      <div className="flex items-center gap-3 roboto pb-5">
        <div
          className="rounded-full size-20 bg-red-400 bg-cover bg-center"
          style={{
            backgroundImage: `url("${items.image}")`,
          }}
        ></div>
        <div>
          <h5 className="text-2xl font-medium">{items.name}</h5>
          <p className="text-xl">{items.designation}</p>
        </div>
      </div>
      <p>{items.message}</p>
    </div>
  );
};

export default TestimonialItem;
