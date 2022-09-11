import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export default function Header() {
    return (
        <Grid container className="p-5">
            <Grid item lg={8}>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <div>
                            <Link to="Home" className="font-poppins float-left font-bold text-blueCustom">weCare</Link>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={4}>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <Link to="About" className="font-poppins float-left font-medium">About Us</Link>
                    </Grid>
                    <Grid item lg={4}>
                        <Link to="Consult" className="font-poppins float-left font-medium">Consult</Link>
                    </Grid>
                    <Grid item lg={4}>
                        <Link to="Care" className="font-poppins float-left font-medium">Care</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}