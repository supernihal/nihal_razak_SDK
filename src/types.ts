export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface Docs<T> {
  docs: Array<T>,
  total: number,
  limit: number,
  offset: number,
  page: number,
  pages: number
}

export interface PaginationParams {
  limit?: number;
  page?: number;
  offset?: number;
}

export interface SortParams {
  sort?: string;
}

export interface QuoteAPIParams extends PaginationParams, SortParams {
  character?: string;
  dialog?: string;
  movie?: string;
  race?: string;
}

export interface MovieAPIParams extends PaginationParams, SortParams {
  name?: string;
  budgetInMillions?: string;
  academyAwardWins?: string;
  runtimeInMinutes?: string;
}
