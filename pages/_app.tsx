import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';
import { animate, AnimatePresence } from 'framer-motion';



function MyApp({ Component, pageProps, router }) {






  return (
    <ThemeProvider attribute='class'>

    

  <div className="grid grid-cols-12 gap-6 px-8 lg:px-48 my-14 sm:p-20 md:px-32 ">
    
      <div className = "col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light shadow-custom-dark">
       <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light shadow-custom-dark">

          <Navbar/>
          <AnimatePresence>
          <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
      </ThemeProvider>
  );
  
}

export default MyApp
