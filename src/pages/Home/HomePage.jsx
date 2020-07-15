import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI Imports
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import TextField from "@material-ui/core/TextField";
import StepLabel from "@material-ui/core/StepLabel";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { QontoConnector } from '../../config/dynamicCar';

import img1 from '../../assets/images/01.png';
import maskGroup1 from '../../assets/images/MaskGroup1.svg';

import * as S from './styled';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      stepper: 0,
      validation: [1, 0, 0],
      stepperStyles: ["active", "beactive", "beactive"],
      expanded: 0,
    };
  }
  
  getSteps() {
    return ["Select", "Create an ad group", "Create an ad"];
  }

  getTableData() {
    return [
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: img1, td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
    ];
  }
  
  getResult() {
    return [
      { title: "Subtotal:", value: "R$ 674,00" },
      { title: "Desconto:", value: "- R$ 269,60" },
      { title: "Frete:", value: "R$ 0,00" },
      { title: "Subtotal:", value: "R$ 674,00" },
    ];
  }
  
  changeStepper(event, activeStep) {
    event.preventDefault();
    let a = this.state.stepperStyles.slice(); //creates the clone of the state
    a[this.state.stepper] = "completed";
    a[activeStep] = "active";
    let validation = this.state.validation.slice(); //creates the clone of the state
    validation[activeStep] = 1;
    this.setState({
      stepper: activeStep,
      stepperStyles: a,
      expanded: activeStep,
      validation: validation,
    });
  }

  changeExpand(event, activeStep) {
    event.preventDefault();
    if (this.state.validation[activeStep]) {
      let a = this.state.stepperStyles.slice(); //creates the clone of the state
      a[this.state.stepper] = "completed";
      a[activeStep] = "active";
      console.log("thissetstaebefore", this.state.stepper);
      this.setState({
        stepper: activeStep,
        stepperStyles: a,
        expanded: activeStep,
      });
    }
  }

  handleValidation() {}

  onSubmit(event) {
    event.preventDefault();
    // fetch("/api/form-submit-url", {
    //   method: "POST",
    //   body: data,
    // });
  }

  render() {
    const steps = this.getSteps();
    let activeStep = this.state.stepper;
    let expanded = this.state.expanded;
    const rows = this.getTableData();
    const result = this.getResult();

    return (
      <S.Container className="root">
        <div className="mainSection">
          <div className="stepperContainer">
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
          </div>
          <form>
            <div className="uploadCard">
              <div className="uploadForm">
                <Accordion
                  expanded={expanded === 0}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 0)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[0]}
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="form">
                      <div className="title">
                        <span>Já está cadastrado?</span>
                        <div>Clique aqui para entrar</div>
                      </div>
                      <div>
                        <label>Nome Completo:</label>
                        <input
                          placeholder="Carla Sousa Caetano"
                          onChange={() => this.handleValidation(0)}
                          ref={(c) => (this.title = c)}
                          name="title"
                        />
                      </div>
                      <div>
                        <label>E-mail:</label>
                        <input
                          placeholder="carlacaetano@gmail.com"
                          type="email"
                          ref={(c) => {
                            this.email = c;
                          }}
                          name="email"
                        />
                      </div>
                      <div>
                        <label>CPF:</label>
                        <input placeholder="001.234.567-89"></input>
                      </div>

                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="(63) 9 9900 9901" />
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <select>
                          <option>feminino</option>
                          <option>masculina</option>
                        </select>
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" type="date" />
                      </div>
                      <div className="col-lg-12">
                        <button
                          onClick={(e) => this.changeStepper(e, 1)}
                          disabled={!this.state.validation[0]}
                          className="confirmBtn"
                        >
                          confirmar
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 1}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 1)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[1]}
                  >
                    <Typography>Informações para entrega{expanded}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="form">
                      <div className="title">
                        <span>Já está cadastrado?</span>
                        <div>Clique aqui para entrar</div>
                      </div>
                      <div>
                        <label>Nome Completo:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>E-mail:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>CPF:</label>
                        <input></input>
                      </div>

                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>Gênero:</label>
                        <select>
                          <option>masculino</option>
                          <option>fêmeo</option>
                        </select>
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" type="date" />
                      </div>
                      <div className="col-lg-12">
                        <button
                          onClick={(e) => this.changeStepper(e, 2)}
                          className="confirmBtn"
                        >
                          confirmar
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 2}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 2)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[2]}
                  >
                    <Typography>Forma de Pagamento</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="form">
                      <div className="title">
                        <span>Já está cadastrado?</span>
                        <div>Clique aqui para entrar</div>
                      </div>
                      <div>
                        <label>Nome Completo:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>E-mail:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>CPF:</label>
                        <input></input>
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <select>
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" />
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" type="date" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="shoppingCart">
                <div className="shoppingHeader">
                  <p>Seu carrinho de compras</p>
                  <div className="marker">
                    <img src={maskGroup1} />
                    <span>20% OFF</span>
                  </div>
                </div>
                <div className="shoppingTable">
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
                </div>
                <div className="col-lg-12">
                  <div className="shoppingFooter">
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
                  </div>
                  <div className="col-lg-12 text-center">
                    {this.state.validation[2] === 1 && (
                      <button
                        className="confirmBtn"
                        type="button"
                        onClick={this.onSubmit}
                      >
                        confirmar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </S.Container>
    );
  }
}

export default HomePage;
