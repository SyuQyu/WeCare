import React, { useState, useEffect } from 'react'
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Grid, } from '@mui/material';
import { useNavigate  } from "react-router-dom";

export default function Care() {
    let navigate = useNavigate(); 
    const CustomTextField = styled(TextField)({
        '& input:valid:focus + fieldset': {
            borderColor: '#051287',
            borderLeftWidth: 6,
            padding: '4px !important',// override inline-style
        }
    });
    return (
        <>
            <p className="mt-5 text-2xl font-extrabold text-blueCustom">Formulir</p>
            <p className="mt-2 text-base text-blueCustom">Harap Isi Formulir Dengan Benar</p>
            <Grid container className="mt-6">
                <Grid item xl={2} lg={2} />
                <Grid item xl={8} lg={8}>
                    <div className="flex flex-col p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md">
                        <CustomTextField
                            label="Nama"
                            required
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <CustomTextField
                            label="Jenis Kelamin"
                            required
                            variant="outlined"
                            style={{ marginTop: "20px" }}
                            id="validation-outlined-input"
                        />
                        <CustomTextField
                            label="Alamat"
                            required
                            variant="outlined"
                            style={{ marginTop: "20px" }}
                            id="validation-outlined-input"
                        />
                        <CustomTextField
                            label="Nomor Telepon"
                            required
                            variant="outlined"
                            style={{ marginTop: "20px" }}
                            id="validation-outlined-input"
                        />
                        <div className="w-1/4">
                        <button onClick={e => navigate('/home')} className="w-full mt-5 btn btn--color float-left">Kirim</button>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={2} lg={2} />
            </Grid>
        </>

    )
}