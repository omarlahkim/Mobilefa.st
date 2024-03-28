import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.24:8000/'}),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: ({...body}: any) => ({
        url: 'dj-rest-auth/login/',
        method: 'POST',
        body: body,
      }),
    }),
    oauth2Login: builder.mutation<any, any>({
      query: ({...body}: any) => ({
        url: `dj-rest-auth/${body.provider}/`,
        method: 'POST',
        body: body,
      }),
    }),
    register: builder.mutation<any, any>({
      query: ({...body}: any) => ({
        url: 'dj-rest-auth/registration/',
        method: 'POST',
        body: body,
      }),
    }),
    logout: builder.query<any, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginMutation, useOauth2LoginMutation, useRegisterMutation} =
  authApi;
