import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value = 0, suffix = '', duration = 1200, className, label, ...props }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof value !== 'number' || value <= 0) {
      setCount(value);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={className} {...props}>
      <p className="text-4xl sm:text-5xl font-semibold text-white">{count}{suffix}</p>
      {label ? <p className="mt-2 text-sm uppercase tracking-[0.35em] text-crown-gold">{label}</p> : null}
    </div>
  );
};

export default AnimatedCounter;
