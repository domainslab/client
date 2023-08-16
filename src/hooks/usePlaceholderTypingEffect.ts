import { useCallback, useEffect, useRef } from 'react';
import { getRandomInt } from 'utils/getRandomInt';

type TypingEffectOptions = {
  humanity?: number; // a typing speed randomness factor
  timeBetweenType?: number; // a base amount of time that one type tick takes (besides humanity)
  timeBetweenErase?: number; // an amount of time that one erase tick takes
  timeBetweenBlink?: number; // an amount of time that one blink takes
  blinkingDuration?: number; // a time to blink after the typing is completed
  chillDuration?: number; // a time to wait before new typing cycle when the previous one is finished
  cycles?: number; // how many times to type items in a loop
};

export const usePlaceholderTypingEffect = (
  inputRef: React.RefObject<HTMLInputElement>,
  items: string[],
  options?: TypingEffectOptions
) => {
  const humanity = options?.humanity ?? 25;
  const timeBetweenType = options?.timeBetweenType ?? 70;
  const timeBetweenErase = options?.timeBetweenErase ?? 40;
  const timeBetweenBlink = options?.timeBetweenBlink ?? 480;
  const blinkingDuration = options?.blinkingDuration ?? 2000;
  const chillDuration = options?.chillDuration ?? 1000;
  const cycles = options?.cycles ?? 5;

  const isStartedRef = useRef<boolean>(false);
  const typingRef = useRef<number>(0);

  const erase = useCallback(() => {
    return new Promise<void>(resolve => {
      const inputEl = inputRef.current;
      if (!inputEl) {
        return;
      }

      if (typingRef.current === 0) {
        inputEl.placeholder = '';

        resolve();
        return;
      }

      inputEl.placeholder = inputEl.placeholder.replace('|', '');
      inputEl.placeholder = inputEl.placeholder.slice(0, -1) + '|';

      typingRef.current -= 1;

      setTimeout(() => {
        erase().then(() => {
          resolve();
        });
      }, timeBetweenErase);
      return;
    });
  }, [timeBetweenErase, inputRef]);

  const blink = useCallback(
    (startTime: number) => {
      return new Promise<void>(resolve => {
        const inputEl = inputRef.current;
        if (!inputEl) {
          return;
        }

        if (Date.now() - startTime > blinkingDuration) {
          resolve();
          return;
        }

        if (inputEl.placeholder.charAt(inputEl.placeholder.length - 1) === '|') {
          inputEl.placeholder = inputEl.placeholder.replace('|', '');
        } else {
          inputEl.placeholder += '|';
        }

        setTimeout(() => {
          blink(startTime).then(() => {
            resolve();
          });
        }, timeBetweenBlink);
        return;
      });
    },
    [timeBetweenBlink, inputRef, blinkingDuration]
  );

  const type = useCallback(
    (target: string, isLast: boolean) => {
      return new Promise<void>(resolve => {
        const inputEl = inputRef.current;
        if (!inputEl) {
          return;
        }

        if (typingRef.current > target.length) {
          blink(Date.now()).then(() => {
            if (isLast) {
              resolve();
              return;
            }

            erase().then(() => {
              setTimeout(() => {
                resolve();
              }, chillDuration);
            });
          });

          return;
        }

        inputEl.placeholder = inputEl.placeholder.replace('|', '');
        inputEl.placeholder += target.charAt(typingRef.current) + '|';

        typingRef.current += 1;

        setTimeout(() => {
          type(target, isLast).then(() => {
            resolve();
          });
        }, timeBetweenType + getRandomInt(humanity));
      });
    },
    [blink, chillDuration, erase, humanity, inputRef, timeBetweenType]
  );

  useEffect(() => {
    const init = async () => {
      if (inputRef.current) {
        isStartedRef.current = true;
        for (let i = 0; i < cycles; i++) {
          for (const [index, item] of items.entries()) {
            await type(item, index === items.length - 1 && cycles === i + 1);
          }
        }
      }
    };

    if (!isStartedRef.current) init();
  }, [cycles, inputRef, items, type]);
};
