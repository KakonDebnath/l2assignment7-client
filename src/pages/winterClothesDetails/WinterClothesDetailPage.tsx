import { useGetSingleClotheQuery } from '@/redux/features/clothes/clothesApi';
import { useParams } from 'react-router-dom';

const WinterClothesDetailPage: React.FC = () => {
  const { id } = useParams();
  let winterClothesItem;
  const { data, isLoading } = useGetSingleClotheQuery(id);

  if (data?.status === 200) {
    winterClothesItem = data.data;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!winterClothesItem) {
    return <div>Winter clothes item not found</div>;
  }

  const handleDonateNow = () => {
    console.log('Clicked Donate Now');
  };

  return (
    <div className="container mx-auto py-8">
      <h2>Winter Clothes Details Page</h2>
      <div className="flex items-center gap-10">
        <div className="max-w-xl ">
          <img
            src={winterClothesItem.image}
            alt={winterClothesItem.title}
            className="rounded-lg h-96"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{winterClothesItem.title}</h1>
          <p className="text-gray-700 mb-2">
            Category: {winterClothesItem.category}
          </p>
          <p className="text-gray-700 mb-2">Size: {winterClothesItem.size}</p>
          <p className="text-gray-700 mb-4">{winterClothesItem.description}</p>
          <button
            onClick={handleDonateNow}
            className="my-gradient text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinterClothesDetailPage;
