import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import SchemaForgotPass from './SchemaForgotPass';

const ForgotPassForm = ({ redirectTo }) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      history.push(redirectTo);
    },
    validationSchema: SchemaForgotPass,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.InputComponent
        name="email"
        type="email"
        variant="login"
        placeholder="e-mail"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className="ErrorMessage">{formik.errors.email}</div> : null}

      <S.Submit icon="arrowRight" variant="primary" showIcon type="submit">
        Continuar
      </S.Submit>
    </S.Form>
  );
};

ForgotPassForm.propTypes = {
  redirectTo: PropTypes.string,
};

ForgotPassForm.defaultProps = {
  redirectTo: '',
};

export default ForgotPassForm;
