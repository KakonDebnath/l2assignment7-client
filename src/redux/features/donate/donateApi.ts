import { baseApi } from '@/redux/api/baseApi';

const donateAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    leaderboard: builder.query({
      query: () => ({
        url: '/leaderboard',
      }),
    }),
    addDonate: builder.mutation({
      query: (donateData) => ({
        url: '/add-donate',
        method: 'POST',
        body: donateData,
      }),
    }),
  }),
});

export const { useLeaderboardQuery, useAddDonateMutation } = donateAPi;
