import { Docs, Quote, QuoteAPIParams } from './types';
import { API } from './API';
import { BASE_URL } from './Utils';

export class QuoteAPI extends API {
  constructor(token: string) {
    super(BASE_URL, token);
  }

  async getQuotes(params?: QuoteAPIParams): Promise<Docs<Quote>> {
    const response = await this.api.get<Docs<Quote>>('/quote', { params });
    return response.data;
  }

  async getQuoteById(id: string): Promise<Docs<Quote>> {
    const response = await this.api.get<Docs<Quote>>(`/quote/${id}`);
    return response.data;
  }
}