import { CardSlider } from "@/components/CardSlider";
import { cards } from "./assets/cards";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="empty-block">Empty block (top)</div>
      <CardSlider cards={cards} />
      <div className="empty-block">Empty block (bottom)</div>
    </main>
  );
};

export default App;
