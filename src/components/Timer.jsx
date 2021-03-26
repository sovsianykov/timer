
import * as React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {useState} from "react";




export  default function Timer() {
    const body = document.querySelector('body')
    const h2 = document.querySelector('h2')
    console.log(h2)
const onStartHandler =(e) => {
    e.disabled = true
    let i = 0
    const interval = setInterval(() => {

        if (i < 60) {
        let    div = document.createElement('div')
            div.textContent = i.toString()
            h2.appendChild(div)
            i++


        } else {
            clearInterval(interval)
            e.disabled = false
        }
    },1000)

}


    return (
        <Box>
            <Grid container justify='center' >
            <Grid item md={6} sm={6} >
                <Button id='b1' variant='contained' color='primary' onClick={onStartHandler}  >Start</Button>
                <Button variant='contained' color='secondary'>Wait</Button>
                <Button variant='contained' >Reset</Button>
            </Grid>
        </Grid>
            <Grid container justify='center' >
                <Grid item md={4} sm={4}>
                   <h2 >

                   </h2>
                </Grid>
                <Grid item md={4} sm={4}>
                    <Typography variant='h2' color='textPrimary'>00</Typography>
                </Grid>
                <Grid item md={4} sm={4}>
                    <Typography variant='h2' color='textPrimary'>00</Typography>
                </Grid>
            </Grid>

        </Box>
    );
};