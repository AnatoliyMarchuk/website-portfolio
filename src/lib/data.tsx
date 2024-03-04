import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsFiletypeCss } from 'react-icons/bs';
import corpcommentImg from '../../public/corpcomment.png';
import rmtdevImg from '../../public/rmtdev.png';
import wordanalyticsImg from '../../public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Teaching activity',
    location: 'Ukraine',
    description: 'I worked as a mathematics teacher in a secondary school.',
    icon: React.createElement(CgWorkAlt),
    date: '2009-2010',
  },
  {
    title: 'Teaching activity',
    location: 'Ukraine',
    description: 'I work as a computer science teacher in a secondary school.',
    icon: React.createElement(CgWorkAlt, BsFiletypeCss),
    date: '2012 - now',
  },
  {
    title: 'front-end Developer',
    location: 'Ukraine',
    icon: React.createElement(TbBrandNextjs),
    date: '2020 - present',
  },
] as const;
export const devDescriptions = [
  {
    title: ' Development and layout of the site.',
    subTitle: 'Technology stack: HTML, CSS.',
  },
  {
    title: ' Development and layout of the site.',
    subTitle: 'Technology stack: HTML, CSS, JS',
  },
  {
    title: 'Development of SPA for creating tests.',
    subTitle:
      'Technology stack: HTML, CSS, JS, React, React-Router-Dom, Rest API, Axios, Firebase, Git',
  },

  {
    title: 'Development of the Social Network',
    subTitle:
      'Technology stack:          HTML, CSS, CSS -Modules, JS, Node JS, React, React-Router-Dom 6, REST  API, React-Redux, Selector-redux, Thunk-redux, Axios, Git, Flux, BLL, DAL, Hooks, Formik.',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
