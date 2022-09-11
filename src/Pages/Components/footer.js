import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import link from '@mui/material/Link';

export default function Footer(){
    return (
    <footer>
    <Box
     px ={{ xs: 3, sm: 10}}
     py ={{ xs: 3, sm: 10}}
     bgcolor="text.secondary"
     color="white"
    >
        <Container maxWidth="lg">
            <Grid container spacing ={5}>
                 <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Contact Us</Box>
                            <Box> Telp 087738123457</Box>
                                <Box> WA 082928392001</Box>
                                    <Box> Avaiable Everyday 24 Hours</Box>
                                        <Box> Universitas Pembangunan Nasional Veteran Jakarta</Box>
                </Grid>
                    <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About Us
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Team
                                    </link>
                                </Box>
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Our Story
                                    </link>
                                </Box>
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Careers
                                    </link>
                                </Box>
                            </Box>
                    </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Legal
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Terms & Conditions
                                    </link>
                                </Box>
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Privacy Policy
                                    </link>
                                </Box>
                                <Box>
                                    <link href = "/" color = "inherit">
                                        Terms of Us
                                    </link>
                                
                                </Box>
                            </Box>
                    </Grid>
            </Grid>
        </Container>
    </Box>
    </footer>
    )
}