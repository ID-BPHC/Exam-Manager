import { styled, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import { AppContext } from '../contexts';
import { PageTitle } from '../components/PageTitle';
import { APP_TITLE, PAGE_TITLE_INVIGILATION } from '../utils/constants';

export const InvigilationReport = () => {
  const context = useContext(AppContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    setIsProcessing(true);
    try {
      let result = await axios.get('http://localhost:5000/invigilation-reports');
      alert("success");
    } catch (e) {
      console.error(e);
    }
    setIsProcessing(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_INVIGILATION} | {APP_TITLE}
        </title>
      </Helmet>
      <PageTitle title={PAGE_TITLE_INVIGILATION} />
      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
              <Grid item md={12}>
                <FormControl>
                  <FormLabel id="algo">Choose Action</FormLabel>
                  <RadioGroup
                    defaultValue="single"
                  >
                    <FormControlLabel value="single" control={<Radio />} label="Generate Reports" />
                    <FormControlLabel value="double" control={<Radio />} label="Mail Reports" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <br/>
              <Grid item md={12}>
                <LoadingButton 
                  type='submit' 
                  variant='contained' 
                  color='primary'
                  loading={isProcessing}
                >
                  Generate Reports
                </LoadingButton>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </>
  );
};
