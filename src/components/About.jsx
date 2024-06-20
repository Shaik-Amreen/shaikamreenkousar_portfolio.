// import React from 'react'
// import { motion } from 'framer-motion'
// function About() {
//     return (
//         <div className='md:h-screen px-5 md:px-20 lg:px-40 flex items-center '>
//             <div>
//                 <motion.h1 className='text-4xl'>About</motion.h1>
//                 <motion.h2>I am a Full Stack Developer at Infobell IT - AMD
//                      | MongoDB, Express.js, Angular, Node.js, React, React Native | 
//                      Crafting Innovative Solutions for Web and Mobile | Open to Collaborations and Exciting Projects.</motion.h2>
//                 <motion.h2>Let's work together to bring your ideas to life!</motion.h2>
//             </div>
//         </div>
//     )
// }

// export default About


import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./reusable/CursorBlinker";
import { slideIn } from "./reusable/motion";


export default function About() {
    const textIndex = useMotionValue(0);
    const texts = [
        " Full Stack Developer at Infobell IT - AMD.",
        " Freelancer.",
        " Ui Designer.",
        " SASS Developer.",
        " Founder of arikya.in.",
        " Frontend Developer .", " Backend Developer .", " React Developer .", " Node.js Developer .",
        " Angular Developer .", " React Native Developer.", " Web Developer.", " Mobile App Developer"
    ];




    const textVariants = slideIn("right")


    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);
    const [isPageFocused, setIsPageFocused] = useState(false);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPageFocused(document.visibilityState === 'visible');
        };

        window.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageFocused]);

    return <div className='curve shadow h-screen px-5 md:px-20 lg:px-40 items-center  flex ' >
        <div>
            <motion.h1 variants={textVariants} initial="hidden"
                whileInView="show" className="text-slate-300 text-xl poppins-regular tracking-widest">INTRODUCTION</motion.h1>
            <motion.h1 variants={textVariants} initial="hidden"
                whileInView="show" className='text-3xl md:text-6xl -mx-2 mt-5'>Overview.</motion.h1>
            <div className="mt-5 text-lg md:text-xl">
                Experienced Full Stack Developer with 3+ years of hands-on experience proficient in crafting robust and scalable WEB and MOBILE applications. Proven track record of thriving in collaborative team with an apt for adapting trending technologies to deliver top-notch solutions.
            </div>
            <div className="mt-10 text-center md:text-left">
                <div className="text-xl md:text-3xl pb-3">I'm a </div>
                <motion.span className="inline text-4xl poppins-semibold gradient-outline">{displayText}</motion.span>
                <CursorBlinker />
            </div>

            <br />

            <div className="text-lg md:text-4xl text-center md:text-left">
                Let's work together to bring your ideas to life !
            </div>        </div>
           
    </div>
}

