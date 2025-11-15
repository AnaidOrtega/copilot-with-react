export interface TablePaginationProps {
  endIndex: number;
  itemName?: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  onPageChange: (pageNumber: number) => void;
}
