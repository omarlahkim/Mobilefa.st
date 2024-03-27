import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/'}),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: ({...body}: any) => ({
        url: 'dj-rest-auth/login/',
        method: 'POST',
        body: body,
      }),
    }),
    oauth2Login: builder.mutation<any, string>({
      query: name => `pokemon/${name}`,
    }),
    register: builder.query<any, string>({
      query: name => `pokemon/${name}`,
    }),
    logout: builder.query<any, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginMutation} = authApi;
