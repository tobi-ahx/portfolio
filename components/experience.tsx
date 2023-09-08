"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';

export default function Experience() {
    const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} id="experience" className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>EXPERIENCE</SectionHeading>
        <VerticalTimeline lineColor='' layout='2-columns'>
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                        
                        contentStyle={{
                            background: "#f4f5f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem", 
                            maxWidth: "52rem" 
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af"
                        }}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem"
                        }}>
                            <h3 className="font-semibold">{experience.title}</h3>
                            <p className="!text-gray-600 !text-[0.7rem] !mt-0">{experience.location}</p>
                            <p className="!text-gray-600">{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                    
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
