import { CardSlider } from "@/components/CardSlider";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="empty-block">Empty block (top)</div>
      <CardSlider />
      <div className="empty-block">Empty block (bottom)</div>
    </main>
  );
};

export default App;
