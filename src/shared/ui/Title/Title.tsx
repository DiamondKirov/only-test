import { FC, PropsWithChildren } from "react";
import styles from "./Title.module.scss";
import classnames from "classnames";
import { IFCProps } from "../../model/types/fc-props";

export const Title: FC<IFCProps> = ({ children, className }) => {
  return <h1 className={classnames(styles["title"], className)}>{children}</h1>;
};
