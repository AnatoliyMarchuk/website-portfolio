'use client';

import ActiveSectionObserver from '@/utils/ActiveSectionObserver';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.div
      id='education'
      className=' m-5 scroll-m-28 justify-between rounded-lg border p-5   shadow-md dark:border-white/40 '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <ActiveSectionObserver sectionName='Education' threshold={0.5} />
      <SectionHeading>Education</SectionHeading>
      <div className='borderGray m-5  border p-5  '>
        <div className='subTitles '>
          Additional education (courses, training)
        </div>
        <ul className='textDescriptions'>
          <li>NextJS + React</li>
          <li>TypeScript and design patterns</li>
          <li>React Hooks</li>
          <li>React + Redux - Professional Development</li>
          <li>The full course on JavaScript + React</li>
          <li>WEB developer</li>
        </ul>
      </div>
      <div className='borderGray m-5  p-5'>
        <h1 className='subTitles'>Master&apos;s degree (MS)</h1>
        <p className='textDescriptions'>
          Kam&apos;yanets&apos;-Podil&apos;s&apos;kyi National University 2008 -
          2009 <br /> Ternopil National University 2012 - 2015
        </p>
      </div>
      <div className='borderGray m-5 p-5  '>
        <h1 className=' subTitles '>Bachelor&apos;s degree (BS)</h1>
        <p className=' textDescriptions'>
          Kam&apos;yanets&apos;-Podil&apos;s&apos;kyi National University 2004 -
          2008
        </p>
      </div>
    </motion.div>
  );
}
