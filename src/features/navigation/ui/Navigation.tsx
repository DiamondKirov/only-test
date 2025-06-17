import { FC, useMemo } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames";
import { useDateContext } from "../../../app/providers/DateContext";

interface Props {
  className?: string;
}

export const Navigation: FC<Props> = ({ className = "" }) => {
  const { dates, setCurrentId, currentId } = useDateContext();

  const activeIndex = useMemo(() => {
    return dates.findIndex((el) => el.id == currentId);
  }, [currentId]);

  const handleChangeItem = (direction: "prev" | "next") => {
    if (direction == "next" && activeIndex != dates.length - 1) {
      setCurrentId(dates[activeIndex + 1].id);
    } else if (direction == "prev" && activeIndex != 0) {
      setCurrentId(dates[activeIndex - 1].id);
    }
  };

  return (
    <div className={classNames(styles["navigation"], className)}>
      <p className={styles["navigation__page"]}>
        {`${activeIndex + 1}`.padStart(2, "0")}/
        {`${dates.length}`.padStart(2, "0")}
      </p>
      <div className={styles["navigation__wrapper"]}>
        <button
          onClick={() => handleChangeItem("prev")}
          className={classNames(styles["navigation__btn"], {
            [styles["navigation__btn--disabled"]]: activeIndex == 0,
          })}
        >
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
        <button
          onClick={() => handleChangeItem("next")}
          className={classNames(styles["navigation__btn"], {
            [styles["navigation__btn--disabled"]]:
              activeIndex == dates.length - 1,
          })}
        >
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
