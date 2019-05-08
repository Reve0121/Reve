import { appAxios } from './axios'
import urlContants from './urlContants'

const appServices = {
    post(url, data) {
        let requestURL = urlContants.baseURL + url;
        let params = data || '';
        return new Promise((resolve, rejects) => {
            appAxios.post(requestURL, params)
                .then((res) => {
                    resolve(res);
                }).catch((error) => {
                    rejects(error);
                })
        })
    },
    get(url, data) {
        let requestURL = urlContants.baseURL + url;
        let params = data || '';
        return new Promise((resolve, rejects) => {
            appAxios.get(requestURL, { params: params })
                .then((res) => {
                    resolve(res);
                }).catch(error => {
                    rejects(error);
                })
        })
    }

}




export default appServices