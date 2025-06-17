import { FC } from "react";
import styles from "./CircleEvents.module.scss";
import { CircleItem } from "../../../shared";

export const CircleEvents: FC = () => {
  return (
    <div
      className={styles["circle-events"]}
      style={
        {
          "--total": 3,
        } as React.CSSProperties
      }
    >
      <div
        className={styles["circle-events__item"]}
        style={
          {
            "--i": 1,
          } as React.CSSProperties
        }
      >
        <CircleItem
          className={styles["circle-events__item-content"]}
          title="Наука"
          number={1}
        />
      </div>
      <div
        className={styles["circle-events__item"]}
        style={
          {
            "--i": 2,
          } as React.CSSProperties
        }
      >
        <CircleItem
          className={styles["circle-events__item-content"]}
          title="Наука"
          number={1}
        />
      </div>
      <div
        className={styles["circle-events__item"]}
        style={
          {
            "--i": 3,
          } as React.CSSProperties
        }
      >
        <CircleItem
          className={styles["circle-events__item-content"]}
          title="Наука"
          number={1}
          isActive
        />
      </div>
    </div>
  );
};
