import { Table } from 'react-bootstrap';
import { TableDataProps } from '.';

const TableData = <T extends { id: string | number }>({
  data,
  columns,
  hover = true,
  striped = true,
  bordered = true,
  responsive = true,
}: TableDataProps<T>) => {
  return (
    <Table
      hover={hover}
      striped={striped}
      bordered={bordered}
      responsive={responsive}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
