import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export default class BaseRepository {
    protected instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }

    protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
        return await this.instance.get(url);
    }

    protected async post(
        url: string,
        data: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any, any>> {
        return await this.instance.post(url, data, config);
    }

    protected async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return await this.instance.delete(url, config);
    }

    protected async put(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return await this.instance.put(url, data, config);
    }

    protected async patch(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return await this.instance.patch(url, data, config);
    }
}
