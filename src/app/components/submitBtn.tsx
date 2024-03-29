import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
interface SubmitBtnProps {
  isSubmitting: boolean;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({ isSubmitting }) => {
  return (
    <button
      type='submit'
      className='disabled:bg-opacity-65 group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-white dark:bg-opacity-10'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className=' text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 dark:bg-white dark:bg-opacity-10 ' />{' '}
        </>
      )}
    </button>
  );
};
export default SubmitBtn;
