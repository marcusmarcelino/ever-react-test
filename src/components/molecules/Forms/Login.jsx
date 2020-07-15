import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Checkbox from '@components/atoms/Checkbox';
import SchemaLogin from './SchemaLogin';

import * as S from './styled';

const LoginForm = ({ redirectTo }) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      history.push(redirectTo);
    },
    validationSchema: SchemaLogin,
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
      <S.InputComponent
        name="password"
        type="password"
        variant="login"
        placeholder="senha"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div className="ErrorMessage">{formik.errors.password}</div> : null}

      <div className="remember">
        <Checkbox onChange={formik.handleChange} text="Lembrar senha" />
      </div>
      <div className="forgot">
        <Link to="/forgot">Esqueceu sua senha?</Link>
      </div>

      <S.Submit icon="arrowRight" variant="primary" showIcon type="submit">
        Entrar
      </S.Submit>
    </S.Form>
  );
};

LoginForm.propTypes = {
  redirectTo: PropTypes.string,
};

LoginForm.defaultProps = {
  redirectTo: '',
};

export default LoginForm;
