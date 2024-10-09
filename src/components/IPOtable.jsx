import React from 'react';
import { useRouter } from 'next/router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MyTable = () => {
  const router = useRouter();

  // Example data for the table
  const rows = [
    { id: 1, name: 'John Doe', age: 28, location: 'New York' },
    { id: 2, name: 'Jane Smith', age: 32, location: 'San Francisco' },
    { id: 3, name: 'Alice Johnson', age: 24, location: 'Los Angeles' },
  ];

  const handleRowClick = (rowData) => {
    router.push({
      pathname: '/IOPdetails',
      query: {
        id: rowData.id,
        name: rowData.name,
        age: rowData.age,
        location: rowData.location,
      },
    });
  };
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>ID</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Name</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Age</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'lightgrey',
                  cursor: 'pointer',
                },
              }}
              onClick={() => handleRowClick(row)} // Handle row click
            >
              <TableCell sx={{ borderRight: 'none' }}>{row.id}</TableCell>
              <TableCell sx={{ borderRight: 'none' }}>{row.name}</TableCell>
              <TableCell sx={{ borderRight: 'none' }}>{row.age}</TableCell>
              <TableCell sx={{ borderRight: 'none' }}>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
