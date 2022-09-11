import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 3, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Contact Us</Box>
                            <Box> Telp 087738123457</Box>
                            <Box> WA 082928392001</Box>
                            <Box> Avaiable Everyday 24 Hours</Box>
                            <Box> Universitas Pembangunan Nasional Veteran Jakarta</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About Us</Box>
                                <Box>
                                    <Link to="Home">
                                        Team
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="Home">
                                        Our Story
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="Home">
                                        Careers
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Legal
                                <Box>
                                    <Link to="Home">
                                        Terms & Conditions
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="Home">
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="Home">
                                        Terms of Us
                                    </Link>

                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer >
    )
}