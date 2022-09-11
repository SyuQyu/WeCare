import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { Grid, CardActions, CardContent, Card } from '@mui/material';
import imgHand from '../../Assets/images/3.svg';
import flag from '../../Assets/images/flag.svg';
import heart from '../../Assets/images/heart-pulse.svg';
import users from '../../Assets/images/users.svg';
import Group1 from '../../Assets/images/Group 1.svg';
import '../../Assets/css/styles.css';
export default function Home() {
    return (
        <>
            <Grid container className='mt-20 mb-20 pl-20 pr-20 h-fit'>
                <Grid item lg={8}>
                    <Grid container className='mt-20 pl-8'>
                        <Grid item lg={12} xl={12}>
                            <p className="text-left font-poppins text-2xl font-medium text-blueCustom mb-4">Because Your Life is Precious,</p>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <p className="text-left font-poppins text-5xl font-semibold text-blueCustom mb-8">We Are There For You</p>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <div className='w-2/3'>
                                <p className="text-left font-poppins text-xl text-blueMedium mb-4">Nothing is more valuable than your life, therefore if you need help contact us immediately.</p>
                            </div>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <div className='grid gap-4 grid-cols-2 w-1/3'>
                                <button className="btn btn--color float-left">Consult</button>
                                <button className="btn btn--color float-left">Care</button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <center>
                        <img src={imgHand} />
                    </center>
                </Grid>
            </Grid>
            <Grid container className='pl-20 pr-20 h-fit mb-20'>
                <Grid item lg={12} xl={12}>
                    <p className="my-20 text-3xl font-extrabold text-blueCustom">Get To More About Us</p>
                </Grid>
                <Grid item lg={12} xl={12}>
                    <Grid container spacing={5}>
                        <Grid item lg={4} xl={4}>
                            <div className="w-2/3 mx-auto">
                                <div className="bg-blueMedium h-[300px] p-3 rounded-3xl">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-white font-bold">Best Psychiatrist / Psychologist</p>
                                        </div>
                                        <div className="w-full">
                                            <center>
                                                <img src={heart} />
                                            </center>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-white text-sm">We provide the best psychiatrists and psychologists who can help you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} xl={4}>
                            <div className="w-2/3 mx-auto">
                                <div className="bg-blueSoft h-[300px] p-3 rounded-3xl">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-black font-bold">We Care About Your</p>
                                            <p className="text-black font-bold">Life</p>
                                        </div>
                                        <div className="w-full">
                                            <center>
                                                <img src={flag} />
                                            </center>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-black text-sm mt-3">Let us know if there are signs of suicide wherever you are.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} xl={4}>
                            <div className="w-2/3 mx-auto">
                                <div className="bg-blueMedium h-[300px] p-3 rounded-3xl">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-white font-bold">We Are There For</p>
                                            <p className="text-white font-bold">You</p>
                                        </div>
                                        <div className="w-full h-[100px]">
                                            <center>
                                                <img src={users} />
                                            </center>
                                        </div>
                                        <div className="w-full h-[100px]">
                                            <p className="text-white text-sm mt-3">Join our community and find the best friend for you</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className='pl-20 pr-20 h-fit mb-20'>
                <Grid item lg={12} xl={12}>
                    <p className="text-left pl-10 mt-20 text-3xl font-extrabold text-blueCustom">Get Your Best  Psychiatrist or Psychologist</p>
                </Grid>
                <Grid item lg={12} xl={12}>
                    <p className="text-left pl-10 my-10 text-xl font-bold text-blueCustom">Psychiatrist</p>
                </Grid>
                <Grid item lg={12} xl={12}>
                    <Grid container spacing={5}>
                        <Grid item lg={3} xl={3}>
                            <div className="w-5/6 mx-auto">
                                <div className="bg-blueSoft h-[380px] p-3 rounded-3xl">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <center>
                                                <img src={Group1} />
                                            </center>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-black font-bold">Dr. Agus Utomo Sp.KJ</p>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-black text-sm text-left">1 Years</p>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-row justify-between items-center">
                                                <p className="text-black text-sm text-left">+62 86789085432</p>
                                                <p className="text-black text-sm text-left">90%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </>
    )
}