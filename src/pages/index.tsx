import Head from 'next/head'
import RawTemplate from './raw'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alchie Tagudin</title>
        <meta name="description" content="Alchie Tagudin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RawTemplate />
      </main>
    </>
  )
}
