import { createRoot } from "react-dom/client";
import { MainPage } from "../pages";
import "normalize.css";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import "./styles/styles.scss";
import { DateProvider } from "./providers/DateContext";

const App = () => {
  return (
    <DateProvider>
      <MainPage />
    </DateProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
