import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./reusable/styles";
import { experiences } from "../data"
import { zoomIn } from "./reusable/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "linear-gradient( rgba(61, 91, 157, 1), rgba(17, 24, 39, 1))",
                color: "#fff",
            }}

            // contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: "whiteSmoke", }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] poppins-semibold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold text-slate-300'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul> */}
        </VerticalTimelineElement>
    );
};


function WorkExperience() {

    const textVariants = zoomIn()

    return (
        <>
            <motion.div variants={textVariants} initial="hidden"
                whileInView="show" className="mt-24">
                <p className={`${styles.sectionSubText} text-center tracking-widest text-slate-300 `}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText}  text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline
                    lineColor="linear-gradient( white,rgba(61, 91, 157, 1), rgba(17, 24, 39, 1))">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default WorkExperience
