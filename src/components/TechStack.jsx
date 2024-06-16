import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./reusable/styles";
import { zoomIn ,zoomOut} from "./reusable/motion";
import { technologies } from "../data";


function TechStack() {

    const textVariants = zoomIn()

    const TechCard = ({ tech }) => {
        return <motion.div  className='techItem flex items-center'>
            <div className='flex flex-col items-center'>
                <img
                    src={tech.icon}
                    alt={tech.icon}
                    className='w-10 md:w-16 md:h-20 object-contain'
                />
                <span className='text- white mt-2'>{tech.name}</span>
            </div>
        </motion.div>

    }


    return (
        <div className=''>
            <motion.div variants={textVariants} initial="hidden"
                whileInView="show" className="mt-14 md:24">
                <p className={`${styles.sectionSubText} text-slate-300 text-center tracking-widest`}>
                    EXPERTISED
                </p>
                <h2 className={`${styles.sectionHeadText}  text-center`}>
                    Tech Stack
                </h2>
            </motion.div>
            <div className="gradient-border mx-5 md:mx-20 p-1 rounded mt-10">
                <div className="darkBackground p-3 py-10 md:p-10 text-white">

                    {
                        technologies.map(techstack => {
                            return <div className="mb-10 ">
                                <span className={`text-slate-300 text-center tracking-widest poppins-regular`}>{techstack.category.toUpperCase()}</span>
                                <div className="flex mt-5 flex-wrap gap-10">
                                    {
                                        techstack.list.map(tech => {
                                            return <TechCard tech={tech} />
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStack
