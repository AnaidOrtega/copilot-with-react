import { Container } from 'react-bootstrap';
import { TableData, TablePagination } from '../../molecules';
import { TableProps } from '.';

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
