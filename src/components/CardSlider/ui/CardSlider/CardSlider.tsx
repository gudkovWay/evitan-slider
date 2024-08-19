import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./CardSlider.css";

const cards = [
  { id: 1, text: "1", background: "violet" },
  { id: 2, text: "2", background: "red" },
  { id: 3, text: "3", background: "blue" },
  { id: 4, text: "4", background: "green" },
  { id: 5, text: "5", background: "yellow" },
];

export const CardSlider = () => {
  gsap.registerPlugin(ScrollTrigger);

  const component = useRef();
  const pinSlider = useRef();
  const cardsRef = useRef(cards.map((card) => ({ ...card, ref: useRef() })));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contents = gsap.utils.toArray(".content");
      gsap.set(contents, { autoAlpha: 0, y: 500 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSlider.current,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=10000 bottom",
        },
      });

      contents.forEach((content) => {
        tl.to(content, {
          keyframes: { y: [100, 75], autoAlpha: [0.5, 1] },
          ease: "power3.inOut",
          autoAlpha: 0,
          duration: 1,
        });
      });
    }, component);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={component} className="smooth-wrapper">
      <div className="pinBox" ref={pinSlider}>
        <div
          className="pinSlider smooth-content"
          style={{ height: "50vh", background: "#fff" }}
        >
          {cardsRef.current.map((card) => (
            <div
              key={card.id}
              className="content"
              style={{ background: card.background }}
              ref={card.ref}
            >
              {card.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
