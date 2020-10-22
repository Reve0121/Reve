import appServices from "../services/appServices";

const get = appServices.get;
const post = appServices.post;

export const testPostApi = (params = "") => {
    let api = "/api/test/getUserInfo";   //待修改
    return post(api, params);
}
export const testGetApi = (params = "") => {
    let api = "/api/test/getUserInfo";  //待修改
    return get(api, params);
}