import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md";
import { IProject } from "../type"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
const ProjectCard:FunctionComponent<{
    project:IProject;

}>= ({

project:{
    name,
    image_path,category,deployed_url,
    description,github_url,
    key_techs,
},


}) => {


        const [showDetial,setShowDetial] = useState(false);


 
    return (
        <div >
            
            
            
            <Image src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetial(true)}
            width="300"
            height = "150"
            layout="responsive"
            quality="100"/>
            {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetial(true)}/> */}

            <p className="my-2 text-center">{name}</p>



            {
                showDetial && (
            
            <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                <motion.div variants={stagger}
        initial="initial"
        animate="animate">

                    {/* <img src={image_path} alt={name}  /> 
                    */}
<motion.div variants={fadeInUp} >
<Image src={image_path} alt={name} 
            width="300"
            height = "150"
            layout="responsive"
            quality="100"/>

</motion.div>
                    <motion.div  
                    variants={fadeInUp}  className="flex justify-center my-4 space-x-3 ">
                        <a href={github_url} className="flex px-4 py-2 space-x-3 item-center">
                        <AiFillGithub/> <span>Github</span>

                        </a>

                        <a href={deployed_url} className="flex px-4 py-2 space-x-3 item-center">
                        <AiFillProject/> <span>Project</span>

                        </a>
                    </motion.div>
                
                
                
                
                
                
                
                
                
                
                
                
                </motion.div>
                <motion.div variants={stagger}   initial="initial"
        animate="animate">
                <motion.h2 variants={fadeInUp}className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                <motion.h3 variants={fadeInUp}className="mb-3 font-medium">{description}</motion.h3>
                <motion.div variants={fadeInUp}className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider ">
                    {
                        key_techs.map((tech)=> (<span key={tech}
                        
                        className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                        > 

                            {tech}
                        </span>))

                    }
                    </motion.div>
                </motion.div>

                    <button onClick={() => setShowDetial(false)}
                    className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                    
                    
                    >






                        <MdClose size={30} />
                    </button>



            </div>
                )}
        </div>
                
    );
};


export default ProjectCard