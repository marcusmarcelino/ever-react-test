import * as Yup from 'yup';

import { validName, validCpf, validationPhone } from '../../utils/validators';

const DataPersonalValidation = Yup.object({
  name: Yup.string()
    .required('Campo obrigatório')
    .test({
      name: 'validateName',
      test(value) {
        const onlyText = /^[a-zA-Z ]*$/.test(value);

        if (!onlyText) {
          return this.createError({
            message: 'não pode conter números',
            pat: 'name',
          });
        }

        if (!validName(value)) {
          return this.createError({
            message: 'deve ter sobrenome',
            path: 'name',
          });
        }

        return true;
      },
    }),
  email: Yup.string().email('email inválido').required('campo obrigatório'),
  cpf: Yup.string()
    .required('campo obrigatório')
    .test('testCpf', 'campo obrigatório, o formato correto é: 000.000.000-00', (value) => validCpf(value)),
  phone: Yup.string()
    .required('campo obrigatório')
    .test('testPhone', 'campo obrigatório', (value) => validationPhone(value)),
  genrer: Yup.string().required('campo obrigatório'),
  birthday: Yup.string().required('campo obrigatório'),
});

export default DataPersonalValidation;
