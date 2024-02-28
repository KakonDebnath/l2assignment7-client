import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
export type TWinterClothesItem = {
  _id: string;
  title: string;
  category: string;
  size: string[];
  image: string;
  description?: string;
};

type TWinterClothesCardProps = {
  item: TWinterClothesItem;
};

const WinterClothesItem: React.FC<TWinterClothesCardProps> = ({ item }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn('bg-white rounded-lg shadow-md overflow-hidden', {
        'border border-white bg-slate-800 bg-opacity-50':
          themeContext?.theme === 'dark',
      })}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700 mb-2">{item.category}</p>
        <p className="text-gray-700 mb-2 uppercase">Size: {item.size.join(', ')}</p>
        <Link
          to={`/winter-clothes/${item._id}`}
          className="text-[#38BDF8] hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WinterClothesItem;
