import axios, { AxiosRequestConfig, AxiosResponse } from '../../node_modules/axios/index';
import ResponseData from './ResponseData';

function req(options: AxiosRequestConfig): Promise<any> {
    const { url } = options;
    if (!url) {
        throw new Error('请求 url 不能为空');
    }

    options = Object.assign({
        responseType: 'json',
    }, options);

    return axios(options).then((response: any) => {
        const { status, data: respData } = response;
        if (status === 200) {
            const { code, data } = respData;
            if (code === 0) {
                return data;
            } else {
                return Promise.reject(new ResponseData(respData));
            }
        } else {
            return Promise.reject(response);
        }
    }).catch((response: any) => {
        if (response instanceof ResponseData) {
            const { msg } = response;
        } else {
            const { message: msg } = response as Error;
        }
        return Promise.reject(response);
    });
}

export function get(url: string, params?: Object, options?: AxiosRequestConfig): Promise<any> {
    return req({
        url,
        method: 'GET',
        params,
        ...options,
    });
}

export function post(url: string, data?: Object, options?: AxiosRequestConfig): Promise<any> {
    return req({
        url,
        method: 'POST',
        data,
        ...options,
    });
}
