'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <>
      <section
        id='skills'
        className='max-[53rem] my-24 scroll-mt-28 text-center sm:mb-40'
      >
        <ActiveSectionObserver sectionName='Skills' threshold={1} />
        <SectionHeading> My skills</SectionHeading>

        <ul className=' flex max-w-2xl flex-wrap justify-center gap-2 text-lg text-black/80'>
          {skillsData.map((skills, index) => (
            <motion.li
              className=' borderBlack rounded-full border bg-white p-2 shadow-lg dark:bg-white/10 dark:text-white/70 '
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skills}
            </motion.li>
          ))}
        </ul>

        {/* <div>
          <div className='text-center font-semibold text-gray-400'>
            State manager
          </div>
          <div className='rounded-md border border-red-500'>Redux</div>
        </div>
        <div className=''>
          <div className=''>Version Control System</div>
          <div className=''>GIT</div>
        </div>
        <div className=''>
          <div className=''>Languages</div>
          <ul>
            <li>English: B1 Intermediate </li>
            <li>Ukrainian: Native</li>
          </ul>
        </div>
        <div className=''>
          <div className=''>Hobbies</div>
          <div>Active Sports and Recreation</div>
        </div> */}
      </section>
    </>
  );
}
// from: 'Contact Form <onboarding@resend.com>',
// to: 'fizrukmalnvk@gmail.com',
// subject: 'Message from contact form',
// reply_to: email,
// text: 'Message from contact form'
