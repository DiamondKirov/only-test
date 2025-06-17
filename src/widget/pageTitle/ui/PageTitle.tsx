import { FC, PropsWithChildren } from "react";
import styles from "./PageTitle.module.scss";
import { Title } from "../../../shared";

export const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["page-title"]}>
      <Title className={styles["page-title__content"]}>{children}</Title>
    </div>
  );
};
