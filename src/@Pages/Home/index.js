import React from 'react';
import useHook from './hook';
import Table from '@Components/Table';
import AddCustomer from '@Components/AddCustomer';

export default function Home(props) {
  const h = useHook(props);

  return (
    <div className="container-lg">
      <AddCustomer refresh={h.refresh}/>
      <Table
        customers={h.customers}
        refresh={h.refresh}
      />
    </div>
  );
};
