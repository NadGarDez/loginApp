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

export interface UserAxiosResponse {
  data: {
    data: {
      email: string;
      names: string;
      surnames: string;
      gender: string;
    };
    status: number;
  };
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
  config: Record<string, unknown>;
  request: Record<string, unknown>;
}

export interface User {
  email: string;
  names: string;
  surnames: string;
  gender: string;
}
export interface UserReturn {
  data?:
    | {
        email: string;
        names: string;
        surnames: string;
        gender: string;
      }
    | undefined;
  status: number;
}
