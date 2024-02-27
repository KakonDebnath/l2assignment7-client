import { TWinterClothesItem } from '@/pages/winterClothes/WinterClothesItem';
import WinterClothesCard from './WinterClothesCard';

const WinterClothesList = ({ posts }: { posts: TWinterClothesItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts?.map((post) => (
        <WinterClothesCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default WinterClothesList;
