import React, { useState, useEffect } from "react";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    header: {
        fontSize: 20,
        color: "blue",
        fontWeight: "bold"
    }
}));
const Officials = props => {
    const classes = useStyles();
    const [array, setArray] = useState([])
    useEffect(() => {
        if (props.allReps.length > 0) setArray(props.allReps)
        if (props.allSenators.length > 0) setArray(props.allSenators)
    }, [props.allReps, props.allSenators])
    return (
        <Grid item xs={5}>
            <Typography align="left" variant="h6">List {props.allReps.length > 0 && "/ Representatives"}{props.allSenators.length > 0 && "/ Senators"}</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ backgroundColor: "#e9ecf2" }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Party</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.map((each, i) => {
                            return (
                                <TableRow onClick={props.openOfficialsInfo(each)} style={{ cursor: "pointer" }} hover key={i}>
                                    <TableCell>{each.name}</TableCell>
                                    <TableCell align="right">{each.party}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
export default Officials