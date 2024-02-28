import { baseApi } from '@/redux/api/baseApi';

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunityPost: builder.query({
      query: () => ({
        url: '/community',
      }),
    }),
    createCommunityPost: builder.mutation({
      query: (communityPostData) => ({
        url: '/community',
        method: 'POST',
        body: communityPostData,
      }),
    }),
  }),
});

export const { useGetAllCommunityPostQuery, useCreateCommunityPostMutation } =
  communityApi;
