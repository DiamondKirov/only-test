import { FC } from "react";
import styles from "./Container.module.scss";
import { IFCProps } from "../../model/types/fc-props";

export const Container: FC<IFCProps> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
