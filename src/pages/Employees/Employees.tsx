import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Column, Table } from '../../components';

interface Employee {
  id: number;
  name: string;
  lastName: string;
  dateOfEntry: string;
  position: string;
}

// Mock data - replace with API call
const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    dateOfEntry: '2023-01-15',
    position: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Jane',
    lastName: 'Smith',
    dateOfEntry: '2023-02-20',
    position: 'Product Manager',
  },
  {
    id: 3,
    name: 'Michael',
    lastName: 'Johnson',
    dateOfEntry: '2023-03-10',
    position: 'UX Designer',
  },
  {
    id: 4,
    name: 'Emily',
    lastName: 'Williams',
    dateOfEntry: '2023-04-05',
    position: 'Data Analyst',
  },
  {
    id: 5,
    name: 'David',
    lastName: 'Brown',
    dateOfEntry: '2023-05-12',
    position: 'DevOps Engineer',
  },
  {
    id: 6,
    name: 'Sarah',
    lastName: 'Davis',
    dateOfEntry: '2023-06-18',
    position: 'QA Engineer',
  },
  {
    id: 7,
    name: 'Robert',
    lastName: 'Miller',
    dateOfEntry: '2023-07-22',
    position: 'Frontend Developer',
  },
  {
    id: 8,
    name: 'Lisa',
    lastName: 'Wilson',
    dateOfEntry: '2023-08-30',
    position: 'Backend Developer',
  },
  {
    id: 9,
    name: 'James',
    lastName: 'Moore',
    dateOfEntry: '2023-09-14',
    position: 'Scrum Master',
  },
  {
    id: 10,
    name: 'Patricia',
    lastName: 'Taylor',
    dateOfEntry: '2023-10-25',
    position: 'Business Analyst',
  },
  {
    id: 11,
    name: 'Christopher',
    lastName: 'Anderson',
    dateOfEntry: '2023-11-08',
    position: 'Tech Lead',
  },
  {
    id: 12,
    name: 'Jennifer',
    lastName: 'Thomas',
    dateOfEntry: '2023-12-03',
    position: 'UI Designer',
  },
  {
    id: 13,
    name: 'Daniel',
    lastName: 'Jackson',
    dateOfEntry: '2024-01-17',
    position: 'Full Stack Developer',
  },
  {
    id: 14,
    name: 'Nancy',
    lastName: 'White',
    dateOfEntry: '2024-02-21',
    position: 'Cloud Architect',
  },
  {
    id: 15,
    name: 'Matthew',
    lastName: 'Harris',
    dateOfEntry: '2024-03-15',
    position: 'Security Engineer',
  },
];

const ITEMS_PER_PAGE = 5;

const Employees = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockEmployees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEmployees = mockEmployees.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const columns: Column<Employee>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'lastName', header: 'Last Name' },
    {
      key: 'dateOfEntry',
      header: 'Date of Entry',
      render: (value) => new Date(value as string).toLocaleDateString(),
    },
    { key: 'position', header: 'Position' },
  ];

  return (
    <Container className="py-4">
      <h1 className="mb-4">Employees</h1>
      <Table
        tableData={{
          data: currentEmployees,
          columns: columns,
        }}
        tablePaginationConfig={{
          endIndex,
          itemName: 'employees',
          totalPages,
          startIndex,
          currentPage,
          onPageChange: handlePageChange,
          totalItems: mockEmployees.length,
        }}
      />
    </Container>
  );
};

export default Employees;
