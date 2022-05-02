import {useRef} from 'react'

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

function MyApp({Component, pageProps}: AppProps) {
  const {current: queryClient} = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 600000,
          cacheTime: 900000,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
      },
    }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
