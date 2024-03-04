

import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  email: string;
};

export default function ContactFormEmail({
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Img
            className='mx-auto w-24'
            src='https://lh3.googleusercontent.com/a/ACg8ocK3lyd4s9nc-3MNma33iCFI2x8jbwq96GgW32DRBf03cg=s288-c-no'
          ></Img>
          <Container>
            <Section className='borderBlack my-10 rounded-md bg-white px-10 py-4'>
              <Heading className='leading-tight'>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
