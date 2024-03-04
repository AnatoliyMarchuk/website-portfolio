'use client';
import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { toggleTeam, theme } = useTheme();
  return (
    <button
      className='backdrop:blur-[0.5 rem] fixed  bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950 '
      onClick={toggleTeam}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}