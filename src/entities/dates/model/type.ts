export interface IDateItem {
  id: number;
  name: string;
  from: number;
  to: number;
  items: {
    title: string;
    description: string;
  }[];
}
