import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import UserTable from './UserTable'


const Users = () => {
  return (
    <PageContainer title="Users Details" description="this is Users Details">

      <DashboardCard title="Users Details">
        <UserTable/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Users;