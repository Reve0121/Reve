import axios from 'axios'

const appAxios = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

//请求拦截器
appAxios.interceptors.request.use(
    //发送请求前的处理
    (config) => {
        return config;
    },
    //若请求错误，则返回错误信息
    (error) => {
        return Promise.reject(error);
    }
);

appAxios.interceptors.response.use(
    (response) => {
        if (response.status == 200 && response.statusText == "OK") {
            return response.data;
        }
    },
    (error) => {
        return {
            isSuccess: false,
            message: error.message
        }
    }
);

export { appAxios }