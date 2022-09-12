import React, { useState, useEffect } from 'react'
import { Grid, CardActions, CardContent, Card } from '@mui/material';
import { dataPsychiatrist, dataPsychologist } from './dataDoctor.js';
export default function Consult() {
    return (
        <div className="p-10">
            <Grid item lg={12} xl={12}>
                <p className="text-left pl-10 text-3xl font-extrabold text-blueCustom">Get Your Best  Psychiatrist or Psychologist</p>
            </Grid>
            <Grid item lg={12} xl={12}>
                <p className="text-left pl-10 my-10 text-xl font-bold text-blueCustom">Psychiatrist</p>
            </Grid>
            <Grid item lg={12} xl={12}>
                <Grid container spacing={5}>
                    {
                        dataPsychiatrist?.map((data, index) => (
                            <Grid item lg={3} xl={3} key={index}>
                                <div className="w-5/6 mx-auto">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <center>
                                                    <img src={data.img} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black font-bold">{data.name}</p>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm text-left">{data.experience}</p>
                                            </div>
                                            <div className="w-full">
                                                <div className="flex flex-row justify-between items-center">
                                                    <p className="text-black text-sm text-left">{data.contact}</p>
                                                    <p className="text-black text-sm text-left">{data.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            <Grid item lg={12} xl={12}>
                <p className="text-left pl-10 my-10 text-xl font-bold text-blueCustom">Psychiatrist</p>
            </Grid>
            <Grid item lg={12} xl={12}>
                <Grid container spacing={5} className="pb-6">
                    {
                        dataPsychologist?.map((data, index) => (
                            <Grid item lg={3} xl={3} key={index}>
                                <div className="w-5/6 mx-auto">
                                    <div className="bg-blueSoft h-fit p-3 rounded-3xl shadow-md">
                                        <div className="flex flex-col space-y-4 p-3">
                                            <div className="w-full">
                                                <center>
                                                    <img src={data.img} />
                                                </center>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black font-bold">{data.name}</p>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-black text-sm text-left">{data.experience}</p>
                                            </div>
                                            <div className="w-full">
                                                <div className="flex flex-row justify-between items-center">
                                                    <p className="text-black text-sm text-left">{data.contact}</p>
                                                    <p className="text-black text-sm text-left">{data.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    )
}