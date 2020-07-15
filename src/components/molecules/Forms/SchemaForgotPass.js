import * as Yup from 'yup';

const SchemaForgotPass = Yup.object().shape({
  email: Yup.string().required('Email is required.'),
});

export default SchemaForgotPass;
