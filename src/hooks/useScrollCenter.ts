import { useEffect, useRef } from "react";

const useScrollCenter = () => {
  const itemsRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const items = itemsRef.current;
    const container = containerRef.current;

    items.forEach((item) => {
      item.addEventListener("click", function () {
        // Calculate the scroll position to center the clicked item
        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const scrollPosition =
          itemRect.top -
          containerRect.top -
          (containerRect.height - itemRect.height) / 2;

        // Scroll the container to the calculated position
        container.scrollTop += scrollPosition;
      });
    });
  }, []);

  return [itemsRef, containerRef] as const;
};

export default useScrollCenter;
