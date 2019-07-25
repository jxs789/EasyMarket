import axios from 'axios'
import { getToken } from './index'

const service = axios.create({
  baseURL: 'http://123.206.55.50:8888',
  timeout: 2000
});

service.interceptors.request.use(
  config => {
    if (getToken) {
      config.headers['x-nideshop-token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service