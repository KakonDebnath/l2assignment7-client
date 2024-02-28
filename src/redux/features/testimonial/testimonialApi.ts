import { baseApi } from '@/redux/api/baseApi';

const testimonialAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllTestimonials: builder.query({
      query: () => ({
        url: '/testimonials',
      }),
    }),
    addTestimonial: builder.mutation({
      query: (testimonialData) => ({
        url: '/create-testimonial',
        method: 'POST',
        body: testimonialData,
      }),
    }),
  }),
});

export const { useGetAllTestimonialsQuery, useAddTestimonialMutation } =
  testimonialAPi;
