import { useGetAllAboutQuery } from '@/redux/features/aboutUs/aboutUsApi';
import AboutUsItem from './AboutUsItem';

type TAboutUs = {
  _id: string;
  image: string;
  title: string;
  details: string;
}

const AboutUsSection = () => {
  let allAboutData;
  const { data, isLoading } = useGetAllAboutQuery(undefined);
  if (data?.status === 200) {
    allAboutData = data.data;
  }
  if(isLoading){
    return <span>Loading...</span>
  }
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allAboutData?.map((item:TAboutUs) => (
            <AboutUsItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
