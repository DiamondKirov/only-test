import { FC } from "react";
import { Year } from "../../../shared";
import { CircleEvents } from "../../../entities";
import styles from "./CircleDate.module.scss";

export const CircleDate: FC = () => {
  return (
    <div className={styles["circle-date"]}>
      <div className={styles["circle-date__wrapper-year"]}>
        <CircleEvents />
        <Year className={styles["circle-date__year"]}>2015</Year>
        <Year className={styles["circle-date__year"]} type="fuschia">
          2022
        </Year>
      </div>
    </div>
  );
};
