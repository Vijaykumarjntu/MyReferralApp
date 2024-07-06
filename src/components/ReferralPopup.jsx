import React, { useState } from 'react';
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';

function ReferralPopup({ open, onClose }) {
  const [referrer, setReferrer] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [referee, setReferee] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [loading,setLoading]  = useState(false);

  const handleReferrerChange = (e) => {
    setReferrer({ ...referrer, [e.target.name]: e.target.value });
  };

  const handleRefereeChange = (e) => {
    setReferee({ ...referee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', {
        referrerName: referrer.name,
        referrerEmail: referrer.email,
        referrerPhone: referrer.phone,
        refereeName: referee.name,
        refereeEmail: referee.email,
        refereePhone: referee.phone,
      });
      console.log(response);
      
      setSnackbar({ 
        open: true, 
        message: 'Referral submitted successfully!', 
        severity: 'success' 
      });
      onClose();
      // Reset form
      setReferrer({ name: '', email: '', phone: '' });
      setReferee({ name: '', email: '', phone: '' });
    } catch (error) {
      setSnackbar({ 
        open: true, 
        message: error.response?.data?.error || 'An error occurred', 
        severity: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <h3>Referrer Details</h3>
              <TextField
                fullWidth
                margin="normal"
                label="Your Name"
                name="name"
                value={referrer.name}
                onChange={handleReferrerChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Your Email"
                name="email"
                type="email"
                value={referrer.email}
                onChange={handleReferrerChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Your Phone"
                name="phone"
                value={referrer.phone}
                onChange={handleReferrerChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Referee Details</h3>
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Name"
                name="name"
                value={referee.name}
                onChange={handleRefereeChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Email"
                name="email"
                type="email"
                value={referee.email}
                onChange={handleRefereeChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Phone"
                name="phone"
                value={referee.phone}
                onChange={handleRefereeChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            color="primary" 
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Referral'}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ReferralPopup;