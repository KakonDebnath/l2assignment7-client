import { TWinterClothesItem } from '@/pages/winterClothes/WinterClothesItem';


const WinterClothesCard = ({ post }: { post: TWinterClothesItem }) => {
  const {image, title, category, size } = post;


  return (
    <div className=" p-5 rounded overflow-hidden shadow-md hover:shadow-2xl transition-all">
      <img src={image} alt={title} className="w-full h-96 rounded-md" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Category: {category}</p>
        <p className="text-gray-700 text-base mb-2">Size: {size}</p>
      </div>
    </div>
  );
};

export default WinterClothesCard;
