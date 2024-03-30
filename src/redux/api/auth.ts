import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Platform} from 'react-native';

const BASE_URL_IOS = 'http://localhost:8000/';
const BASE_URL_ANDROID = 'http://10.0.2.2:8000/';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Platform.OS == 'ios' ? BASE_URL_IOS : BASE_URL_ANDROID,
  }),
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
