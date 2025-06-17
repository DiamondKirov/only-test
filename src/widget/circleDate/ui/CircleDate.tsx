import { FC, useMemo } from "react";
import { Year } from "../../../shared";
import { CircleEvents } from "../../../entities";
import styles from "./CircleDate.module.scss";
import { useDateContext } from "../../../app/providers/DateContext";

export const CircleDate: FC = () => {
  const { currentId, dates } = useDateContext();

  const currentDate = useMemo(() => {
    return dates.find((el) => el.id == currentId);
  }, [currentId]);

  return (
    <div className={styles["circle-date"]}>
      <div className={styles["circle-date__wrapper-year"]}>
        <Year
          className={styles["circle-date__year"]}
          year={currentDate?.from ?? 0}
        />
        <Year
          className={styles["circle-date__year"]}
          type="fuschia"
          year={currentDate?.to ?? 0}
        />
        <CircleEvents />
      </div>
    </div>
  );
};
