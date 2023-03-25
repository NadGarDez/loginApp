export interface AxiosResponse {
  data: {
    message: string;
    token: string;
  };
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
  config: Record<string, unknown>;
  request: Record<string, unknown>;
}

export interface AuthReturn {
  data: {
    message: string;
    token: string;
  };
  status: number;
}
