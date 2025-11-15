import { Pagination } from 'react-bootstrap';
import { TablePaginationProps } from '.';

const TablePagination = ({
  endIndex,
  totalPages,
  startIndex,
  totalItems,
  currentPage,
  onPageChange,
  itemName = 'items',
}: TablePaginationProps) => {
  const renderPaginationItems = () => {
    const items = [];

    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>,
      );
    }

    return items;
  };

  return (
    <>
      <Pagination className="justify-content-center">
        <Pagination.First
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      <div className="text-center text-muted">
        Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{' '}
        {totalItems} {itemName}
      </div>
    </>
  );
};

export default TablePagination;
