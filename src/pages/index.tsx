import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

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

        <Blog />

        <Footer />
      </main>
    </>
  );
}
