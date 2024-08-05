import Head from 'next/head';
// Css
import '../styles/globals.css';
// Components
import Layout from '../components/Layout'
import Transition from '../components/Transition'
// Router
import { useRouter } from 'next/router';
// Former Motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Farooq Aziz</title>
        <meta name="description" content="Sr. Front-End (React JS) Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
