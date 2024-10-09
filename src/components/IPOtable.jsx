import React from 'react';
import { useRouter } from 'next/router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const MyTable = () => {
  const router = useRouter();


  const rows = [
    {
      id: 1,
      IPOname: 'Go Air',
      issuesize: "₹ 3600 crores",
      pricerange: '₹ 50-60',
      mininvest: {
        amount: "₹ 50000",
        details: "100 shares/5 lots"
      },
      daterange: '2024-01-01 to 2024-01-10',
      iconUrl: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      IPOname: 'Bajaj Energy',
      issuesize: "₹ 3600 crores",
      pricerange: '₹ 50-60',
      mininvest: {
        amount: "₹ 50000",
        details: "100 shares/5 lots"
      },
      daterange: '2024-02-01 to 2024-02-10',
      iconUrl: 'https://via.placeholder.com/40'
    },
    {
      id: 3,
      IPOname: 'OYO',
      issuesize: "₹ 3600 crores",
      pricerange: '₹ 50-60',
      mininvest: {
        amount: "₹ 50000",
        details: "100 shares/5 lots"
      },
      daterange: '2024-03-01 to 2024-03-10',
      iconUrl: 'https://via.placeholder.com/40'
    },
  ];


  const handleRowClick = (rowData) => {
    router.push({
      pathname: '/IOPdetails',
      query: {
        IPOname: rowData.IPOname,
        issuesize: rowData.issuesize,
        pricerange: rowData.pricerange,
        mininvest: rowData.mininvest,
        daterange: rowData.daterange,
        iconUrl: rowData.iconUrl

      },
    });
  };

  return (
    <TableContainer component={Paper} sx={{ borderLeft: '10px solid #4d4e4e', borderRight: '10px solid #4d4e4e', maxWidth: '99%', overflow: 'hidden', }}>
      <Table>
        <TableHead>
          <TableRow sx={{ width: "100%" }}>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Company/Issue date</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Issue size</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Price range</TableCell>
            <TableCell sx={{ borderBottom: 'none', borderRight: 'none' }}>Min invest/qty</TableCell>
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
              onClick={() => handleRowClick(row)}
            >
              <TableCell sx={{ borderRight: 'none', display: 'flex', alignItems: 'center' }}>
                <img
                  src={row.iconUrl}
                  alt={`${row.IPOname} icon`}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: "bold" }}>{row.IPOname}</Typography>
                  <Typography variant="caption">{row.daterange}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ borderRight: 'none' }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>{row.issuesize}</Typography>
              </TableCell>
              <TableCell sx={{ borderRight: 'none' }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>{row.pricerange}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  <strong>{row.mininvest.amount}</strong>
                  <br />
                  <span style={{ fontWeight: 'normal' }}>{row.mininvest.details}</span>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
