'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import profilePic from '@/assets/images/ava_dou.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BsFillArrowRightCircleFill,
  BsArrowDownCircle,
  BsLinkedin,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });

  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection('Home');
  //   }
  // }, [inView, setActiveSection]);

  return (
    <section className='m-w-[50rem] mb-28 text-center'>
      <ActiveSectionObserver sectionName='Home' threshold={0.5} />
      <div
        className='flex items-center
      justify-center
      '
      >
        {' '}
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'twenty',
              stiffness: 125,
            }}
          >
            <Image
              src={profilePic}
              alt='Picture of the author'
              width={300}
              height={300}
              quality={95}
              priority={true}
              className='h-36 w-36 rounded-xl border-[0.20rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-3xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb -10  sm: pt-4 text-2xl text-4xl font-medium leading-[1.5] '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className='font-bold'>Hello, I&apos;m Anatolii.</span>{' '}
        <span>
          I&apos;m <span className='font-bold'>front-end developer.</span> {''}I
          enjoy building <span className='italic'>sites & apps.</span> My focus
          is <span className='italic underline'>React(Next.js) </span>
        </span>
      </motion.p>
      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 py-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href='#contact'
          className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {' '}
          Contact me here{' '}
          <BsFillArrowRightCircleFill className='group-hover: translate-x-1 opacity-70 transition' />
        </Link>
        <a
          className='borderBlack group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/80'
          href='/CV.pdf'
          download
        >
          {' '}
          Download CV{' '}
          <BsArrowDownCircle className='group-hover: translate-y-1 opacity-60 transition' />
        </a>
        <a
          className=' borderBlack flex cursor-pointer items-center gap-3  rounded-full  bg-white p-4 text-gray-700 outline-none transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/80'
          href='https://www.linkedin.com/in/anatolii-marchuk-249b83215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwKakUJ2eSoCuIarjZ0Rskw%3D%3D'
          target='_blank'
        >
          {' '}
          <BsLinkedin />{' '}
        </a>
        <a
          className='flex cursor-pointer items-center gap-3 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/80'
          href='https://github.com/AnatoliyMarchuk'
          target='_blank'
        >
          {' '}
          <FaGithub />{' '}
        </a>
      </motion.div>
    </section>
  );
}
