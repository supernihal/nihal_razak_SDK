import axios, { AxiosInstance } from 'axios';

export abstract class API {
  protected api: AxiosInstance;

  constructor(baseURL: string, token: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}