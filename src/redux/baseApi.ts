import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
export const baseApi = createApi({
    reducerPath: 'baseApi',
    
    // if your company uses fetchBaseQuery
    // baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:5000/api/v1",
    //     baseUrl: config.baseUrl,
    //     credentials: "include",
    // }),

        // if your company uses axios
    baseQuery: axiosBaseQuery(),
    endpoints: ()=>({}),
})