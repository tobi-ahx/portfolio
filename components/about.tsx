"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40' initial={{ y: -100, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{delay: 0.175}}>
        <SectionHeading>ABOUT ME</SectionHeading>
        <p className='mb-3'>
            This is the first one asdhasdhashfahsghadghsdghsdhfashfd ahsdfhasdh ahsdhasdh asdhas dhas dh
        </p>

        <p>
            this is the second one
        </p>
    </motion.section>
  )
}
