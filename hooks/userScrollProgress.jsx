import { useState, useEffect } from 'react';

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const percent = Number((currentProgress / scrollHeight).toFixed(2)) * 100;
        setCompletion(percent);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
}

export default useScrollProgress; 22:41
