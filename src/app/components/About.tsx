'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/active-section-context';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';

export default function About() {
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });

  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection('About');
  //   }
  // }, [inView, setActiveSection]);
  return (
    <motion.section
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      id='about'
    >
      <ActiveSectionObserver sectionName='About' threshold={0.75} />{' '}
      <SectionHeading> About me </SectionHeading>
      <p className=' mb-3'>
        I develop my own projects every day or study new frameworks and language
        possibilities.{' '}
        <span className='italic'>
          I can work as an independent unit in a team.
        </span>
        <span className='font-medium'>
          I know a lot-what, I do not know - I will find, what I will not find -
          I will competently ask colleagues.
        </span>{' '}
        <span className='underline'>
          Good team player. Results-oriented. Self-motivated.
        </span>
      </p>
    </motion.section>
  );
}
