import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/atoms/Button';

import * as S from './styled';

const Pagination = ({ perPage, total, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i += 1) {
    pageNumbers.push(i);
  }

  const [inputSearchPage, setInputSearchPage] = useState('');

  const handleSearchPage = () => {
    paginate(inputSearchPage);
    setInputSearchPage('');
  };

  return (
    <S.Container>
      <S.Nav>
        <ul>
          {pageNumbers.map((number) => (
            <S.Li className={currentPage === number ? 'active' : 'default'} key={number}>
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            </S.Li>
          ))}
        </ul>
      </S.Nav>
      <span>|</span>
      <p>Ir para página</p>
      <div className="filter__container__search">
        <input value={inputSearchPage} onChange={(e) => setInputSearchPage(e.target.value)} type="text" />
        <Button icon="arrowRight" onClick={handleSearchPage} showIcon type="button" variant="secondary" />
      </div>
    </S.Container>
  );
};
Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
