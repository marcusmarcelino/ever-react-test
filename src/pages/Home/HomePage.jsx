import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from 'formik';

// Material UI Imports
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { QontoConnector } from '../../config/dynamicCar';
import { getSteps, getTableData, getResult} from './simulationData';
import FormDefault from './formDefault';

import maskGroup1 from '../../assets/images/MaskGroup1.svg';

import * as S from './styled';

const HomePage = () => {
  const [stepper, setStepper] = useState(0);
  const [validation, setValidation] = useState([1, 0, 0]);
  const [stepperStyles, setStepperStyles] = useState(["active", "beactive", "beactive"]);
  const [expanded, setExpanded] = useState(0);
  
  const changeStepper = (event, activeStep) => {
    event.preventDefault();
    let a = stepperStyles.slice(); //creates the clone of the state
    a[expanded] = "completed";
    a[activeStep] = "active";
    let validationValue = validation.slice(); //creates the clone of the state
    validationValue[activeStep] = 1;

    setStepper (activeStep);
    setStepperStyles(a);
    setExpanded(activeStep);
    setValidation(validationValue);
  };

  const changeExpand = (event, activeStep) => {
    event.preventDefault();

    if (validation[activeStep]) {
      let a = stepperStyles.slice();
      a[stepper] = "completed";
      a[activeStep] = "active";
      
      setStepper(activeStep);
      setStepperStyles(a);
      setExpanded(activeStep);
    }
  };

  const handleValidation = () => {};

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // fetch("/api/form-submit-url", {
    //   method: "POST",
    //   body: data,
    // });
  };

  const steps = getSteps();
  let activeStep = stepper;
  let expandedEl = expanded;
  const rows = getTableData();
  const result = getResult();

  return (
    <S.MainContainer className="root">
      <S.Content className="mainSection">
        <S.ProgressBar className="stepperContainer">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<QontoConnector />}
            className="stepper"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </S.ProgressBar>
        <S.ContainerUploadCard className="uploadCard">
          <S.ContentUploadForm className="uploadForm">
            <Accordion expanded={expandedEl === 0} className="formSection" onChange={(e) => changeExpand(e, 0)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                className={stepperStyles[0]}
              >
                <Typography>
                  correct form name according to the page
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="form">
                  <div className="title">
                    <span>Já está cadastrado?</span>
                    <div>Clique aqui para entrar</div>
                  </div>

                  <FormDefault />

                  <div className="col-lg-12">
                    <S.BtnConfirm onClick={(e) => changeStepper(e, 1)} disabled={!validation[0]} className="confirmBtn">
                      confirmar
                    </S.BtnConfirm>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedEl === 1} className="formSection" onChange={(e) => changeExpand(e, 1)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                className={stepperStyles[1]}
              >
                <Typography>
                  correct form name according to the page
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="form">
                  <div className="title">
                    <span>Já está cadastrado?</span>
                    <div>Clique aqui para entrar</div>
                  </div>
                  
                  <FormDefault />

                  <div className="col-lg-12">
                    <S.BtnConfirm onClick={(e) => changeStepper(e, 2)} className="confirmBtn">
                      confirmar
                    </S.BtnConfirm>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedEl === 2} className="formSection" onChange={(e) => changeExpand(e, 2)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                className={stepperStyles[2]}
              >
                <Typography>
                  correct form name according to the page
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="form">
                  <div className="title">
                    <span>Já está cadastrado?</span>
                    <div>Clique aqui para entrar</div>
                  </div>
                  
                  <FormDefault />

                </div>
              </AccordionDetails>
            </Accordion>
          </S.ContentUploadForm>
          <S.ContentShoppingCart className="shoppingCart">
            <S.ContentShoppingCartHeader className="shoppingHeader">
              <p>Seu carrinho de compras</p>
              <div className="marker">
                <img src={maskGroup1} />
                <span>20% OFF</span>
              </div>
            </S.ContentShoppingCartHeader>
            <S.ContentShoppingTable className="shoppingTable">
              <div className="tableTH">
                <span>Produto</span>
                <span>Descrição</span>
                <span>Qt</span>
                <span>Preço Un.</span>
              </div>
              {rows.map((data) => (
                <div className="tableTR">
                  <span>
                    <img src={data.td1} />
                  </span>
                  <span>{data.td2}</span>
                  <span>{data.td3}</span>
                  <span>{data.td4}</span>
                </div>
              ))}
            </S.ContentShoppingTable>
            <S.ContentShoppingFooter className="shoppingFooter">
              {result.map((data) => (
                <div className="tableTF">
                  <span>{data.title}</span>
                  <span>{data.value}</span>
                </div>
              ))}
              <div className="tableTF total">
                <span>TOTAL:</span>
                <span>R$ 404,40</span>
              </div>
            </S.ContentShoppingFooter>
            {validation[2] === 1 && (
              <S.ContainerBtnResult className="col-lg-12 text-center">
                <S.BtnConfirm className="confirmBtn" type="button" onClick={handleOnSubmit}>
                  confirmar
                </S.BtnConfirm>
              </S.ContainerBtnResult>
            )}
          </S.ContentShoppingCart>
        </S.ContainerUploadCard>
      </S.Content>
    </S.MainContainer>
  );
}

export default HomePage;
