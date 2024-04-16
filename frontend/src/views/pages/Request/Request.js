import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';


const Request = () => {
  return (
    <PageContainer title="Customer Request" description="this is Customer Request">

      <DashboardCard title="Customer Request">
        <Typography>This is a Customer Request</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Request;