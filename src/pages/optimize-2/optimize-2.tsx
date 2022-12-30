import { useEffect, useState } from 'react';
import { CenteredLayout } from '~/components/UI/CenteredLayout';
import Expensive from '~/components/Expensive';

export const Optimize2 = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll)};
  }, [scrollTop]);

  return (
    <div className="h-[1000vh] bg-gradient-to-tr from-gray-100 to-gray-200 bg-repeat bg-[length:100%_8px]">
      <CenteredLayout className="gap-4 fixed top-0 left-1/2 -translate-x-1/2">
        <div className="text-3xl">See the code</div>
        <div>{scrollTop} px</div>
        <Expensive />
      </CenteredLayout>
    </div>
  );
};
