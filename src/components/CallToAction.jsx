import React from 'react';
import { Typography, Button, Paper, Grid } from '@mui/material';

function CallToAction() {
  return (
    <Paper className="mt-8 p-6 bg-blue-600 text-white">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" className="font-bold">Want to delve deeper into the program?</Typography>
          <Typography>Share your details to receive expert insights from our program team!</Typography>
        </Grid>
        <Grid item xs={12} sm={4} className="text-right">
          <Button variant="contained" color="secondary" className="mt-2 bg-white text-blue-600">
            Get in touch
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CallToAction;