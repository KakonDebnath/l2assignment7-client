import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Container from '@/components/container/Container';
import TestimonialItem, { TTestimonialItems } from './TestimonialItem';
import { useGetAllTestimonialsQuery } from '@/redux/features/testimonial/testimonialApi';


const TestimonialSection = () => {
  const { data: testimonialData, isLoading } =
    useGetAllTestimonialsQuery(undefined);
  console.log(testimonialData);
  return (
    <Container>
      <h2 className="text-center py-10">See All Top Donor</h2>
      {isLoading && <span>Loading...</span>}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          496: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonialData?.data?.map((testimonial: TTestimonialItems) => (
          <SwiperSlide style={{ padding: '20px' }} key={testimonial._id}>
            <TestimonialItem key={testimonial._id} items={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSection;
