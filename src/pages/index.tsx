import type {NextPage} from 'next'
import Head from 'next/head'
import {useQuery} from 'react-query'

import ListTest from '@components/ListTest'

async function getData() {
  return fetch('https://fakestoreapi.com/products').then(res => res.json())
}

const Home: NextPage = () => {
  const {data, isLoading, isFetching} = useQuery('dataX', getData)

  console.log({data, isLoading, isFetching})

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center lg:text-left">
        <ListTest items={data} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Footer
      </footer>
    </div>
  )
}

export default Home
