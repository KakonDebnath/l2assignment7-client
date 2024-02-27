import { baseApi } from '../../api/baseApi';

const aboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAbout: builder.query({
      query: () => ({
        url: '/aboutUs',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllAboutQuery } = aboutUsApi;
