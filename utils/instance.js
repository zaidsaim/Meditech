/* eslint-disable no-unused-expressions */
import axios from 'axios'
import reduxStore from 'reduxStore';
const { getState } = reduxStore;

const instance = axios.create({
    baseURL: '',
})

instance.interceptors.request.use(
    async (request) => {
        // const user = (await getState()?.auth?.user) || {};
        // console.log('token==>', user);

        // if (user && user?.token) {
        //     request.headers['x-access-token'] = user?.token;
        // }
        request.headers['Content-Type'] = 'application/json'
        request.headers['Access-Control-Allow-Methods'] =
            'GET, PUT, POST, DELETE, OPTIONS'

        return request
    },
    (error) => {
        console.log('apiinstance', error)
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    async (error) => {
        return error?.response?.data
    },
)

export default instance
