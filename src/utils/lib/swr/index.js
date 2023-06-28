import axios from 'axios'
export const ROOT = process.env.NEXT_PUBLIC_API_ROOT

const axiosInstance = axios.create({
  baseURL: ROOT
})

axiosInstance.interceptors.request.use(
  async (config) => {
    //TODO more API config here
    try {
      return {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'application/json',
          ...config.arg
        }
      }
    } catch (error) {
      throw new axios.Cancel(error)
    }
  },
  (error) => Promise.reject(error)
)

const request = (path, method, config) =>
  axiosInstance[method](path, config).then((res) => res.data)

export const GET = (path, config) => request(path, 'get', config)
export const POST = (path, config) => request(path, 'post', config)

export const PATH = {
  CORN: '/cron',
  AUTH: {
    USER: '/auth/user'
  }
}
