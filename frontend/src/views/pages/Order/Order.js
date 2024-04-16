import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';


const Order = () => {
  return (
    <PageContainer title="Orders" description="this is Orders">

      <DashboardCard title="Orders">
        <Typography>This is a Orders</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Order;
