import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import { useContext } from 'react';

export type TAboutUsItemProps = {
  item: {
    _id: string;
    image: string;
    title: string;
    details: string;
  };
};

const AboutUsItem: React.FC<TAboutUsItemProps> = ({ item }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn(
        'p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl',
        {
          'border border-white bg-slate-800 bg-opacity-50':
            themeContext?.theme === 'dark',
        }
      )}
    >
      <div className="mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto rounded-md"
        />
      </div>
      <h3
        className={cn('text-xl font-bold mb-2 text-blue-600', {
          'text-[#38BDF8]': themeContext?.theme === 'dark',
        })}
      >
        {item.title}
      </h3>
      <p className="">{item.details}</p>
    </div>
  );
};

export default AboutUsItem;
