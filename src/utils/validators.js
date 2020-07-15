/* eslint-disable radix */
/* eslint-disable no-plusplus */
import { removeMask } from './removeMasks';

const verifySequence = (value = '') => {
  const number = String(removeMask(value));

  return !(
    number === '00000000000' ||
    number === '11111111111' ||
    number === '22222222222' ||
    number === '33333333333' ||
    number === '44444444444' ||
    number === '55555555555' ||
    number === '66666666666' ||
    number === '77777777777' ||
    number === '88888888888' ||
    number === '99999999999'
  );
};

export const validName = (value = '') => {
  const onlyText = /^[a-zA-Z ]*$/.test(value);
  const splitName = value.split(' ');

  if (!onlyText) {
    return false;
  }

  return !(splitName.length < 2 || splitName[0].length < 3 || splitName[1].length < 3);
};

export const validCpf = (number = '') => {
  const numberCpf = number === undefined ? '' : number;
  const cpf = numberCpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (!verifySequence(cpf)) {
    return false;
  }

  // Valida 1o digito
  let add = 0;
  let rev;

  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }
  rev = 11 - (add % 11);

  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cpf.charAt(9))) {
    return false;
  }
  // Valida 2o digito

  add = 0;

  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rev = 11 - (add % 11);

  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
};

export const validationPhone = (value = '') => verifySequence(value);
