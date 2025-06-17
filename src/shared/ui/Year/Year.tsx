import { FC } from "react";
import { IFCProps } from "../../model/types/fc-props";
import classNames from "classnames";
import styles from "./Year.module.scss";

interface Props extends IFCProps {
  type?: "iris" | "fuschia";
}

export const Year: FC<Props> = ({ className, children, type }) => {
  return (
    <p
      className={classNames(styles["year"], className, {
        [styles[`year--${type}`]]: !!type,
      })}
    >
      {children}
    </p>
  );
};
