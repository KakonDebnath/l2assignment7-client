import { baseApi } from '@/redux/api/baseApi';

const testimonialAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: () => ({
        url: '/testimonials',
      }),
      providesTags: ['testimonial'],
    }),
    addTestimonial: builder.mutation({
      query: (testimonialData) => ({
        url: '/create-testimonial',
        method: 'POST',
        body: testimonialData,
      }),
      invalidatesTags: ['testimonial'],
    }),
  }),
});

export const { useGetAllTestimonialsQuery, useAddTestimonialMutation } =
  testimonialAPi;
