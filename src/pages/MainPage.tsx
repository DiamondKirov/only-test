import { FC } from "react";
import { Container } from "../shared";
import { PageTitle, CircleDate, DateNavigation } from "../widget";

export const MainPage: FC = () => {
  return (
    <>
      <Container>
        <PageTitle>Исторические даты</PageTitle>
        <CircleDate />
        <DateNavigation />
      </Container>
    </>
  );
};
