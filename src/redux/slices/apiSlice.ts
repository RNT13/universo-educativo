import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* ======================================================
   BASE QUERY
====================================================== */
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api/v1/',
  credentials: 'include'
})

/* ======================================================
   API SLICE
====================================================== */
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,

  tagTypes: ['Product', 'Order'],

  endpoints: builder => ({
    /* =============================
       PRODUCTS
    ============================== */

    getProducts: builder.query<Product[], void>({
      query: () => 'products/',
      providesTags: ['Product']
    }),

    getProduct: builder.query<Product, number>({
      query: id => `products/${id}/`,
      providesTags: ['Product']
    }),

    createProduct: builder.mutation({
      query: body => ({
        url: 'products/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Product']
    }),

    /* =============================
       ORDERS
    ============================== */

    getOrders: builder.query({
      query: () => 'orders/',
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: body => ({
        url: 'orders/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Order']
    }),

    /* =============================
       CHECKOUT STRIPE
    ============================== */

    createCheckout: builder.mutation({
      query: body => ({
        url: 'payments/checkout/',
        method: 'POST',
        body
      })
    }),

    /* =============================
       RESEND ACCESS
    ============================== */

    resendAccess: builder.mutation({
      query: body => ({
        url: 'access/resend-access/',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useGetOrdersQuery,
  useCreateOrderMutation,
  useCreateCheckoutMutation,
  useResendAccessMutation
} = apiSlice
