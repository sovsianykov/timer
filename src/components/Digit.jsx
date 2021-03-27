
import * as React from 'react';
import { Typography ,Paper ,makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    paper: {
        margin : " 10px 0",
        background: "whitesmoke",
        borderRadius: 3,
        width: 80,

    },


})


const Digit =({digit}) => {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.paper}>
                <Typography variant='h3' align='center'>{digit}</Typography>
            </Paper>
        </>
    );
};
export default Digit
