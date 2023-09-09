"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        }
    }
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');
  return (
    <section id="skills" ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>SKILLS</SectionHeading>
        <ul className='flex flex-wrap gap-2 justify-center text-gray-800 text-lg'>
            {
                skillsData.map((skill, index) => (
                    <motion.li key={index}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true
                    }}
                    custom={index}
                     className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-opacity-10 dark:border-white/5 dark:text-white/90'>{skill}</motion.li>
                ))}
        </ul>
    </section>
  )
}
