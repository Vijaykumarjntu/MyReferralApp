import React from 'react';
import { Typography, Grid } from '@mui/material';

function Footer() {
  return (
    <footer className="mt-8 bg-gray-800 text-white p-8">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-4">Programs</Typography>
          <ul className="list-none p-0">
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Management</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-4">Contact Us</Typography>
          <Typography>Email: admissions@accredian.com</Typography>
          <Typography>Product Management Queries: pm@accredian.com</Typography>
          <Typography>Data Science Admission Helpline: +91 9278535752 (9 AM - 7 PM)</Typography>
          <Typography>Product Management Admission Helpline:+91 9625811093</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-4">Accredian</Typography>
          <ul className="list-none p-0">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Master FAQs</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-4">Follow Us</Typography>
          {/* Add social media icons here */}
        </Grid>
      </Grid>
      <Typography className="mt-8 text-center">
        © 2024 Accredian. A Brand of EdTech Education Pvt Ltd. All Rights Reserved.
      </Typography>
    </footer>
  );
}

export default Footer;