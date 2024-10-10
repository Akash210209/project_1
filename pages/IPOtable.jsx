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
      mininvestamount: "₹ 50000", 
        
      mininvestdetails: "100 shares/5 lots",
      issuedates: "12 Dec-15 Dec 22",
      Listedon: " 15 Dec 22",
      listedprice: " ₹ 150",
      listinggains: " ₹ 10",
      listinggainspercent: "(10.0%)",
      daterange: '2024-01-01 to 2024-01-10',
      iconUrl: 'https://assets.planespotters.net/files/airlines/1/goair_72e0ed_opk.png'
    },
    {
      id: 2,
      IPOname: 'Bajaj Energy',
      issuesize: "₹ 3600 crores",
      pricerange: '₹ 50-60',
      mininvestamount: "₹ 50000", 
        
      mininvestdetails: "100 shares/5 lots",
      issuedates: "12 Dec-15 Dec 22",
      Listedon: " 15 Dec 22",
      listedprice: " ₹ 150",
      listinggains: " ₹ 10",
      listinggainspercent: "(10.0%)",
      daterange: '2024-02-01 to 2024-02-10',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpwMuUjy8UVfKM54t2qi5_w3KgaaQfDS7sQ&s'
    },
    {
      id: 3,
      IPOname: 'OYO',
      issuesize: "₹ 3600 crores",
      pricerange: '₹ 50-60',
      mininvestamount: "₹ 50000", 
        
        mininvestdetails: "100 shares/5 lots",
      issuedates: "12 Dec-15 Dec 22",
      Listedon: " 15 Dec 22",
      listedprice: " ₹ 150",
      listinggains: " ₹ 10",
      listinggainspercent: "(10.0%)",
      daterange: '2024-03-01 to 2024-03-10',
      iconUrl: 'https://thekashmirhorizon.com/wp-content/uploads/OYO-India.png'
    },
  ];


  const handleRowClick = (rowData) => {
    router.push({
      pathname: '/IOPdetails',
      query: {
        IPOname: rowData.IPOname,
        issuesize: rowData.issuesize,
        pricerange: rowData.pricerange,
        mininvestamount: rowData.mininvestamount,
        mininvestdetails:rowData.mininvestdetails,
        daterange: rowData.daterange,
        iconUrl: rowData.iconUrl,
        issuedates:  rowData.issuedates,
        Listedon: rowData.Listedon,
        listedprice:  rowData.listedprice,
        listinggains: rowData.listinggains,
        listinggainspercent: rowData.listinggainspercent

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
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '10px', 
                  }}
                >
                  <img
                    src={row.iconUrl}
                    alt={`${row.IPOname} icon`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', 
                    }}
                  />
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {row.IPOname}
                  </Typography>
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
                  <strong>{row.mininvestamount}</strong>
                  <br />
                  <span style={{ fontWeight: 'normal' }}>{row.mininvestdetails}</span>
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
