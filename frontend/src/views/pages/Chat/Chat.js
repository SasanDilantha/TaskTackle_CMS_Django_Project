import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';


const Chat = () => {
  return (
    <PageContainer title="Customer Chat" description="this is Customer Chat">

      <DashboardCard title="Customer Chat">
        <Typography>This is a Customer Chat</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Chat;