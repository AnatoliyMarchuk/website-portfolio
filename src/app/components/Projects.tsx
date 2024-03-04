'use client';
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';

export default function Projects() {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });

  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection('Projects');
  //   }
  // }, [inView, setActiveSection]);
  return (
    <section id='projects' className='scroll-m-28'>
      <ActiveSectionObserver sectionName='Projects' threshold={0.75} />
      <SectionHeading> my projects </SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
