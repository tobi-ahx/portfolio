"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

import { useSectionInView } from '@/lib/hooks';


export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex image-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween",duration: 0.2}}>
                    <Image src="/500x500.jpeg" alt="profile picture of Tobi" width="192" height="192" quality="95" priority={true} className='rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl'/>
                </motion.div>
                
                <motion.span className=' absolute bottom-0 right-1 text-3xl' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.6}}>
                ✌️
                </motion.span>
            </div>
        </div>
        <motion.p className='mb-10 mt-4 text-2xl font-meduim sm:text-3xl' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>
            <span className='font-bold'>Hi I'm Tobi</span>, this text has to be updated <span className='italic'>but some</span> text should be here for <span className='underline'>testing.</span>
        </motion.p>

        <motion.div className='flex gap-1 items-center justify-center px-4 font-medium text-lg' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}>
            <div className="flex flex-col sm:flex-row gap-1">
                <Link href="#contact" className='group bg-gray-900 text-white py-3 px-7 flex items-center gap-2 rounded-full mb-2 sm:mb-0 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100'>Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>
                <a href="/CV.pdf" download className='group bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 border'>Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 ml-3 sm:ml-0">
                <a href="https://google.de" target="_blank" className='bg-white text-gray-700 p-4 mb-2 sm:mb-0 flex items-center gap-2 rounded-full border outline-none focus:scale-110 hover:scale-110 active:scale-105'><BsLinkedin /></a>
                <a href="https://google.de" target="_blank" className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border outline-none focus:scale-110 hover:scale-110 active:scale-105'><BsGithub/></a>
            </div>
            
        </motion.div>
    </section>
  )
}
