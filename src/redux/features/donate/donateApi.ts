import { baseApi } from '@/redux/api/baseApi';

const donateAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    leaderboard: builder.query({
      query: () => ({
        url: '/leaderboard',
      }),
      providesTags: ['donateLeaderboard'],
    }),
    addDonate: builder.mutation({
      query: (donateData) => ({
        url: '/add-donate',
        method: 'POST',
        body: donateData,
      }),
      invalidatesTags: ['donateLeaderboard'],
    }),
  }),
});

export const { useLeaderboardQuery, useAddDonateMutation } = donateAPi;
