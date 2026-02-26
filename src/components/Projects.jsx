import React,{useState} from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./reusable/styles";
import { projects } from "../data";
import { fadeIn, textVariant } from "./reusable/motion";

const ProjectCard = ({
    index,
    name,
    description,
    role,
    tags,
    image,
    link,
    source_code_link,
}) => {
    const primaryUrl = (link && link.trim()) ? link.trim() : (source_code_link && source_code_link.trim()) ? source_code_link.trim() : null;

    const cardContent = (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='h-[420px] p-5 rounded-2xl sm:w-[360px] w-full border border-gray-400 flex flex-col'
            style={{ background: "linear-gradient(rgba(17, 24, 39, 1),rgba(61, 91, 157, 1))" }}
        >
                <div className='mt-5 flex-1 flex flex-col'>
                    <p className='mt-2 text-secondary text-[14px]'>{role}</p>
                    <h3 className='text-white font-bold text-[24px] mt-1'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] line-clamp-4 flex-1'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 flex-shrink-0'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color} text-gray-400`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
        </Tilt>
    );

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="h-full flex">
            {primaryUrl ? (
                <a
                    href={primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer no-underline h-full w-full"
                >
                    {cardContent}
                </a>
            ) : (
                cardContent
            )}
        </motion.div>
    );
};

const Projects = () => {

    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className=' text-left mx-6 md:mx-20 mt-20'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}  tracking-widest text-slate-300`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex '>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-7 flex flex-wrap gap-7 items-stretch'>
                {projects.map((project, index) => {
                    if (!expanded && index > 5) return null;
                    return <ProjectCard key={`project-${index}`} index={index} {...project} />
                })}
            </div>

            <div className="text-right mt-5 ">
                <button
                    onClick={handleToggle}
                    className="custom-gradient-border text-white py-2 px-4 rounded-full ">
                    {expanded ? 'View Less' : 'View More'}
                </button>
            </div>
        </div>
    );
};

export default Projects;
