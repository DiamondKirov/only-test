import { FC } from "react";
import styles from "./DateNavigation.module.scss";
import { Navigation } from "../../../features";
import { SliderEvents } from "../../../entities";

export const DateNavigation: FC = () => {
  return (
    <div className={styles["date-navigation"]}>
      <Navigation />
      <SliderEvents />
    </div>
  );
};
