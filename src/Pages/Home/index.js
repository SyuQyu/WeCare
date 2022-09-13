import React, { useState, useEffect, useRef } from 'react'
import { useNavigate  } from "react-router-dom";
import { Grid, } from '@mui/material';
//Gambar tangan dari canva
import imgHand from '../../Assets/images/3.svg';
//Gambar dari plugin figma
import flag from '../../Assets/images/flag.svg';
//Gambar dari plugin figma
import heart from '../../Assets/images/heart-pulse.svg';
//Gambar dari plugin figma
import users from '../../Assets/images/users.svg';
//Gambar dari plugin figma
import phone from '../../Assets/images/phone.svg';
//Gambar dari plugin figma
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
            <Grid container className='xl:px-20 lg:px-20 md:px-20 sm:px-5 md:mt-20 sm:mt-5 mb-20 h-fit'>
                <Grid item lg={8} xl={8} md={8} sm={8} xs={12} className="xs:px-5 lg:px-0">
                    <Grid container className='md:mt-20 sm:mt-5 md:pl-8'>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <p className="xl:text-left lg:text-left md:text-left sm:text-center font-poppins md:text-2xl sm:font-medium text-blueCustom mb-4">Karena Hidupmu Sangat Berharga,</p>
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <p className="xl:text-left lg:text-left md:text-left sm:text-center font-poppins xl:text-5xl lg:text-5xl md:text-4xl sm:text-xl font-semibold text-blueCustom mb-4">Kami Hadir Untukmu</p>
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <div className='xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full'>
                                <p className="xl:text-left lg:text-left md:text-left sm:text-center font-poppins md:text-xl text-blueMedium mb-8">Tidak ada yang lebih berharga dari hidupmu, jika butuh bantuan kontak kami secepatnya.</p>
                            </div>
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} className="xl:ml-0 lg:ml-0 md:ml-0 sm:ml-20">
                            <div className='grid gap-4 grid-cols-2 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/3 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-5'>
                                <button onClick={() => scrollDown(aboutSection)} className="btn btn--color float-left">Consult</button>
                                <button onClick={() => scrollDown(careSection)} className="btn btn--color float-left">Care</button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} xl={4} md={4} sm={4} xs={12}>
                    <center className="xl:pt-5 lg:pt-5 md:pt-12 sm:pt-10">
                        <img className="xl:w-2/3 lg:w-full md:w-full sm:w-2/3 xl:h-2/3 lg:h-full md:h-full sm:h-2/3" src={imgHand} />
                    </center>
                </Grid>
            </Grid>
            <Grid container className='px-20 h-fit pt-10 md:mb-20 sm:mb-5' ref={aboutSection}>
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                    <p className="xl:my-20 lg:my-20 md:my-10 sm:my-10 xs:my-10 text-3xl font-extrabold text-blueCustom">Tentang Kami</p>
                </Grid>
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={5}>
                        <Grid item lg={4} xl={4} md={4} sm={12} xs={12}>
                            <div className="xl:w-2/3 lg:w-full md:w-3/4 sm:w-full mx-auto">
                                <div className="bg-blueMedium h-fit p-3 rounded-3xl shadow-md">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-white font-bold">Psikiater / Psikolog</p>
                                            <p className="text-white font-bold">Terbaik</p>
                                        </div>
                                        <div className="w-full h-fit">
                                            <center>
                                                <img className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xl:h-1/3 lg:h-1/3 md:h-1/3 sm:h-1/3 " src={heart} />
                                            </center>
                                        </div>
                                        <div className="w-full h-fit">
                                            <p className="text-white text-sm">Kami menyediakan psikiater/psikolog terbaik untukmu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} xl={4} md={4} sm={12} xs={12}>
                            <div className="xl:w-2/3 lg:w-full md:w-3/4 sm:w-full mx-auto">
                                <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-black font-bold">Kami Peduli Akan</p>
                                            <p className="text-black font-bold">Hidupmu</p>
                                        </div>
                                        <div className="w-full h-fit">
                                            <center>
                                                <img className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xl:h-1/3 lg:h-1/3 md:h-1/3 sm:h-1/3 " src={flag} />
                                            </center>
                                        </div>
                                        <div className="w-full h-fit">
                                            <p className="text-black text-sm mt-3">Beritahu kami apabila ada tanda</p>
                                            <p className="text-black text-sm">bunuh diri disekitarmu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} xl={4} md={4} sm={12} xs={12}>
                            <div className="xl:w-2/3 lg:w-full md:w-3/4 sm:w-full mx-auto">
                                <div className="bg-blueMedium h-fit p-3 rounded-3xl shadow-md">
                                    <div className="flex flex-col space-y-4 p-3">
                                        <div className="w-full">
                                            <p className="text-white font-bold">Kami Ada</p>
                                            <p className="text-white font-bold">Untukmu</p>
                                        </div>
                                        <div className="w-full h-fit">
                                            <center>
                                                <img className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xl:h-1/3 lg:h-1/3 md:h-1/3 sm:h-1/3 " src={users} />
                                            </center>
                                        </div>
                                        <div className="w-full h-fit">
                                            <p className="text-white text-sm mt-3">Join komunitas kami dan temukan</p>
                                            <p className="text-white text-sm">teman terbaik untukmu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className='md:px-20 sm:px-5 h-fit md:mb-20 sm:mb-5' ref={careSection}>
                <Grid container className='pl-10 pr-10 h-fit mb-20'>
                    <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                        <p className="xl:my-20 lg:my-20 md:mt-10 sm:mt-10 xs:mt-10 text-3xl font-extrabold text-blueCustom">Kami Ada Untukmu</p>
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={5}>
                            <Grid item lg={2} xl={2} md={2} sm={0} xs={0} />
                            <Grid item lg={4} xl={4} md={4} sm={12} xs={12}>
                                <div className="w-full">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <p className="text-black font-bold text-xl pb-5">Kontak Kami Untuk Lapor</p>
                                            </div>
                                            <div className="w-full pb-5">
                                                <center>
                                                    <img className="xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-2/3 xs:w-1/3 xl:h-1/3 lg:h-1/3 md:h-2/3 sm:h-2/3 xs:h-1/3" src={phone} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm mt-3">Beritahu kami apabila ada tanda bunuh diri disekitarmu.</p>
                                            </div>
                                            <div className="w-full">
                                                <button onClick={e => navigate('/contact')} className="btn btn--color float-center md:w-1/3 sm:w-full">Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={4} xl={4} md={4} sm={12} xs={12}>
                                <div className="w-full">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <p className="text-black font-bold text-xl pb-5">Join Komunitas</p>
                                            </div>
                                            <div className="w-full pb-5">
                                                <center>
                                                    <img className="xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-2/3 xs:w-1/3 xl:h-1/3 lg:h-1/3 md:h-2/3 sm:h-2/3 xs:h-1/3" src={smile} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm mt-3">Join komunitas kami dan dapatkan pengalaman seru untukmu.</p>
                                            </div>
                                            <div className="w-full">
                                                <button className="btn btn--color float-center md:w-1/3 sm:w-full">Join</button>
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