import { baseApi } from '@/redux/api/baseApi';

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunityPost: builder.query({
      query: () => ({
        url: '/community',
      }),
      providesTags: ['communityPost'],
    }),
    createCommunityPost: builder.mutation({
      query: (communityPostData) => ({
        url: '/community',
        method: 'POST',
        body: communityPostData,
      }),
      invalidatesTags: ['communityPost'],
    }),
  }),
});

export const { useGetAllCommunityPostQuery, useCreateCommunityPostMutation } =
  communityApi;
