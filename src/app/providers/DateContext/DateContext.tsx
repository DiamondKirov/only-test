import { createContext, useContext, useState, ReactNode } from "react";
import { DATE_ITEMS, IDateItem } from "../../../entities";

interface DateContextType {
  currentId: IDateItem["id"];
  dates: IDateItem[];
  setCurrentId: (id: number) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [currentId, setCurrentId] = useState<number>(DATE_ITEMS[0]?.id ?? 0);

  return (
    <DateContext.Provider
      value={{ currentId, setCurrentId, dates: DATE_ITEMS }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context)
    throw new Error("usePageContext must be used within a PageProvider");
  return context;
};
