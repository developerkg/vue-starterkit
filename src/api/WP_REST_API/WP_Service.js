/* eslint-disable no-underscore-dangle,func-names */
import axios from 'axios';
import config from '../../config/WP_REST_API';

const _service = axios.create(config);

_service.interceptors.request.use(
  conf => conf,
  error => Promise.reject(error),
);

// Add a response interceptor
_service.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default null;
export { _service };
