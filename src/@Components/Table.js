import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Api, { endpoints } from '@Helpers/api';
import { useHistory } from "react-router-dom";

export default function Table({ customers, refresh }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    console.log('🚀 vv ~ handleDelete', id);
    setIsLoading(true)

    Api({
      endpoint: endpoints.deleteCustomer(id),
      onSuccess: () => {
        setIsLoading(false)
        refresh();
      },
      onFail: (error) => {
        console.log('🚀 vv ~ error:', error);
        setIsLoading(false)
      },
    });
  }

  const history = useHistory();

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td>{customer.age}</td>
            <td>
              <button type="button" className="btn text-primary" onClick={() => history.push(`/user/${customer.id}`)}>
                <PersonOutlineIcon />
              </button>
              <button type="button" className="btn text-danger" onClick={() => handleDelete(customer.id)}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody >
    </table >
  )
}