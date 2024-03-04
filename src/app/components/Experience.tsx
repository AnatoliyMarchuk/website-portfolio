'use client';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';
import React, { useContext } from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData, devDescriptions } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { theme } = useTheme();
  return (
    <section id='experience' className='sm: container m-1 m-40 scroll-m-28 '>
      <ActiveSectionObserver sectionName='Experience' threshold={0.4} />
      <SectionHeading> My Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className='font-semibold capitalize '>{item.title}</h3>
                <p className='!mt-0 font-normal'>{item.location}</p>
                <div className='!mt-1 !font-normal text-gray-700'>
                  {item.title === 'front-end Developer'
                    ? devDescriptions.map((desc, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div className='borderGray m-2 '>
                              <p className='p-1 text-center font-semibold text-black dark:text-white/90 '>
                                {desc.title}
                              </p>
                              <p className='p-2 text-center text-gray-600 dark:text-white/60'>
                                {desc.subTitle}
                              </p>
                            </div>
                          </React.Fragment>
                        );
                      })
                    : ''}
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
  {
    /* <div className='border-white-600 m-2 rounded-lg border  bg-slate-50  p-4 shadow-lg'>
        <div className='text-center text-lg font-bold text-gray-600'>
          EXPERIENCE
        </div>
        <div className='m-1 rounded border border-gray-400 p-1'>
          <section>
            <div className='text-center text-lg text-gray-950'>
              Relevant Experience
            </div>
            <h4>2020-now</h4>
            <h5>3 years</h5>
            <div>Development and layout of the site. </div>
            <div>Technology stack: HTML, CSS</div>
            {/* <link href='https://nextjs.org/docs/pages/api-reference/components/link'> */
  }
  {
    /* Go to my first site */
  }
  {
    /* </link> */
  }
  {
    /* </section>
          <div>
            Development and layout of the site.{' '}
            <div>Technology stack: HTML, CSS, JS</div>
            <div className='text-md text-center '>
              Development of SPA for creating tests. <p />
              <div>
                Technology stack: HTML, CSS, JS, React, React-Router-Dom, Rest
                API, Axios, Firebase, Git
              </div>
            </div>
          </div>
          <div>
            Development and layout of the site.{' '}
            <div>Technology stack: HTML, CSS, JS</div>
            <div className='text-md text-center '>
              Development of the Social Network <p />
              <div>
                Technology stack: HTML, CSS, CSS -Modules, JS, Node JS, React,
                React-Router-Dom 6, REST API, React-Redux, Selector-redux,
                Thunk-redux, Axios, Git, Flux, BLL, DAL, Hooks, Formik.
              </div>
            </div>
          </div>
        </div>
        <div>
          {' '}
          <section className='mb-2 rounded border border-gray-400 p-2'>
            <h3 className='text-center'>2012-now</h3> */
  }
  {
    /* <div>10 years</div>
            <div>
              I work as a computer science teacher in a secondary school.
            </div>
          </section>
        </div>
        <div className='mb-2 rounded border border-gray-400 p-2'>
          <h3 className='font-serif text-lg'>2009-2010</h3>
          <div>I worked as a mathematics teacher in a secondary school.</div>
        </div>
      </div> */
  }
}
