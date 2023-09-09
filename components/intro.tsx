"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick
    } = useActiveSectionContext()
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}}>
             <h1 className='text-4xl font-bold mb-10'>Personal Portfolio</h1>
        </motion.div>
        <div className='flex image-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween",duration: 0.2}}>
                    <Image src="/profileIMG.jpg" alt="profile picture of Tobi" width="192" height="192" quality="95" priority={true} className='rounded-full h-32 w-32 border-[0.35rem] border-white object-cover shadow-xl'/>
                </motion.div>
                
                <motion.span className=' absolute bottom-0 right-1 text-4xl' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.6}}>
                ✌️
                </motion.span>
            </div>
        </div>
        <motion.p className='mb-10 mt-10 text-2xl font-medium' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>
            <span className='font-bold'>Hi I'm Tobi</span>, an upcoming web developer with high interest in <span className='italic'>coding.</span> I love to learn new stuff and work with the latest <span className='underline'>technologies.</span>
        </motion.p>

        <motion.div className='flex gap-1 items-center justify-center px-4 font-medium text-lg' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}>
            <div className="flex flex-col sm:flex-row gap-1">
                <Link href="#contact" className='group bg-gray-900 text-white py-3 px-7 flex items-center gap-2 rounded-full mb-2 sm:mb-0 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100'
                
                onClick={() =>{
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
                >Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>
                <a href="/CV.pdf" download className='group bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 border dark:bg-white/10'>Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 ml-3 sm:ml-0">
                <a href="https://google.de" target="_blank" className='bg-white text-gray-700 p-4 mb-2 sm:mb-0 flex items-center gap-2 rounded-full border outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10 dark:text-white'><BsLinkedin /></a>
                <a href="https://google.de" target="_blank" className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10 dark:text-white'><BsGithub/></a>
            </div>
            
        </motion.div>
    </section>
  )
}
