import { useEffect } from 'react';

const useScroll = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}: any) => {
  useEffect(() => {
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useScroll;
