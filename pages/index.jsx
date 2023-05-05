import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Experience from '@/components/Experience/Experience'
import Career from '@/components/Career/Career'
import Info from '@/components/Info/Info'
import Projects from '@/components/Projects/Projects'
import Stack from '@/components/Stack/Stack'
import Footer from '@/components/Footer/Footer'
import Footer_end from '@/components/Footer_end/Footer_end'
import Testimony from '@/components/Testimony/Testimony'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Experience />
      <Info />
      <Projects />
      <Stack />
      {/* <Career /> */}
      <Header />
      {/* <Testimony /> */}
      <Footer />
    </>
  )
}
