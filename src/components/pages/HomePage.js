import React from 'react';
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Action Imports
import { setTest } from "../../actions/home-actions";

const HomePage = () => {

    const dispatch = useDispatch()
    const { test } = useSelector((state) => state.home)

    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '90vh' }}
            >
                <Grid item xs={6} style={{ maxWidth: '90vw' }}>
                    <Paper style={{ marginTop: "10px", textAlign: "center" }}>
                        <Typography variant="h4" gutterBottom style={{ padding: "10px" }}>
                            {"Home Page"}
                        </Typography>
                        <Typography variant="h5" gutterBottom style={{ padding: "10px" }}>
                            <Fab color="primary" style={{ marginRight: "20px" }} onClick={
                                () => dispatch(setTest(test - 1))
                            }>
                                <RemoveIcon />
                            </Fab>
                            {test}
                            <Fab color="primary" style={{ marginLeft: "20px" }} onClick={
                                () => dispatch(setTest(test + 1))
                            }>
                                <AddIcon />
                            </Fab>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage