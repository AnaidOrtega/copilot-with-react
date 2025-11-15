export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableDataProps<T> {
  data: T[];
  hover?: boolean;
  striped?: boolean;
  bordered?: boolean;
  columns: Column<T>[];
  responsive?: boolean;
}
