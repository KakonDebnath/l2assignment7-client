import { baseApi } from '@/redux/api/baseApi';

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVolunteer: builder.query({
      query: () => ({
        url: '/volunteers',
      }),
    }),
    signUpVolunteer: builder.mutation({
      query: (volunteerData) => ({
        url: '/volunteer',
        method: 'POST',
        body: volunteerData,
      }),
    }),
  }),
});

export const { useGetAllVolunteerQuery, useSignUpVolunteerMutation } =
  volunteerApi;
