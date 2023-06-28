import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Api, { endpoints } from '@Helpers/api';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = () => {
    setIsLoading(true)
    Api({
      endpoint: endpoints.getCustomer(id),
      onSuccess: ({ data }) => {
        setIsLoading(false)
        setUser(data);
      },
      onFail: (error) => {
        console.log('🚀 vv ~ error:', error);
        setIsLoading(false)
      },
    });
  }
  return (
    <div className='bg-white container border mt-5'>
      <div className="d-flex">
        <div className='mx-5'>
          <Avatar
            sx={{ width: 180, height: 180 }}
            className='m-5 mx-auto'
          >
          </Avatar>
          <h2 className='text-center'>{user.name}</h2>
        </div>
        <div className="flex-grow-1 m-5">
          {['email', 'phone', 'address', 'age'].map(key => (
            <div>
              <b className='text-capitalize'>{key}</b>
              <p className='text-secondary'>{user[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}