import { useEffect } from "react";

import { useRef } from "react";

const safeDocument =
  typeof document !== "undefined" ? document : ({} as Document);

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
export const useLockBody = () => {
  const scrollBlocked = useRef(false);
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;
    body.style.position = "relative";
    body.style.overflow = "hidden";

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;
    body.style.position = "";
    body.style.overflow = "";

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

export default useLockBody;
