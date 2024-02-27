import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Container from '@/components/container/Container';
import TestimonialItem from './TestimonialItem';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Business Owner',
    message:
      "I'm so grateful for the opportunity to contribute to such a meaningful cause. Winter clothes are essential, and I'm glad to do my part to help those in need stay warm.",
    image: 'https://i.ibb.co/ZVbdWmV/pexels-julia-m-cameron-6995109.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Teacher',
    message:
      "Being able to donate winter clothes not only clears my closet but also warms my heart. It's wonderful to know that I'm making a difference in someone's life.",
    image: 'https://i.ibb.co/0fFCMFF/Picture-18.png',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    designation: 'Engineer',
    message:
      "Donating winter clothes has been a rewarding experience. It's heartwarming to know that my contribution is making a positive impact on someone's life during the cold season.",
    image: 'https://i.ibb.co/2nzLqVV/Picture-19.png',
  },
  {
    id: 4,
    name: 'Michael Smith',
    designation: 'Doctor',
    message:
      "Winter clothes donations are a small gesture that can make a big difference. It's important to help those in need stay warm and comfortable, especially during the colder months.",
    image: 'https://i.ibb.co/kyhT3MH/brooke-cagle-HRZUzo-X1e6w-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Emily Brown',
    designation: 'Artist',
    message:
      'I believe everyone deserves to stay warm during the winter. Donating winter clothes is a simple yet impactful way to help those who are less fortunate.',
    image:
      'https://i.ibb.co/hK9pXrT/abstral-official-cy-OKLSgkg-CE-unsplash.jpg',
  },
  {
    id: 6,
    name: 'David Wilson',
    designation: 'Software Engineer',
    message:
      "Winter clothes donations are a great way to give back to the community and support those in need. It's heartening to see the positive impact it has on people's lives.",
    image: 'https://i.ibb.co/fNGfxXf/istockphoto-1405522719-612x612.jpg',
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  return (
    <Container>
      <h2 className="text-center py-10">See All Top Donor</h2>
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialItem key={testimonial.id} items={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSection;
