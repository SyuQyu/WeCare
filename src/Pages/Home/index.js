import React, { useState, useEffect, useRef } from 'react'
import { useNavigate  } from "react-router-dom";
import { Grid, } from '@mui/material';
import imgHand from '../../Assets/images/3.svg';
import flag from '../../Assets/images/flag.svg';
import heart from '../../Assets/images/heart-pulse.svg';
import users from '../../Assets/images/users.svg';
import phone from '../../Assets/images/phone.svg';
import smile from '../../Assets/images/smile.svg';
import '../../Assets/css/styles.css';
export default function Home(props) {
    let navigate = useNavigate(); 
    const aboutSection = useRef(null);
    const careSection = useRef(null);
    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <Grid container className='mt-20 mb-20 pl-20 pr-20 h-fit'>
                <Grid item lg={8}>
                    <Grid container className='mt-20 pl-8'>
                        <Grid item lg={12} xl={12}>
                            <p className="text-left font-poppins text-2xl font-medium text-blueCustom mb-4">Because Your Life is Precious,</p>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <p className="text-left font-poppins text-5xl font-semibold text-blueCustom mb-4">We Are There For You</p>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <div className='w-2/3'>
                                <p className="text-left font-poppins text-xl text-blueMedium mb-8">Nothing is more valuable than your life, therefore if you need help contact us immediately.</p>
                            </div>
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <div className='grid gap-4 grid-cols-2 w-1/3'>
                                <button onClick={() => scrollDown(aboutSection)} className="btn btn--color float-left">Consult</button>
                                <button onClick={() => scrollDown(careSection)} className="btn btn--color float-left">Care</button>
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
            <Grid container className='pl-20 pr-20 h-fit mb-20' ref={aboutSection}>
                <Grid item lg={12} xl={12}>
                    <p className="my-20 text-3xl font-extrabold text-blueCustom">Get To More About Us</p>
                </Grid>
                <Grid item lg={12} xl={12}>
                    <Grid container spacing={5}>
                        <Grid item lg={4} xl={4}>
                            <div className="w-2/3 mx-auto">
                                <div className="bg-blueMedium h-[300px] p-3 rounded-3xl shadow-md">
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
                                <div className="bg-blueSoft h-[300px] p-3 rounded-3xl shadow-md">
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
                                <div className="bg-blueMedium h-[300px] p-3 rounded-3xl shadow-md">
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

            <Grid container className='pl-20 pr-20 h-fit mb-20' ref={careSection}>
                <Grid container className='pl-10 pr-10 h-fit mb-20'>
                    <Grid item lg={12} xl={12}>
                        <p className="my-20 text-3xl font-extrabold text-blueCustom">We Care About You</p>
                    </Grid>
                    <Grid item lg={12} xl={12}>
                        <Grid container spacing={10}>
                            <Grid item lg={2} xl={2} />
                            <Grid item lg={4} xl={4}>
                                <div className="w-full">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <p className="text-black font-bold text-xl pb-5">Contact Us For Report</p>
                                            </div>
                                            <div className="w-full pb-5">
                                                <center>
                                                    <img src={phone} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm mt-3">Let us know if there are signs of suicide wherever you are.</p>
                                            </div>
                                            <div className="w-full">
                                                <button onClick={e => navigate('/contact')} className="btn btn--color float-center w-1/3">Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={4} xl={4}>
                                <div className="w-full">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <p className="text-black font-bold text-xl pb-5">Join Community</p>
                                            </div>
                                            <div className="w-full pb-5">
                                                <center>
                                                    <img src={smile} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm mt-3">Join the community and have a fun experience.</p>
                                            </div>
                                            <div className="w-full">
                                                <button className="btn btn--color float-center w-1/3">Join</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={2} xl={2} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}