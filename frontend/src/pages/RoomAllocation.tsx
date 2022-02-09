import { styled, Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';

import { AppContext } from '../contexts';
import { PageTitle } from '../components/PageTitle';
import { APP_TITLE, PAGE_TITLE_ROOM_ALLOCATION } from '../utils/constants';

export const RoomAllocation = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_ROOM_ALLOCATION} | {APP_TITLE}
        </title>
      </Helmet>
      <PageTitle title = {PAGE_TITLE_ROOM_ALLOCATION} />
    </>
  );
};
