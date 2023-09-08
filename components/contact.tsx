"use client"

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
    const { ref } = useSectionInView('Contact');
  return (
    <motion.section ref={ref} id="contact" className='scroll-mt-28 mb-28 sm:mb-40 w-[min(100%, 38rem)] text-center'
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} viewport={{once: true}}>
        <SectionHeading>CONTACT ME</SectionHeading>
        <p className='text-gray-700 -mt-5'>You can contact me directly via <a className="underline" href="mailto:tobias-ahrens@hotmail.de">tobias-ahrens@hotmail.de</a> or using the form below.</p>
        <form className="mt-10 flex flex-col" action="">
            <input className='h-14 rounded-lg border border-black/[0.1] px-4' type="email" placeholder="Your E-Mail" required maxLength={100}/>
            <textarea className='h-52 my-3 rounded-lg border border-black/[0.1] p-4' placeholder="Your message" required maxLength={500}></textarea>
            <button className="group flex items-center justify-center gap-2 mt-5 ml-1 bg-gray-900 text-white rounded-full h-10 w-[8rem] outline-none transition-all  focus:scale-105 hover:scale-105 active:scale-100" type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
        </form>
    </motion.section>
  )
}
