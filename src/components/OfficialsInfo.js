import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, TextField, FormControl } from "@material-ui/core";

const OfficialsInfo = props => {
    const [array, setArray] = useState([])
    useEffect(() => {
        if (props.officialsInfo.length > 0) setArray(props.officialsInfo)
    }, [props.officialsInfo])
    return (
        <Grid item xs={6}>
            <Typography align="left" variant="h6">Info</Typography>
            <Card>
                <CardContent>
                    <Grid item xs={12}>
                        <FormControl style={{ width: '100%' }}>
                            <TextField
                                style={{ margin: 10, backgroundColor: "#e9ecf2" }}
                                id="First-name"
                                label="First Name"
                                value={array.length > 0 ? array[0].name.split(' ').slice(0, -1).join(' ') : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <TextField
                                style={{ margin: 10, backgroundColor: "#e9ecf2" }}
                                id="Last-Name"
                                label="Last Name"
                                value={array.length > 0 ? array[0].name.split(' ').slice(-1).join(' ') : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <TextField
                                style={{ margin: 10, backgroundColor: "#e9ecf2" }}
                                id="District"
                                label="District"
                                value={array.length > 0 ? array[0].district : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <TextField
                                style={{ margin: 10, backgroundColor: "#e9ecf2" }}
                                id="Phone"
                                label="Phone"
                                value={array.length > 0 ? array[0].phone : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <TextField
                                style={{ margin: 10, backgroundColor: "#e9ecf2" }}
                                id="Office"
                                label="Office"
                                value={array.length > 0 ? array[0].office : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default OfficialsInfo