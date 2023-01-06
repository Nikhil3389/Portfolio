import {AiFillGithub,AiFillLinkedin,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import{SiHackerrank,SiLeetcode} from 'react-icons/si'
import{BiCodeAlt} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'
const Sidebar =() => {



    const {theme,setTheme} = useTheme();
    const changeTheme = () => {
        setTheme(theme==="light"?"dark":"light");

    };
    return(


        <div>
            <img src="./nikhil.jpeg"
             alt=" user " 
             className='w-32 h-32 mx-auto rounded-full'/>

             <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                 <span className='text-green'>Nikhil Kum</span>
                  ar Kataria</h3>
                 <p className='px-3 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
                     Full Stack Developer</p>
                 <a className='flex items-center justify-center px-3 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' href='/assets/Nikhil Kumar Kataria Resume.pdf' download='Nikhil Kumar Kataria Resume.pdf'>
                     <GiTie className="w-6 h-6"/>Download Resume
                     </a>
                 {/* Social icons */}
                <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                    <a href="https://www.hackerrank.com/nikhil3389">
                        <SiHackerrank className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="https://github.com/Nikhil3389">
                        <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikhil-kumar-kataria/">
                        <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="https://leetcode.com/Nikki3389/">
                        <SiLeetcode className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="https://www.codechef.com/users/nikhil_3388">
                        <BiCodeAlt className="w-8 h-8 cursor-pointer"/>
                    </a>
                    


                </div>
                 {/* address */}
                 <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
                     style={{marginLeft:'-1rem',marginRight: '-1rem'}}>
                     <div className='flex items-center justify-center space-x-2'>
                         <GoLocation/>
                         <span>Uttar Pradesh, India</span>
                     </div>
                     <p className='my-2 '>nikhil.12001995@lpu.in</p>
                     <p className='my-2 '>8299558302</p>
                 </div>
                 {/* email button
                  */}
                  <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' 
                  onClick={()=> window.open('mailto:nikhil.12001995@lpu.in')}
                  
                   
                  >
                      Email Me</button>
                  <button 
                  onClick={changeTheme}
                  
                  className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>

        </div>
    )
}

export default  Sidebar
