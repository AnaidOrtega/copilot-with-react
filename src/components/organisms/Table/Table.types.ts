import { TableDataProps, TablePaginationProps } from '../../molecules';

export interface TableProps<T> {
  className?: string;
  tableData: TableDataProps<T>;
  tablePaginationConfig: TablePaginationProps;
}
