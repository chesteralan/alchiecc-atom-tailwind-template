import Head from 'next/head'
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Statistics from '@/components/Statistics';
import Work from '@/components/Work';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Newsletter from '@/components/Newsletter';

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
        <Header />
        <Navbar />
        <Hero />
        <About />

        <Portfolio />
        <Clients />
        <Work />
        <Statistics />
        <Blog />
        <Contact />
        <Map />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}
