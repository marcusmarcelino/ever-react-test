import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import { Container, Input, Label, Select } from '@components/atoms';
import Button from '@components/atoms/Button';
import SampleExpandedComponent from './expandedComponent';

import * as S from './styled';

const columns = [
  {
    name: 'Local',
    selector: 'local',
    sortable: true,
    center: true,
    hide: 'sm',
  },
  {
    name: 'Fluxo',
    selector: 'flow',
    sortable: true,
    center: true,
  },
  {
    name: 'Origem',
    selector: 'origin',
    sortable: true,
    center: true,
  },
  {
    name: 'Excluir',
    selector: 'delete',
    center: true,
  },
];

const dataJson = [
  {
    name: 'Facebook Pixel',
    origin: 'Entrada',
    flow: '12257asdg268',
    delete: 'del',
  },
  {
    name: 'Google Pixel',
    origin: 'Saida',
    flow: '12257asdg268',
    delete: 'del',
  },
  {
    name: 'Twitter',
    origin: 'Entrada',
    flow: '12257asdg268',
    delete: 'del',
  },
];

const PanelPixel = () => {
  const [ExpandOnRowClicked, setExpandOnRowClicked] = useState(false);
  const [ExpandableRowsHideExpander, setExpandableRowsHideExpander] = useState(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      setExpandableRowsHideExpander(false);
      setExpandOnRowClicked(true);
    }
  }, []);

  return (
    <S.PanelPixel className="panelPixel">
      <S.ModalContent className="panelPixel__content">
        <S.ModalHeader>
          <h3>Editar Carrinho Dinâmico</h3>
        </S.ModalHeader>

        <S.ModalBody>
          <S.PanelPixelForm className="panelPixel__form">
            <Container className="panelPixel__form__input">
              <Label htmlFor="nameLocal">Local:</Label>
              <Select options={[]} />
            </Container>

            <Container className="panelPixel__form__input">
              <Label htmlFor="nameOrigin">Origem:</Label>
              <Select options={[]} />
            </Container>

            <Container className="panelPixel__form__input">
              <Label htmlFor="nameOrigin">ID Pixel / Analytics:</Label>
              <Input type="text" placeholder="Cole aqui seu ID pixel" id="nameOrigin" name="nameOrigin" />
            </Container>

            <Container className="panelPixel__form__listPixels">
              <DataTable
                className="panelPixel__form__listPixels__dataTable"
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10]}
                // paginationComponentOptions={PaginationOptions}
                noHeader
                fixedHeader
                fixedHeaderScrollHeight="300px"
                columns={columns}
                data={dataJson}
                // customStyles={CustomStyles}
                expandableRows
                expandOnRowClicked={ExpandOnRowClicked}
                expandableRowsHideExpander={ExpandableRowsHideExpander}
                expandableRowsComponent={<SampleExpandedComponent />}
              />
            </Container>
          </S.PanelPixelForm>
          <Button.Group className="btnGroup center">
            <Button>Button</Button>
          </Button.Group>
        </S.ModalBody>
      </S.ModalContent>
    </S.PanelPixel>
  );
};

export default PanelPixel;
