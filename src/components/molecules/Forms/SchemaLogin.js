import * as Yup from 'yup';

const SchemaLogin = Yup.object().shape({
  email: Yup.string().required('Email is required.'),
  password: Yup.string().required('Password is required.').min(6, 'Password must be at least 6 characters.'),
});

export default SchemaLogin;
