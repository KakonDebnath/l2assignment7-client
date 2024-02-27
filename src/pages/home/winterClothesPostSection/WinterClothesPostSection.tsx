import Container from '@/components/container/Container';
import WinterClothesList from './WinterClothesList';
import { Button } from '@/components/ui/button';
import { useGetAllClothesQuery } from '@/redux/features/clothes/clothesApi';
import { TWinterClothesItem } from '@/pages/winterClothes/WinterClothesItem';

const WinterClothesPostSection = () => {
  const { data, isLoading } = useGetAllClothesQuery(undefined);
  const clothesData: TWinterClothesItem[] = data?.data;

  return (
    <Container className="py-20">
      <h2 className="text-center py-10">View Latest Collection</h2>
      {isLoading && <span>Loading...</span>}
      <WinterClothesList posts={clothesData} />
      <div className="flex justify-center items-center py-10">
        <Button className="my-gradient">View All Clothes</Button>
      </div>
    </Container>
  );
};

export default WinterClothesPostSection;
