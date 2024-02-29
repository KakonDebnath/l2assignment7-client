import { cn } from '@/lib/utils';
import { TWinterClothesItem } from '@/pages/winterClothes/WinterClothesItem';
import { ThemeContext } from '@/providers/ThemeProvider';
import { useContext } from 'react';

const WinterClothesCard = ({ post }: { post: TWinterClothesItem }) => {
  const { image, title, category, size } = post;
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={cn(
        'p-5 rounded overflow-hidden shadow-md hover:shadow-2xl transition-all',
        {
          'hover:border': themeContext?.theme === 'dark',
        }
      )}
    >
      <img src={image} alt={title} className="w-full h-96 rounded-md" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Category: {category}</p>
        <p className="text-gray-700 text-base mb-2 uppercase">
          Size: {size.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default WinterClothesCard;
