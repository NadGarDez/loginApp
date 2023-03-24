import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'The password is too short')
    .max(30, 'Password must be 30 characters or less')
    .required('Required'),
});
