import { FC } from "react";
import styles from "./CircleItem.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
  number: number;
  title: string;
  isActive?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CircleItem: FC<Props> = ({
  number,
  className,
  title,
  isActive,
  style,
  onClick,
}) => {
  return (
    <button
      className={classNames(styles["circle-item"], className, {
        [styles["circle-item--active"]]: isActive,
      })}
      onClick={onClick}
      style={style}
    >
      <div className={styles["circle-item__number"]}>{number}</div>
      <p className={styles["circle-item__title"]}>{title}</p>
    </button>
  );
};
