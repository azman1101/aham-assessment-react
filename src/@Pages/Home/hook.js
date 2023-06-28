import { useState, useEffect } from 'react';
import Api, { endpoints } from '@Helpers/api';

export default ({ h }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    Api({
      endpoint: endpoints.getCustomers(),
      onSuccess: ({ data }) => {
        setCustomers(data);
      },
      onFail: (error) => {
        console.log('🚀 vv ~ error:', error);
      },
    });
  }

  const refresh = () => {
    getCustomers();
  }

  return {
    customers,
    refresh,
  }
}
