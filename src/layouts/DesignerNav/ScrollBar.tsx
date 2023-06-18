import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  MouseEvent,
} from "react";
import { scrollProgress, progress } from "./scroll-bar.module.scss";

const ScrollBar = ({ menuRef }) => {
  const [height, setHeight] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleProgressMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (progressRef.current !== null && menuRef.current !== null) {
      const { scrollWidth } = progressRef.current;
      const { clientX } = e;

      const selectedPercent: number = (clientX / scrollWidth) * 100;
      setHeight(selectedPercent);

      const { scrollHeight, clientHeight } = menuRef.current;
      const windowHeight: number = scrollHeight - clientHeight;

      const moveScrollPercent: number = (windowHeight * selectedPercent) / 100;

      menuRef.current.scrollTo({
        top: moveScrollPercent,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (): void => {
    if (progressRef.current !== null && menuRef.current !== null) {
      const { scrollTop, scrollHeight, clientHeight } = menuRef.current;

      if (scrollTop === 0) {
        setHeight(0);
        return;
      }

      console.log(scrollTop, scrollHeight - clientHeight);
      const windowHeight: number = scrollHeight - clientHeight;
      const currentPercent: number = scrollTop / windowHeight;

      setHeight(currentPercent * 100);
    }
  };

  useEffect(() => {
    menuRef?.current?.addEventListener("scroll", handleScroll, true);

    return () => {
      menuRef?.current?.removeEventListener("scroll", handleScroll, true);
    };
  }, [menuRef?.current, handleScroll]);

  return (
    <div
      className={scrollProgress}
      ref={progressRef}
      onClick={handleProgressMove}
    >
      <div
        className={progress}
        style={{ transform: `translate(50%, ${height})` }}
      ></div>
    </div>
  );
};

export default ScrollBar;
