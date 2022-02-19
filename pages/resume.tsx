import Bar from "../components/Bar"
import { languages, tools } from "../data"
import {motion} from 'framer-motion'
import { fadeInUp, routeAnimation } from "../animations"
const resume = () => {



  const variants = {
    initial: {

        opacity:0,
        y: 60,
    },

    animate: {
      opacity:1,
      y:0,
        
         
    },
};
    return (
      <motion.div 
      variants={ routeAnimation}
      initial= "initial " 
       animate = "animate"
      className='px-4 py-2'>
        <div className="grid gap-6 md:grid-cols-2">


          <motion.div  variants={variants}
        initial ="initial"
        animate="animate">


            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>

              <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
              <p className="font-semibold">Lovely Professional University,Punjab(2020-2024)</p>
              <p className="my-3">
                I am Currently pursuing Bachelor of Technology in Computer Science Engineering from Lovely Professional University, Punjab.
              </p>
            </div>
          </motion.div>
          <motion.div  variants={variants}
        initial ="initial"
        animate="animate ">


                <h5 className="my-3 text-2xl font-bold">Experience</h5>
                <div>

                  <h5 className="my-2 text-xl font-bold">Full Stack Intern</h5>
                  <p className="font-semibold">Two Waits(Feb 2022-currently)</p>
                  <p className="my-3">
                    Remote
                  </p>
                </div>
                </motion.div>



        </div>


        <div className="grid gap-6 md:grid-cols-2 ">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages</h5>
            <div className="my-2">
              {
                languages.map(Language=><Bar data={Language} key={Language.name}/>)
              }
            </div>
          </div>

          <div>
            <br />
            <br/>
            
            {/* <h5 className="my-3 text-2xl font-bold">Languages</h5> */}
            <div className="my-2">
              {
                tools.map(tool=><Bar data={tool} key={tool.name}/>)
              }
            </div>
          </div>
          


        </div>




      </motion.div>
    )
}
export default resume