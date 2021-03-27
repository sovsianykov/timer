import { interval,Observable } from "rxjs";
import  {filter, map } from  'rxjs/operators'
import * as React from 'react';
import {Box, Button, Grid, Paper, makeStyles} from "@material-ui/core";
import {useState} from "react";
import { showtime } from "./showtime";
import Digit from "./Digit";
const useStyles = makeStyles({
    root: {
        margin : "50px auto",
        background: "antiquewhite",
        paddingTop: 50
    },


})




export  default function Timer() {
    const classes = useStyles()
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)
    const [isTiming, setIsTiming] = useState(false)

// const onStartHandler =() => {
//
//
//    let i = 0,
//        m = 0,
//        h  = 0
// const interval  =  setInterval(() => {
//
//         if (i < 59) {
//           setSec( ++i)
//
//         } else if (m < 59) {
//             setSec(0)
//             i = 0
//             setMin(++m)
//         } else {
//             setMin(0)
//             i = 0
//              m = 0
//             setHour(++h)
//         }
//     }, 500)
// }
const onRxJsHandler = () => {
        let i =0
    const stream$ = new Observable(observer => {

        observer.next(i )
        setInterval(() => observer.next( ++i),1000)

    })
    stream$.subscribe(val => setSec(val))
}
const stopHandler = () => {
        setSec(0)
        setHour(0)
        setMin(0)
}


    return (
        <Box>
            <main className={classes.root}>
            <Grid container  spacing={3} justify='center' >
            <Grid item md={2} sm={2} container justify='center' >
                <Button id='b1' variant='contained'  color='primary' onClick={onRxJsHandler}>Start</Button>
            </Grid>
                <Grid item md={2} sm={2} container justify='center'>

                <Button variant='contained'  color='secondary'>Wait</Button>
            </Grid>
                <Grid item md={2} sm={2} container justify='center'  >

                <Button variant='contained'  onClick={stopHandler} >Reset</Button>
            </Grid>
        </Grid>
            <Grid container spacing={3} justify='center' >
                <Grid item md={2} sm={2} >
                 <Digit digit={showtime[hour]}  />
                </Grid>
                <Grid item md={2} sm={2}>
                    <Digit digit={showtime[min]}/>
                </Grid>
                <Grid item md={2} sm={2} >
                    <Digit digit={showtime[sec]}/>
                </Grid>
            </Grid>
            </main>
        </Box>
    );
};
