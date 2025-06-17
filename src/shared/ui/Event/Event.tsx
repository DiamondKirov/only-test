import { FC } from "react";
import { IFCProps } from "../../model/types/fc-props";
import styles from "./Event.module.scss";

interface Props extends IFCProps {
  title: string;
}

export const Event: FC<Props> = ({ title, className, children }) => {
  return (
    <div className={styles["event"]}>
      <p className={styles["event__title"]}>{title}</p>
      <div className={styles["event__body"]}>{children}</div>
    </div>
  );
};
