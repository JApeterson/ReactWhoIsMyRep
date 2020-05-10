import React from "react";
import { FormControl, Select, MenuItem, InputLabel, Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import states from './States'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    }
}));
const Form = props => {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="flex-start">
                <Typography color="primary" variant="h5">Who's My Representative?</Typography>
            </Grid>
            <Grid container justify="flex-start">
                <FormControl variant="outlined" className={classes.formControl} style={{ marginLeft: 0 }}>
                    <InputLabel id="officialLabel">Official</InputLabel>
                    <Select
                        labelId="officialselectlabelid"
                        id="officialselectid"
                        value={props.dropDownOfficial}
                        onChange={props.handleDropDowns("dropDownOfficial")}
                        label="official"
                    >
                        <MenuItem value={"1"}>Representatives</MenuItem>
                        <MenuItem value={"2"}>Senators</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.usState}
                        onChange={props.handleDropDowns("usState")}
                        label=""
                    >
                        {states.map((each, i) => {
                            return (<MenuItem key={i} value={each.value}>{each.label}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
                {!props.submitting ?
                    <Button style={{ margin: 8 }} color="primary" variant="outlined" disabled={props.dropDownOfficial === "" || props.usState === ""} onClick={props.submit}>Submit</Button>
                    :
                    <CircularProgress style={{ marginLeft: 32, marginTop: 8 }}></CircularProgress>}
            </Grid>
        </>
    )
}
export default Form