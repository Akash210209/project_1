// pages/details.js

import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { Card, CardContent, Box } from '@mui/material';
import Timelinecomponent from '../src/components/Timelinecomponent';

const Details = () => {
    const router = useRouter();


    const handleBackClick = (rowData) => {
        router.push({
            pathname: '/IPOtable',
            query: {

            },
        });
    };
    const { id, IPOname, issuesize, pricerange, mininvestamount, mininvestdetail, daterange, iconUrl, issuedates, Listedon, listedprice, listinggains, listinggainspercent } = router.query; // Get query parameters
    return (
        <Grid container>
            <Grid container style={{ padding: "8px" }} >
                <Grid item xs={1} sm={1} md={1} className="hidden sm:block" style={{ padding: "10px" }}>
                    <img onClick={() => handleBackClick()} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReepD7uYxKxw4KvDdWjnT5atmQK9jamVvCug&s" style={{ height: "24px", width: "24px", marginRight: "10px", cursor: "pointer" }} />

                </Grid>
                <Grid item xs={6} sm={7} md={7} style={{ padding: "10px", fontFamily: "sora" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={iconUrl} style={{ height: "40px", width: "40px", marginRight: "10px" }} />
                        <div>
                            <Typography component="div" style={{ lineHeight: "1", marginBottom: "4px" }}>
                                <span style={{ marginTop: "4px", fontFamily: "sora", fontWeight: 'bold' }}>{IPOname}</span>
                            </Typography>
                            <Typography component="div" style={{ fontSize: "12px", color: "#000", lineHeight: "1", fontFamily: "sora", color: "#4d4e4e" }}>
                                IPO Private Limited
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1} sm={2} md={2} className="hidden sm:block" style={{ padding: "10px", display: "flex", justifyContent: "flex-end" }}>
                    <img src="https://static-00.iconduck.com/assets.00/document-download-icon-256x255-y5kvricj.png" style={{ height: "24px", width: "24px", }} />
                </Grid>
                <Grid item xs={4} sm={2} md={2}
                    //  className="hidden sm:block" //tailwind working
                    style={{ padding: "10px" }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: "sora",
                            fontSize: { xs: '10px', sm: '12px' }, // Responsive font size using tailwind css file which i have created
                            backgroundColor: '#00004d',
                            color: '#fff',
                            padding: { xs: '4px 12px', sm: '6px 20px' }, // Responsive padding
                            borderRadius: '12px',
                            '&:hover': {
                                backgroundColor: '#000080',
                            },
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Apply Now
                    </Button>

                </Grid>
            </Grid>



            <Card style={{ border: "1px solid rgb(191 191 191)", width: "100%", margin: "8px", borderRadius: "4px" }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} style={{ paddingBottom: "2px", fontFamily: 'sora', fontWeight: 'bold' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "sora",
                                    fontWeight: "bold",
                                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size using tailwind css file which i have createds
                                }}
                            >
                                IPO details
                            </Typography>
                        </Grid>


                        <Card
                            style={{
                                border: "1px solid rgb(191, 191, 191)",
                                borderRadius: "4px",
                                width: "100%",
                                margin: "8px",
                                marginBottom: "1px",
                            }}
                        >
                            <CardContent>
                                <Grid container>
                                    {/* Issue Size */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Issue size
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {issuesize}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Price Range */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Price range
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {pricerange}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Minimum Amount */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Minimum amount
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {mininvestamount}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Lot Size */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Lot size
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {mininvestdetail}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Issue Dates */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Issue dates
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {issuedates}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Listed On */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Listed on
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {Listedon}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Listed Price */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Listed price
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {listedprice}
                                            </Typography>
                                        </div>
                                    </Grid>

                                    {/* Listing Gains */}
                                    <Grid item xs={6} sm={3} style={{ padding: "10px" }}>
                                        <div>
                                            <Typography
                                                sx={{
                                                    marginBottom: "4px",
                                                    fontSize: { xs: "10px", sm: "12px" }, // Responsive font size using tailwind css file which i have created
                                                    color: "#4d4e4e",
                                                    fontFamily: "sora",
                                                }}
                                            >
                                                Listing gains
                                            </Typography>
                                            <Typography
                                                sx={{ fontFamily: "sora", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px" } }} // Responsive font size using tailwind css file which i have created
                                            >
                                                {listinggains} <span style={{ color: "red" }}>{listinggainspercent}</span>
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                    </Grid>
                </CardContent>
            </Card>


            <Grid container style={{ padding: "8px" }} >
                <Grid item xs={12} sm={12} md={12} style={{ border: "1px solid rgb(191 191 191)", borderRadius: "4px", padding: "10px" }}>
                    <h4>Timeline</h4>
                    <Timelinecomponent />
                </Grid>
            </Grid>
            <Card
                className="border sm:border-gray-300 rounded-lg my-2 px-2 sm:px-4 sm:py-2"
                style={{
                    borderWidth: "1px",
                    borderColor: "rgb(191, 191, 191)", 
                    borderRadius: "4px",
                    margin: "8px",
                    padding: "10px",
                    paddingTop: "0px",
                }}
            >
                <CardContent>
                    <Typography variant="h6" sx={{ fontFamily: "Sora", fontWeight: "bold" }}>
                        About the company
                    </Typography>
                    <Typography component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Details;
