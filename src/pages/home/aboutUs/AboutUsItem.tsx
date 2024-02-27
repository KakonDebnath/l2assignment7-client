export type TAboutUsItemProps = {
  item: {
    _id: string;
    image: string;
    title: string;
    details: string;
  };
};

const AboutUsItem: React.FC<TAboutUsItemProps> = ({ item }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto rounded-md"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h3>
      <p className="text-gray-700">{item.details}</p>
    </div>
  );
};

export default AboutUsItem;
