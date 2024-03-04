'use client';
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import ActiveSectionObserver from '@/utils/ActiveSectionObserver';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import SubmitBtn from './submitBtn';
import { IFormData } from '@/utils/types';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail } from '@/actions/sendEmail';

const notify = () => toast('Email sent successfully!');
export default function Contacts() {
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = async (values: IFormData, actions: any) => {
    const formData = values;

    console.log('Running on client!');
    console.log(formData.email);
    console.log(formData.message);
    setSubmitting(true);

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      setTimeout(() => {
        setSubmitting(false);
        actions.resetForm();
      }, 4000);
      return;
    }

    toast.success('Email sent successfully!');
    setSubmitting(false);
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    message: '',
  };

  return (
    <motion.section
      id='contact'
      className='mb-20  sm:mb-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <ActiveSectionObserver sectionName='Contact' threshold={0.75} />
      <SectionHeading> Contact Me</SectionHeading>
      <p className='-mt-5 text-center text-gray-700 dark:text-white/70'>
        Please contact my directly at{' '}
        <a className='underline' href='mailto:example.gmail.com'>
          example@gmail.com
        </a>
      </p>
      <p className='text-center dark:text-white/70'>or through this form.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='mt-10 flex flex-col  dark:text-black/90 '>
          <Field
            type='email'
            name='email'
            placeholder='Your email'
            className='borderBlack h-14 rounded-lg border px-4 transition-all dark:bg-white dark:bg-opacity-80  dark:outline-none dark:focus:bg-opacity-100'
            required
            maxLength={50}
          />

          <Field
            className='borderBlack my-3 h-52 rounded-lg px-4 transition-all transition-all dark:bg-white dark:bg-white dark:bg-opacity-80 dark:bg-opacity-80 dark:text-black/90  dark:outline-none dark:focus:bg-opacity-100 '
            id='message'
            name='message'
            placeholder='Your message'
            required
            maxLength={5000}
          />
          <SubmitBtn isSubmitting={isSubmitting} />
        </Form>
      </Formik>
    </motion.section>
  );
}
