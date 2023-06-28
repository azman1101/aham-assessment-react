export const URL = process.env.REACT_APP_ENDPOINT_URL;

export const endpoints = {
  getCustomers: () => ['GET', `${URL}customer`],
  getCustomer: (id) => ['GET', `${URL}customer/${id}`],
  createCustomer: () => ['POST', `${URL}customer`],
  editCustomer: () => ['PUT', `${URL}customer/${id}`],
  deleteCustomer: (id) => ['DELETE', `${URL}customer/${id}`],
};
