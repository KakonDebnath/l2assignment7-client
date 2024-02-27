import React from 'react';
import WinterClothesItem, { TWinterClothesItem } from './WinterClothesItem';
import { useGetAllClothesQuery } from '@/redux/features/clothes/clothesApi';


const WinterClothes: React.FC = () => {
  const { data, isLoading } = useGetAllClothesQuery(undefined);
  const winterClothesData: TWinterClothesItem[] = data?.data;
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">All Winter Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {isLoading && <span>Loading...</span>}
        {winterClothesData?.map((item) => (
          <WinterClothesItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WinterClothes;
