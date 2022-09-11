import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from "react-router-dom";
import { Grid } from '@mui/material';
import imgHand from '../../Assets/images/3.svg'
export default function Home() {
    return (
        <Grid container className='mt-20 pl-20 pr-20'>
            <Grid item lg={8}>
                <Grid container className='mt-20'>
                    <Grid item lg={12}>
                        <p className="float-left">Because Your Life is Precious,</p>
                    </Grid>
                    <Grid item lg={12}>
                        <p className="float-left">We Are There For You</p>
                    </Grid>
                    <Grid item lg={12}>
                        <p className="float-left">Nothing is more valuable than your life, therefore if you need help contact us immediately.</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={4}>
                <img src={imgHand} />
            </Grid>
        </Grid>
    )
}