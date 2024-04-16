import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import AddUserForm from './UserForm';


const AddUser = () => {
  return (
    <PageContainer title="Add Users" description="this is Add Users">
      <DashboardCard title="Add Users">
        <AddUserForm/>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddUser;