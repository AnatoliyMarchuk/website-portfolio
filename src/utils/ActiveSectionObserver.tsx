import { useActiveSectionContext } from '@/context/active-section-context';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

interface IActiveSectionObserverProps {
  sectionName: SectionName;
  threshold?: number;
}

const ActiveSectionObserver: React.FC<IActiveSectionObserverProps> = ({
  sectionName,
  threshold = 0.75,
}) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return <div ref={ref} />;
};
export default ActiveSectionObserver;
