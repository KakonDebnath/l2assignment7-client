import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const images = [
  'https://i.ibb.co/2SjTgVJ/cd6.jpg',
  'https://i.ibb.co/n0WbKfC/cd5.jpg',
  'https://i.ibb.co/p2nb75Q/cd1.jpg',
  'https://i.ibb.co/p0wMRRt/cd7.webp',
  'https://i.ibb.co/VwNFRbS/cd2.jpg',
  'https://i.ibb.co/NsZK2FR/cd4.jpg',
  'https://i.ibb.co/6XywbVJ/cd3.jpg',
  'https://i.ibb.co/ZVbdWmV/pexels-julia-m-cameron-6995109.jpg',
];

const GallerySection = () => {
  return (
    <>
      <h2>Our Gallery</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-cover bg-center"
              // style={{
              //   backgroundImage: `url("${image}")`,
              // }}
            >
              <img src={image} className="w-full h-[700px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GallerySection;
