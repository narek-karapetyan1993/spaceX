import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.screen.width);

  const updateWindowSizes = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowSizes);
    }

    return () => {
      window.removeEventListener("resize", updateWindowSizes);
    };
  }, []);

  return { width };
}
