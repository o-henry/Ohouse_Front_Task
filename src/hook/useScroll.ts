import { useEffect, useRef } from 'react';

interface Props {
  element: Element | null;
  setPageNum: any;
}

const useScroll = ({ element, setPageNum }: Props) => {
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPageNum((pageNum: number) => pageNum + 1);
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
