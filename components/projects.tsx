import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section>
        <SectionHeading>PROJECTS</SectionHeading>
    
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project{...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

