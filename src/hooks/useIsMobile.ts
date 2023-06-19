import { useMediaQuery } from "react-responsive";

const useIsMobile = (query: string = "(max-width: 991px)") => {
  const isMobile = useMediaQuery({
    query,
  });
  return isMobile;
};

export default useIsMobile;
