import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { clsx } from 'clsx';
export default function Header(props) {
    const location = useLocation()
    const split = location.pathname.split("/")
    return (
        <Grid container className="p-5">
            {console.log(split[1])}
            <Grid item lg={8}>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                            <Link to="Home" className="justify-center text-xl font-poppins float-left font-bold text-blueCustom">weCare</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={4}>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <NavLink to="About" className={clsx('pt-1 text-base font-poppins float-left font-semibold', split[1] === 'About' ? "text-blueCustom" : "text-disabledColor")}>About Us</NavLink>
                    </Grid>
                    <Grid item lg={4}>
                        <NavLink to="Consult" className={clsx('pt-1 text-base font-poppins float-left font-semibold', split[1] === 'Consult' ? "text-blueCustom" : "text-disabledColor")}>Consult</NavLink>
                    </Grid>
                    <Grid item lg={4}>
                        <NavLink to="Care" className={clsx('pt-1 text-base font-poppins float-left font-semibold', split[1] === 'Care' ? "text-blueCustom" : "text-disabledColor")}>Care</NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}