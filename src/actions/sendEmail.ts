'use server';

import { Resend } from 'resend';
import { IFormData } from '@/utils/types';
import { getErrorMessage } from '@/utils/utils';
import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: IFormData) => {
  const { email, message } = formData;
  console.log('Running on server');
  console.log(email, message);

  if (!message) {
    return {
      error: 'Invalid message',
    };
  }
  if (!email) {
    return {
      error: 'Invalid sender email',
    };
  }
  let data;
  try {
    data = await resend.sendEmail({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'fizrukmalnvk@gmail.com',
      subject: 'Message from contact form',
      reply_to: email,
      text: message,

      react: React.createElement(ContactFormEmail, { message, email }),
    });
    console.log(data);
  } catch (error: unknown) {
    console.log(error);

    return { error: getErrorMessage(error) };
  }
  return { data };
};
