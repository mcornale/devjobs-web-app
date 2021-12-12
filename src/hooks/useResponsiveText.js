import { useState, useEffect, useCallback } from 'react';

const useResponsiveText = (text, responsiveText) => {
  const [usableText, setUsableText] = useState();

  const setWindowWidth = useCallback(() => {
    if (window.innerWidth < 1400) {
      setUsableText(responsiveText);
    } else {
      setUsableText(text);
    }
  }, [text, responsiveText]);

  useEffect(() => {
    setWindowWidth();
    window.addEventListener('resize', setWindowWidth);
    return () => {
      window.removeEventListener('resize', setWindowWidth);
    };
  }, [setWindowWidth]);

  if (!responsiveText) return text;

  return usableText;
};

export default useResponsiveText;
