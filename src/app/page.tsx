// 'use client';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Qualifications from './components/About';
import Skills from './components/Skills';
import Image from 'next/image';
import Img from '@/assets/images/ava_dou.png';
import Intro from './components/Intro';

import About from './components/About';
import SectionDivider from './components/section-divider';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className=' flex scroll-mt-28 flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <SectionDivider />
      <Contacts />
    </main>
  );
}
