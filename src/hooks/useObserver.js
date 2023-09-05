import { useRef } from "react";

const useObserver = (callback, option = { threshold: 0.3 }) => {
  const observer = useRef(
    new IntersectionObserver((entries, observe) => {
      entries.forEach(entry => {
        callback(entry, observe);
      });
    }, option),
  );

  const observe = element => {
    observer.current.observe(element);
  };

  const unobserve = element => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
};

export default useObserver;
