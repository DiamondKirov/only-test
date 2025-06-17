import { FC } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Navigation: FC<Props> = ({ className = "" }) => {
  return (
    <div className={classNames(styles["navigation"], className)}>
      <p className={styles["navigation__page"]}>1/6</p>
      <div className={styles["navigation__wrapper"]}>
        <button className={styles["navigation__btn"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="#42567A"
              stroke-width="2"
            />
          </svg>
        </button>
        <button className={styles["navigation__btn"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="#42567A"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
