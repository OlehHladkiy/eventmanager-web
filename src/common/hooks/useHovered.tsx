import { useCallback, useEffect, useRef, useState } from 'react';

const useHovered = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref: Record<string, any> = useRef();

  const onMouseEnter = useCallback(() => setIsHovered(true), []);

  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const node = ref.current;
    node?.addEventListener('mouseenter', onMouseEnter);
    node?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      node?.removeEventListener('mouseenter', onMouseEnter);
      node?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, onMouseEnter, onMouseLeave]);

  return [ref, isHovered];
};

export default useHovered;
