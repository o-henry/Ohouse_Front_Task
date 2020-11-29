import { useEffect, useRef } from 'react';

interface Props {
  element: Element | null;
  setPage: any;
}

const useScroll = ({ element, setPage }: Props) => {
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPage((page: number) => page + 1);
        }
      },
      { threshold: 1, rootMargin: '0px', root: null },
    ),
  );

  useEffect(() => {
    const currentElement: Element | null = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
};

export default useScroll;
