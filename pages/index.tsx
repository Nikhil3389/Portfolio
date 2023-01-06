import { GetServerSidePropsContext,GetStaticPropsContext,
  GetStaticProps , GetServerSideProps,NextPage } from 'next';
  import React from 'react'
  import ServiceCard from '../components/ServiceCard';
  import {services} from '../data';
  import { motion } from 'framer-motion';
  import { fadeInUp, routeAnimation, stagger } from '../animations';
  // import {Services } from "../type"
  
  const index = () => {
  
    return (

      <motion.div 
      variants={ routeAnimation}
      initial= "initial" 
       animate = "animate"
        className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>I am currently pursuing Bachelor of Technology  Degree(Second Year) in Computer Science Engineering from Lovely Professional University, Punjab. I am good at mathematics and problem-solving. Languages are known by me: Java, C, C++. | Coordinator @Developer Students Club-LPU | 5 stars in Python, 5 stars in C++ and 3 stars in C on HackerRank </h5>
     
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
      style={{marginLeft:'-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 text-xl font-bold tracking-wide'> What I Offer</h6>
        <motion.div 
        variants={stagger}
        initial="initial"
        animate="animate"
        className='grid gap-6 py-4 lg:grid-cols-2'>
          {services.map((service) => (
            <motion.div
            variants={fadeInUp}
            
            className='col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200'
           key={service.title}
            >
            <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
  
      </motion.div>
    )
  }
  
  export default index
  
  export const getServerSideProps = async (context:GetServerSidePropsContext) =>
  {
  
    const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
    const data = await res.json()
  
    return{
     props:{services: data.services,
    } ,  
  }
  }
  
  // export const getStaticProps = async (context:GetStaticPropsContext) =>
  // {
  
  //   const res = await fetch('http://localhost:3000/api/services')
  //   const data = await res.json()
  
  //   return{
  //    props:{services: data.services,
  //   } ,  
  // }
  // }
  
  
  
  
  
  // import Head from 'next/head'
  // import Image from 'next/image'
  // import styles from '../styles/Home.module.css'
  
  // export default function Home() {
  //   return (
  //     <div className={styles.container}>
  //       <Head>
  //         <title>Create Next App</title>
  //         <meta name="description" content="Generated by create next app" />
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>
  
  //       <main className={styles.main}>
  //         <h1 className={styles.title}>
  //           Welcome to <a href="https://nextjs.org">Next.js!</a>
  //         </h1>
  
  //         <p className={styles.description}>
  //           Get started by editing{' '}
  //           <code className={styles.code}>pages/index.js</code>
  //         </p>
  
  //         <div className={styles.grid}>
  //           <a href="https://nextjs.org/docs" className={styles.card}>
  //             <h2>Documentation &rarr;</h2>
  //             <p>Find in-depth information about Next.js features and API.</p>
  //           </a>
  
  //           <a href="https://nextjs.org/learn" className={styles.card}>
  //             <h2>Learn &rarr;</h2>
  //             <p>Learn about Next.js in an interactive course with quizzes!</p>
  //           </a>
  
  //           <a
  //             href="https://github.com/vercel/next.js/tree/canary/examples"
  //             className={styles.card}
  //           >
  //             <h2>Examples &rarr;</h2>
  //             <p>Discover and deploy boilerplate example Next.js projects.</p>
  //           </a>
  
  //           <a
  //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //             className={styles.card}
  //           >
  //             <h2>Deploy &rarr;</h2>
  //             <p>
  //               Instantly deploy your Next.js site to a public URL with Vercel.
  //             </p>
  //           </a>
  //         </div>
  //       </main>
  
  //       <footer className={styles.footer}>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Powered by{' '}
  //           <span className={styles.logo}>
  //             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //           </span>
  //         </a>
  //       </footer>
  //     </div>
  //   )
  // }
  
