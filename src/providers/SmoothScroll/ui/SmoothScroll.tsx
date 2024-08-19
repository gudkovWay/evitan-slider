import { FC, ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap-trial/ScrollSmoother";

export const SmoothScroll: FC<{ children: ReactNode }> = ({ children }) => {
  gsap.registerPlugin(ScrollSmoother);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div className="smooth-wrapper">
      <div className="smooth-content">{children}</div>
    </div>
  );
};
