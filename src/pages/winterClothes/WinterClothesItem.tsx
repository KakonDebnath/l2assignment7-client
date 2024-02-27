import React from 'react';
import { Link } from 'react-router-dom';
export type TWinterClothesItem = {
  _id: string;
  title: string;
  category: string;
  size: string;
  image: string;
  description?: string;
};

type TWinterClothesCardProps = {
  item: TWinterClothesItem;
};

const WinterClothesItem: React.FC<TWinterClothesCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700 mb-2">{item.category}</p>
        <p className="text-gray-700 mb-2">Size: {item.size}</p>
        <Link
          to={`/winter-clothes/${item._id}`}
          className="text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WinterClothesItem;
