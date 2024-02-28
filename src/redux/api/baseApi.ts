import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://l2-b2-frontend-path-assignment-7-server.vercel.app/api/v1',
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  
});


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['clothes'],
  endpoints: () => ({}),
});
