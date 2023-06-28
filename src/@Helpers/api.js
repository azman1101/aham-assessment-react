export const URL = process.env.REACT_APP_ENDPOINT_URL;
import { endpoints as ep } from '@Configs/endpoints';

export const endpoints = ep;

export default ({
  onSuccess = () => null,
  onFail = () => null,
  endpoint,
  data,
}) => {
  const requestOptions = {
    method: endpoint[0],
    redirect: 'follow',
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (!!data) requestOptions.body = JSON.stringify(data);
  if (endpoint[0] !== 'GET') requestOptions.headers = headers;

  fetch(endpoint[1], requestOptions)
    .then(response => response.text())
    .then(result => onSuccess(JSON.parse(result)))
    .catch(error => onFail(error));
}
