export interface AxiosResponse {
  data?: Record<string, unknown>;
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
  config: Record<string, unknown>;
  request: Record<string, unknown>;
}

export interface AuthReturn {
  data: Record<string, unknown> | undefined;
  status: number;
}
