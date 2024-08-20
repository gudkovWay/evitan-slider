import { createRef, useEffect, useRef } from "react";

import { cards } from "@/assets/cards";

const useCardsRefs = (cardsForRefs: typeof cards) => {
  const cardsRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

  useEffect(() => {
    cardsRefs.current = cards.map(
      (_, index) => cardsRefs.current[index] || createRef<HTMLDivElement>(),
    );
  }, [cardsForRefs]);

  return cardsRefs;
};

export default useCardsRefs;
