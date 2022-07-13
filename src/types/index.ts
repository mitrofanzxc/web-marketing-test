export enum IEndpoint {
  sources = 'sources',
  everything = 'everything',
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface ISources {
  draw: (data: Array<ISource>) => void;
}

export interface ISourcesEndpoint {
  status: string;
  sources: Array<ISource>;
}

export type ICallback<T> = (data: T) => void;

export interface IArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INews {
  draw: (data: Array<IArticle>) => void;
}

export interface INewsEndpoint {
  status: string;
  totalResults: number;
  articles: Array<IArticle>;
}

export interface IOptions {
  [key: string]: string | null;
}

export type IGetResp = {
  endpoint: IEndpoint;
  options?: IOptions;
};

export type IAppController = {
  getNewsOnClick: (event: MouseEvent, callback: (data: INewsEndpoint) => void) => void;
  getNewsOnSearch: (value: string, callback: (data: INewsEndpoint) => void) => void;
  getSources: (callback: (data: ISourcesEndpoint) => void) => void;
};

export type IAppView = {
  drawNews: (data: INewsEndpoint) => void;
  drawSources: (data: ISourcesEndpoint) => void;
};

export interface IError {
  status: string;
  code: string;
  message: string;
}
