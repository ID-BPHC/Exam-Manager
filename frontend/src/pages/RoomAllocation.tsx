import { styled, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import React, {useState} from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';

import { AppContext } from '../contexts';
import { PageTitle } from '../components/PageTitle';
import { APP_TITLE, PAGE_TITLE_ROOM_ALLOCATION } from '../utils/constants';

export const RoomAllocation = () => {
  const context = useContext(AppContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      let result = await axios.get('http://localhost:5000/room-allotment');
      let blob = new Blob([result.data], {type: 'text/csv'});
      saveAs(blob, 'room-allotment.csv');
    } catch (e) {
      console.error(e);
    }
    setIsProcessing(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_ROOM_ALLOCATION} | {APP_TITLE}
        </title>
      </Helmet>
      <PageTitle title = {PAGE_TITLE_ROOM_ALLOCATION} />
      <Container style={{marginTop: 50}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid item md={12}>
                <FormControl>
                  <FormLabel id="algo">Choose Allotment Algorithm</FormLabel>
                  <RadioGroup
                    defaultValue="single"
                  >
                    <FormControlLabel value="single" control={<Radio />} label="Single Course" />
                    <FormControlLabel value="double" control={<Radio />} label="Double Course" />
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
                  Generate Allotment
                </LoadingButton>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
