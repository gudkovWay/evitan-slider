import { FC, ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const lenis = useLenis((e) => {
    // console.log(e);
    e.animate.duration = 2.5;
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
