import { baseApi } from '@/redux/api/baseApi';

const peiChartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSuppliesData: builder.query({
      query: () => ({
        url: '/supplies',
      }),
    }),
  }),
});

export const {useGetAllSuppliesDataQuery} = peiChartApi;
