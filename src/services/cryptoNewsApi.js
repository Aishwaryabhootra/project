import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
  'X-RapidAPI-Key': '400ee99105msh560bd5ceef9b85cp1a544ajsnf2edfe2563fa'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: (category) => createRequest(`/search?q=${category.type}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${category.count}`),
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;