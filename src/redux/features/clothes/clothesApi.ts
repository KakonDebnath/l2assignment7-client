import { baseApi } from '../../api/baseApi';

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClothes: builder.query({
      query: () => ({
        url: '/clothes',
        method: 'GET',
      }),
    }),
    getClothesByUser: builder.query({
      query: (email) => ({
        url: `/clothes-by-user/${email}`,
        method: 'GET',
      }),
      providesTags: ['clothes'],
    }),
    createClothes: builder.mutation({
      query: (clothesData) => ({
        url: '/create-clothes',
        method: 'POST',
        body: clothesData,
      }),
      invalidatesTags: ['clothes'],
    }),

    getSingleClothe: builder.query({
      query: (id) => {
        return {
          url: `/clothes/${id}`,
          method: 'GET',
        };
      },
    }),
    updateClothes: builder.mutation({
      query: (updateData) => {
        console.log(updateData);
        return {
          url: `/update-clothes/${updateData.id}`,
          method: 'PUT',
          body: updateData,
        };
      },
      invalidatesTags: ['clothes'],
    }),
    deleteClothes: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-clothes/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['clothes'],
    }),
  }),
});

export const {
  useCreateClothesMutation,
  useGetAllClothesQuery,
  useGetClothesByUserQuery,
  useGetSingleClotheQuery,
  useUpdateClothesMutation,
  useDeleteClothesMutation,
} = clothesApi;
