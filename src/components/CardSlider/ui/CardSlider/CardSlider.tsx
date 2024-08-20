import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

import useCardRefs from "@/features/hooks/useCardRefs";
import { cards } from "@/assets/cards";
import "./CardSlider.css";

interface CardSliderProps {
  cards: typeof cards;
}

export const CardSlider: FC<CardSliderProps> = ({ cards }) => {
  const component = useRef<HTMLElement | null>(null);
  const pinSlider = useRef<HTMLDivElement | null>(null);
  const cardsRef = useCardRefs(cards);

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
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="content"
              style={{ background: card.background }}
              ref={cardsRef.current[idx]}
            >
              {card.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
