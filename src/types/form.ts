export interface SignUpForm {
  email: string;
  password: string;
}

export interface InputSignUpForm {
  error: boolean;
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
