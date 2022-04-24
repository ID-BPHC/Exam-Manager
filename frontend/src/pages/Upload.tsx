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

const UploadCard = (props) => {
  const { title, format, id } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <b>Format:</b> {format}
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
  );
};

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
      </Grid>
    </>
  );
};
