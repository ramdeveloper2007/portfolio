import { useEffect, useState, useRef, useCallback } from 'react';

const CYBER_GLYPHS = '0123456789ABCDEF_#$/\\{}[]<>~!*?%&@+-=';

export function useTextScramble(text, options = {}) {
  const { speed = 30, trigger = true, scrambleCount = 3 } = options;
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(null);

  const scramble = useCallback(() => {
    if (!text) return;
    setIsScrambling(true);
    let frame = 0;
    const totalFrames = text.length * scrambleCount;

    const update = () => {
      let output = '';
      const progress = frame / totalFrames;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
          output += ' ';
          continue;
        }

        const charProgress = i / text.length;
        if (progress > charProgress) {
          output += char;
        } else {
          output += CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
        }
      }

      setDisplayText(output);
      frame++;

      if (frame <= totalFrames) {
        frameRef.current = setTimeout(update, speed);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    update();
  }, [text, speed, scrambleCount]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [trigger, scramble]);

  return { displayText, isScrambling, scramble };
}

export function TextScramble({
  text,
  className = '',
  as: Component = 'span',
  hover = true,
  speed = 25,
  scrambleCount = 2,
  ...props
}) {
  const { displayText, scramble } = useTextScramble(text, { speed, scrambleCount, trigger: true });

  return (
    <Component
      className={className}
      onMouseEnter={hover ? scramble : undefined}
      {...props}
    >
      {displayText}
    </Component>
  );
}

export default TextScramble;
