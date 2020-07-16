import React from "react";
import PropTypes from "prop-types";
import { useFormik } from 'formik';

import {Input, Label, Select } from '../../components/atoms';

import DataPersonalValidation from './validations';

import * as S from './styled';

const FormDefault = () => {
  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      genrer: '',
      birthday: '',
    },
    onSubmit(inputValues) {
      console.log(inputValues);
    },
    validationSchema: DataPersonalValidation,
  });
  const options = [
    {
      label: 'Feminino',
      value: 'f'
    },
    {
      label: 'Masculino',
      value: 'm',
    }
  ];
  return (
    <S.Form>
      <S.FormGroup>
        <S.ContainerInput className="dataPersonal">
          <Label htmlFor="dataPersonal__name">Nome:</Label>
          <Input
            id="dataPersonal__name"
            type="text"
            name="name"
            placeholder="Nome do destinatário"
            variant="login"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.name}
          />
        </S.ContainerInput>

        <S.ContainerInput>
        <Label htmlFor="dataPersonal__email">E-mail:</Label>
        <Input
          id="dataPersonal__"
          type="email"
          name="email"
          placeholder="E-mail"
          variant="login"
          values={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.email}
        />
      </S.ContainerInput>
      </S.FormGroup>

      <S.FormGroup>
        <S.ContainerInput>
          <Label htmlFor="dataPersonal__cpf">CPF:</Label>
          <Input
            id="dataPersonal__cpf"
            type="text"
            name="cpf"
            placeholder="CPF"
            variant="login"
            value={values.cpf}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.cpf}
          />
        </S.ContainerInput>                    

        <S.ContainerInput>
          <Label htmlFor="dataPersonal__phone">Telefone de contato:</Label>
          <Input
            id="dataPersonal__phone"
            type="text"
            name="phone"
            placeholder="(00) 0 0000-0000"
            variant="login"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.phone}
          />
        </S.ContainerInput>
      </S.FormGroup>
      
      <S.FormGroup>
        <S.ContainerInput>
          <Label htmlFor="dataPersonal__genrer">Gênero:</Label>
          <Select
            id="dataPersonal__genrer"
            name="genrer"
            placeholder="Selecione o Género"
            variant="login"
            options={options}
            value={values.genrer}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.genrer}
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Label htmlFor="dataPersonal__birthday">Data de nascimento:</Label>
          <Input
            id="dataPersonal__birthday"
            type="date"
            name="birthday"
            placeholder="Data de nascimento"
            variant="login"
            value={values.birthday}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.birthday}
          />
        </S.ContainerInput>
      </S.FormGroup>
    </S.Form>
  );
}

export default FormDefault;