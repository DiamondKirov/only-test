import { FC, useEffect, useMemo, useState } from "react";
import styles from "./CircleEvents.module.scss";
import { CircleItem } from "../../../shared";
import { useDateContext } from "../../../app/providers/DateContext";

const OFFSET = 300;

export const CircleEvents: FC = () => {
  const { dates, setCurrentId, currentId } = useDateContext();

  const [activeIndex, setActiveIndex] = useState(
    dates.findIndex((el) => el.id == currentId)
  );

  const [angles, setAngles] = useState<number[]>(
    Array.from(
      { length: dates.length },
      (_, i) => i * (360 / dates.length) + OFFSET
    )
  );

  const handleClickItem = (id: number) => {
    setCurrentId(id);
  };

  useEffect(() => {
    const newActive = dates.findIndex((el) => el.id == currentId);
    setActiveIndex(newActive);

    const step = 360 / dates.length;
    const delta =
      ((activeIndex - newActive + dates.length) % dates.length) * step;

    setAngles((prev) => prev.map((angle) => angle + delta));
  }, [currentId]);

  return (
    <div
      className={styles["circle-events"]}
      style={
        {
          "--total": dates.length,
        } as React.CSSProperties
      }
    >
      {dates.map((date, index) => {
        return (
          <div
            key={date.id}
            className={styles["circle-events__item"]}
            style={{
              transform: `rotate(${angles[index]}deg) translate(var(--circle-radius)) rotate(-${angles[index]}deg)`,
            }}
          >
            <CircleItem
              className={styles["circle-events__item-content"]}
              title={date.name}
              number={index + 1}
              isActive={date.id == currentId}
              onClick={() => handleClickItem(date.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
