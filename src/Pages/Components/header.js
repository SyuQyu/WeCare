import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { clsx } from 'clsx';
export default function Header(props) {
    const location = useLocation()
    const split = location.pathname.split("/")
    return (
        <Grid container className="p-5">
            <Grid item xl={8} lg={8} md={8} sm={8} xs={6}>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12}>
                            <p className="md:ml-24 sm:ml-5 justify-center text-xl font-poppins float-left font-bold text-blueCustom">weCare</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={6}>
                <Grid container spacing={2}>
                    <Grid item xl={4} lg={4} md={4} sm={4}>
                        {/* <NavLink to="About" className={clsx('pt-1 text-base font-poppins float-left font-semibold', split[1] === 'About' ? "text-blueCustom" : "text-disabledColor")}>About Us</NavLink> */}
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4}>
                    <NavLink to="Home" className={clsx('pt-1 text-base font-poppins float-left font-bold hover:text-blueCustom', split[1] === 'Home' ? "text-blueCustom" : "text-disabledColor")}>Home</NavLink>
                        {/* <NavLink to="Care" className={clsx('pt-1 text-base font-poppins float-left font-semibold', split[1] === 'Care' ? "text-blueCustom" : "text-disabledColor")}>Care</NavLink> */}
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4}>
                        <NavLink to="Consult" className={clsx('pt-1 text-base font-poppins float-left font-bold hover:text-blueCustom', split[1] === 'Consult' ? "text-blueCustom" : "text-disabledColor")}>Consult</NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}