import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Year.module.scss";

interface Props {
  type?: "iris" | "fuschia";
  className?: string;
  year: number;
}

interface IChangeYear {
  begin: number;
  end: number;
  step: number;
}

export const Year: FC<Props> = ({ className, year, type }) => {
  const [currentYear, setCurrentYear] = useState(year);
  const [changeYear, setChangeYear] = useState<IChangeYear>();
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (year != currentYear) {
      setChangeYear({
        begin: currentYear,
        end: year,
        step: currentYear > year ? -1 : 1,
      });
    }
  }, [year]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (changeYear) {
      intervalRef.current = setInterval(() => {
        if (year == currentYear) {
          clearInterval(intervalRef.current);
        } else {
          setCurrentYear((prev) => prev + changeYear.step);
        }
      }, 80);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentYear, changeYear]);

  return (
    <p
      className={classNames(styles["year"], className, {
        [styles[`year--${type}`]]: !!type,
      })}
    >
      {currentYear}
    </p>
  );
};
