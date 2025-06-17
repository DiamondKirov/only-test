import { createRoot } from "react-dom/client";
import { MainPage } from "../pages";
import "normalize.css";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import "./styles/styles.scss";

const App = () => {
  return <MainPage />;
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
