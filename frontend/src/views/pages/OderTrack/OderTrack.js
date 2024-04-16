import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';


const OderTrack = () => {
  return (
    <PageContainer title="Order Tracking" description="this is Order Tracking">

      <DashboardCard title="Order Tracking">
        <Typography>This is a Order Tracking</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default OderTrack;
