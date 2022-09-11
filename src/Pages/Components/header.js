import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export default function Header() {
    return (
        <Grid container>
            <Grid item lg={6}>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <div>
                            <p className="font-poppins">WeCare</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={6}>
                <Grid container spacing={2}>
                    <Grid item lg={3}>
                        <p>lg=8</p>
                    </Grid>
                    <Grid item lg={3}>
                        <p>lg=4</p>
                    </Grid>
                    <Grid item lg={3}>
                        <p>lg=4</p>
                    </Grid>
                    <Grid item lg={3}>
                        <p>lg=8</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}