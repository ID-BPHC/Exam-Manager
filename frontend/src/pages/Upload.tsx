import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import FormData from 'form-data';

import { AppContext } from '../contexts';
import { PageTitle } from '../components/PageTitle';
import { APP_TITLE, PAGE_TITLE_UPLOAD } from '../utils/constants';

export const Upload = () => {
  const context = useContext(AppContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProcessing(true);
    try {
      const form = new FormData();
      const file = e.target.files[0];
      const fileName = file.name;

      form.append('key', e.target.id);
      form.append('file', file, fileName);

      await axios.post('http://localhost:5000/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (e) {
      console.error(e);
    }
    setIsProcessing(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_UPLOAD} | {APP_TITLE}
        </title>
      </Helmet>
      <PageTitle title={PAGE_TITLE_UPLOAD} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Room List
              </Typography>
              <b>Format:</b> Room_Number, Capacity
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="room" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Exam Schedule
              </Typography>
              <b>Format:</b> Course_Code, Course_Name, Course_Count, Date, Start_Time
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="exam" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Student List
              </Typography>
              <b>Format:</b> Student_ID, Course_Code
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="student" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Faculty List
              </Typography>
              <b>Format:</b> psrn, name, department, email
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="faculty" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Scholar List
              </Typography>
              <b>Format:</b> psrn, name, department, email
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="scholar" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Chambers
              </Typography>
              <b>Format:</b> psrn, chamber
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="chamber" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Course Teacher
              </Typography>
              <b>Format:</b> Course Code, Course Title, Class Instructor, Course Admin
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="course-teacher" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Leaves
              </Typography>
              <b>Format:</b> psrn, start_date_time, end_date_time (date format - DD/MM/YYYY HH:MM)
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="leaves" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Max Duties
              </Typography>
              <b>Format:</b> psrn, max_duties
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="faculty" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Room Allotment CSV file
              </Typography>
              <b>Format:</b> as generated by the room allotment tool
              <br />
              <b>Last Updated:</b> 09-02-2022 11:00:00 am
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Download
              </Button>
              <Button size="small" color="primary" component="label">
                {isProcessing ? 'Uploading...' : 'Upload'}
                <input type="file" onChange={handleSubmit} id="room-allotment" hidden />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
