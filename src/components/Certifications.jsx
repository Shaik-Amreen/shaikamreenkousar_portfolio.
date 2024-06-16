import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./reusable/styles";
import { zoomIn, zoomOut } from "./reusable/motion";
import { certifications } from "../data";

function Certifications() {

    const textVariants = zoomIn()

    const CertificateCard = ({ certificate }) => {
        return <div className="w-36 md:flex-1">
            <a target="_blank" href={certificate.link}>
                <div className="relative text-center flex">
                    <img src={certificate.image} className="rounded " />
                    <div className="absolute bottom-0 py-2 text-center w-full bg-slate-800  opacity-90 items-center flex justify-center ">
                        <span className="text-sm opacity-0">{certificate.name}</span></div>
                    <div className="absolute bottom-0 py-2 text-center w-full  items-center flex justify-center ">
                        <span className="text-sm text-slate-50 ">{certificate.name}</span></div>
                </div>

            </a >
        </div >
    }



    return (
        <div className=' text-left mx-5 md:mx-20 '>
            <motion.div variants={textVariants} initial="hidden"
                whileInView="show" className="mt-14 md:mt-24">
                <h2 className={`${styles.sectionHeadText} text-left`}>
                    Certifications                </h2>


                <div className="py-5 flex flex-wrap gap-4 md:pb-14 items-center justify-between md:justify-start text-center">


                    {
                        certifications.map(certificate =>
                            <CertificateCard certificate={certificate} />
                        )
                    }




                </div>

            </motion.div>




        </div>
    )
}

export default Certifications
