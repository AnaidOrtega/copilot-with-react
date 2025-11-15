import { Container } from 'react-bootstrap';
import {
  TableData,
  TableDataProps,
  TablePagination,
  TablePaginationProps,
} from '../../molecules';

interface TableProps<T> {
  className?: string;
  tableData: TableDataProps<T>;
  tablePaginationConfig: TablePaginationProps;
}

const Table = <T extends { id: string | number }>({
  tableData,
  className,
  tablePaginationConfig,
}: TableProps<T>) => {
  return (
    <Container className={className}>
      <TableData {...tableData} />
      <TablePagination {...tablePaginationConfig} />
    </Container>
  );
};

export default Table;
