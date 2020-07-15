import styled from 'styled-components';

export const Container = styled.div`
    .MuiAccordionDetails-root {
        min-height: 490px;
    }
    img{
        height: 40px;
        width: 40px;
    }
    .root {
        background: transparent url('/img/Onda-02.png') 0% 0% no-repeat padding-box;
        opacity: 1;
        display: flex;
        justify-content: center;
        background-size: 100% 100%;
        width: 100%;
    }

    .col-lg-12 {
        width: 100% !important;
        flex-direction: row !important;
        justify-content: center !important;
    }

    .mainSection {
        max-width: 1628px;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        margin-bottom: 30px;
        .stepperContainer {
            width: 100%;
            height: 84px;
            margin: 55px auto;
            display: flex;
            justify-content: center;
            .stepper {
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border-radius: 15px;
                opacity: 1;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            .stepper :nth-child(2),
            .stepper :nth-child(3) {
                width: 49% !important;
                padding: 0px;
                display: flex !important;
                .MuiStepConnector-alternativeLabel {
                    position: relative !important;
                    top: 12px;
                    left: 0 !important;
                    right: 0 !important;
                }
            }
            .MuiStep-alternativeLabel {
                flex: none !important;
                padding: 0 !important;
            }
            .MuiStepLabel-root.MuiStepLabel-alternativeLabel {
                width: 38px !important;
            }
            .MuiSvgIcon-root {
                font-size: 34px;
                color: #F6F6F6;
                opacity: 1;
            }
            .MuiStepIcon-active,
            .MuiStepIcon-completed {
                color: #2CC120 !important;
                opacity: 1;
                .MuiStepIcon-text {
                    fill: white !important;
                }
            }
            .MuiStepIcon-text {
                fill: #C8C8C8 !important;
                font-weight: 200;
                font-family: 'Poppins-Regular';
                letter-spacing: 0px;
            }
        }
        ;
        .stepperBtn {
            width: 34px;
            height: 34px;
            background: #2CC120 0% 0% no-repeat padding-box;
            opacity: 1;
            border: none;
            margin: auto 0px;
        }
        ;
        .StepperLine {
            width: 45%;
            height: 0px;
            border: 1px solid #C8C8C8;
            opacity: 1;
            margin: auto 0px;
        }
        .uploadCard {
            display: flex;
            justify-content: space-between;
            .uploadForm {
                width: 58%;
                .formSection {
                    margin-bottom: 30px;
                    width: 100%;
                    background: #FFFFFF 0% 0% no-repeat padding-box !important;
                    border-radius: 15px !important;
                    opacity: 1 !important;
                    box-shadow: none !important;
                    .MuiAccordionSummary-content {
                        justify-content: space-around;
                    }
                    .completed {
                        height: 85px;
                        background: #FFFFFF 0% 0% no-repeat padding-box;
                        border-radius: 15px 15px 0px 0px !important;
                        font-size: 18px/27px;
                        font-family: 'Poppins-SemiBold';
                        text-align: center;
                        letter-spacing: 0px;
                        color: #5E5E5E;
                        text-transform: uppercase;
                        opacity: 1;
                    }
                    .active {
                        height: 85px;
                        background: transparent linear-gradient(90deg, #67FC70 0%, #2bbf8e 100%) 0% 0% no-repeat padding-box;
                        border-radius: 15px 15px 0px 0px !important;
                        font-size: 18px/27px;
                        font-family: 'Poppins-SemiBold';
                        text-align: center;
                        letter-spacing: 0px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        opacity: 1;
                    }
                    .beactive {
                        height: 85px;
                        background: #FFFFFF 0% 0% no-repeat padding-box;
                        border-radius: 15px 15px 0px 0px !important;
                        font-size: 18px/27px;
                        font-family: 'Poppins-SemiBold';
                        text-align: center;
                        letter-spacing: 0px;
                        color: #5E5E5E;
                        text-transform: uppercase;
                        opacity: 0.3;
                    }
                    .form {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        font-family: 'Poppins-Regular';
                        .title {
                            margin: 30px auto;
                            left: 598px;
                            width: 100%;
                            height: 23px;
                            text-align: right;
                            font-size: Bold 16px/25px;
                            font-family: 'Poppins-SemiBold';
                            letter-spacing: 0px;
                            color: #2CC120;
                            opacity: 1;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            span {
                                color: #5E5E5E
                            }
                            flex-direction: row;
                        }
                        >div {
                            display: flex;
                            flex-direction: column;
                            width: 45%;
                            input,
                            select {
                                width: 100%;
                                height: 40px;
                                background: #F2F2F2 0% 0% no-repeat padding-box;
                                border-radius: 15px;
                                opacity: 1;
                                border: none;
                                color: #5E5E5E;
                                margin: 15px auto;
                                padding-left: 22px;
                                text-align: left;
                                font-size: 16px/25px;
                                font-family: 'Poppins-Regular';
                                letter-spacing: 0px;
                            }
                            input:active {
                                border: none !important;
                            }
                        }
                    }
                }
            }
            .shoppingCart {
                max-height: 810px;
                width: 40%;
                background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border-radius: 15px;
                opacity: 1;
                .shoppingHeader {
                    text-align: center;
                    position: relative;
                    padding: 35px 0px;
                    p {
                        font-family: 'Poppins-SemiBold';
                        font-size: 18px;
                        letter-spacing: 0px;
                        color: #5E5E5E;
                        text-transform: uppercase;
                        opacity: 1;
                        text-align: left;
                        padding: 0 30px;
                    }
                    .marker {
                        display: flex;
                        justify-content: space-evenly;
                        right: 0;
                        top: 17px;
                        position: absolute;
                        width: 177px;
                        height: 60px;
                        background: transparent linear-gradient(89deg, #FF7F00 0%, #FFC400 100%) 0% 0% no-repeat padding-box;
                        box-shadow: 0px 3px 6px #00000029;
                        border-radius: 15px 0px 0px 15px;
                        opacity: 1;
                        span {
                            text-align: left;
                            font-size: 20px;
                            font-family: 'Poppins-SemiBold';
                            letter-spacing: 0px;
                            color: #FFFFFF;
                            text-transform: uppercase;
                            opacity: 1;
                            margin: auto 0px;
                        }
                        img {
                            margin: auto 0px;
                        }
                    }
                }
                .shoppingTable {
                    margin: 28px;
                    height: 430px;
                    overflow-y: scroll;
                    border: 1px solid #BDBDBD;
                    .tableTH {
                        padding: 18px 0px;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        span {
                            text-align: left;
                            font-size: 16px;
                            font-family: 'Poppins-SemiBold';
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            opacity: 1;
                            width: 25%;
                            text-align: center;
                        }
                    }
                    .tableTR {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        padding: 11px 0px;
                        align-items: center;

                        img {
                            margin: 0 auto;
                        }

                        span {
                            text-align: left;
                            font-size: 16px;
                            font-family: 'Poppins-Regular';
                            letter-spacing: 0px;
                            opacity: 1;
                            width: 25%;
                            text-align: center;
                            color: #7C7C7C;
                            opacity: 1;
                        }
                    }
                }
                .shoppingFooter {
                    width: 50%;
                    float: right;
                    .tableTF {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        text-align: right;
                        font-size: 16px;
                        font-family: 'Poppins-Medium';
                        letter-spacing: 0px;
                        color: #5E5E5E;
                        opacity: 1;
                        padding: 5px;
                    }
                    .total {
                        font-family: 'Poppins-SemiBold';
                        font-size: 18px;
                        text-align: right;
                        letter-spacing: 0px;
                        color: #5E5E5E;
                        text-transform: uppercase;
                        opacity: 1;
                    }
                }
                .text-center {
                    text-align: center;
                }
            }
            .confirmBtn {
                width: 420px;
                height: 55px;
                background: var(--cta-ff7f00) 0% 0% no-repeat padding-box;
                background: #FF7F00 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 15px;
                opacity: 1;
                border: none;
                font-size: 18px/27px;
                font-family: '';
                text-align: center;
                letter-spacing: 0px;
                color: #FFFFFF;
                text-transform: uppercase;
                opacity: 1;
                margin: 30px;
            }
        }
    }

    @media only screen and (max-width: 760px) {
        .mainSection {
            width: 90%;
            height: 100%;
            margin: auto;
            margin-bottom: 15px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            .stepperContainer {
                width: 100%;
                height: 84px;
                margin: 20px auto;
                display: flex;
                justify-content: center;
                .stepper {
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border-radius: 15px;
                    opacity: 1;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 25px 10px;
                }
                .stepper :nth-child(2),
                .stepper :nth-child(3) {
                    width: 44% !important;
                    padding: 0px;
                    display: flex !important;
                    .MuiStepConnector-alternativeLabel {
                        position: relative !important;
                        top: 12px;
                        left: 0 !important;
                        right: 0 !important;
                    }
                }
                .MuiStep-alternativeLabel {
                    flex: none !important;
                    padding: 0 !important;
                }
                .MuiStepLabel-root.MuiStepLabel-alternativeLabel {
                    width: 38px !important;
                }
                .MuiSvgIcon-root {
                    font-size: 34px;
                    color: #F6F6F6;
                    opacity: 1;
                }
                .MuiStepIcon-active,
                .MuiStepIcon-completed {
                    color: #2CC120 !important;
                    opacity: 1;
                    .MuiStepIcon-text {
                        fill: white !important;
                    }
                }
                .MuiStepIcon-text {
                    fill: #C8C8C8 !important;
                    font-weight: 200;
                    font-family: 'Poppins-Regular';
                    letter-spacing: 0px;
                }
            }
            ;
            .stepperBtn {
                width: 34px;
                height: 34px;
                background: #2CC120 0% 0% no-repeat padding-box;
                opacity: 1;
                border: none;
                margin: auto 0px;
            }
            ;
            .StepperLine {
                width: 45%;
                height: 0px;
                border: 1px solid #C8C8C8;
                opacity: 1;
                margin: auto 0px;
            }
            .uploadCard {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap-reverse;
                .uploadForm {
                    width: 100%;
                    .formSection {
                        margin-bottom: 30px;
                        width: 100%;
                        background: #FFFFFF 0% 0% no-repeat padding-box !important;
                        border-radius: 15px !important;
                        opacity: 1 !important;
                        box-shadow: none !important;
                        .MuiAccordionSummary-content {
                            justify-content: space-around;
                        }
                        .completed {
                            height: 80px;
                            background: #FFFFFF 0% 0% no-repeat padding-box;
                            border-radius: 15px 15px 0px 0px !important;
                            font-size: 18px/27px;
                            font-family: 'Poppins-SemiBold';
                            text-align: center;
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            text-transform: uppercase;
                            opacity: 1;
                        }
                        .active {
                            height: 80px;
                            background: transparent linear-gradient(90deg, #67FC70 0%, #2bbf8e 100%) 0% 0% no-repeat padding-box;
                            border-radius: 15px 15px 0px 0px !important;
                            font-size: 18px/27px;
                            font-family: 'Poppins-SemiBold';
                            text-align: center;
                            letter-spacing: 0px;
                            color: #FFFFFF;
                            text-transform: uppercase;
                            opacity: 1;
                        }
                        .beactive {
                            height: 80px;
                            background: #FFFFFF 0% 0% no-repeat padding-box;
                            border-radius: 15px 15px 0px 0px !important;
                            font-size: 18px/27px;
                            font-family: 'Poppins-SemiBold';
                            text-align: center;
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            text-transform: uppercase;
                            opacity: 0.3;
                        }
                        .form {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-around;
                            font-family: 'Poppins-Regular';
                            .title {
                                margin: 30px auto;
                                left: 598px;
                                width: 100%;
                                height: 23px;
                                text-align: right;
                                font-size: 13px;
                                font-family: 'Poppins-SemiBold';
                                letter-spacing: 0px;
                                color: #2CC120;
                                opacity: 1;
                                text-align: center;
                                span {
                                    color: #5E5E5E;
                                }
                                flex-direction: column;
                            }
                            >div {
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                input,
                                select {
                                    width: 95%;
                                    height: 30px;
                                    background: #F2F2F2 0% 0% no-repeat padding-box;
                                    border-radius: 15px;
                                    opacity: 1;
                                    border: none;
                                    color: #5E5E5E;
                                    margin: 15px auto;
                                    padding-left: 22px;
                                    text-align: left;
                                    font-size: 13px;
                                    font-family: 'Poppins-Regular';
                                    letter-spacing: 0px;
                                }
                                label {
                                    font-size: 13px;
                                }
                                input:active {
                                    border: none !important;
                                }
                            }
                        }
                    }
                }
                .shoppingCart {
                    width: 100%;
                    margin-bottom: 15px;
                    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border-radius: 15px;
                    opacity: 1;
                    padding-bottom: 20px;
                    .shoppingHeader {
                        text-align: center;
                        position: relative;
                        padding: 35px 0px;
                        p {
                            font-family: 'Poppins-SemiBold';
                            font-size: 14px;
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            text-transform: uppercase;
                            opacity: 1;
                            text-align: center;
                        }
                        .marker {
                            display: flex;
                            justify-content: space-evenly;
                            right: 0;
                            top: 60px;
                            position: absolute;
                            width: 120px;
                            height: 40px;
                            background: transparent linear-gradient(89deg, #FF7F00 0%, #FFC400 100%) 0% 0% no-repeat padding-box;
                            box-shadow: 0px 3px 6px #00000029;
                            border-radius: 15px 0px 0px 15px;
                            opacity: 1;
                            span {
                                text-align: left;
                                font-size: 13px;
                                font-family: 'Poppins-SemiBold';
                                letter-spacing: 0px;
                                color: #FFFFFF;
                                text-transform: uppercase;
                                opacity: 1;
                                margin: auto 0px;
                            }
                            img {
                                margin: auto 0px;
                                width: 25px;
                            }
                        }
                    }
                    .shoppingTable {
                        margin: 31px 6px;
                        height: 219px;
                        overflow-y: scroll;
                        border: 1px solid #BDBDBD;
                        .tableTH {
                            padding: 18px 0px;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            span {
                                text-align: left;
                                font-size: 13px;
                                font-family: 'Poppins-SemiBold';
                                letter-spacing: 0px;
                                color: #5E5E5E;
                                opacity: 1;
                                width: 25%;
                                text-align: center;
                            }
                        }
                        .tableTR {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            padding: 5px 0px;
                            span {
                                text-align: left;
                                font-size: 13px;
                                font-family: 'Poppins-Regular';
                                letter-spacing: 0px;
                                opacity: 1;
                                width: 25%;
                                text-align: center;
                                color: #7C7C7C;
                                opacity: 1;
                            }
                        }
                        .tableTH span:nth-child(2),
                        .tableTR span:nth-child(2) {
                            display: none !important;
                        }
                    }
                    .shoppingFooter {
                        width: 100%;
                        float: right;
                        .tableTF {
                            width: 100%;
                            display: flex;
                            justify-content: space-around;
                            text-align: right;
                            font-size: 12px;
                            font-family: 'Poppins-Medium';
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            opacity: 1;
                            padding: 5px;
                        }
                        .total {
                            font-family: 'Poppins-SemiBold';
                            font-size: 14px;
                            text-align: right;
                            letter-spacing: 0px;
                            color: #5E5E5E;
                            text-transform: uppercase;
                            opacity: 1;
                        }
                    }
                    .text-center {
                        text-align: center;
                    }
                }
                .confirmBtn {
                    margin: 0px;
                    height: 40px;
                    width: 100%;
                    background: var(--cta-ff7f00) 0% 0% no-repeat padding-box;
                    background: #FF7F00 0% 0% no-repeat padding-box;
                    box-shadow: 0px 3px 6px #00000029;
                    border-radius: 15px;
                    opacity: 1;
                    border: none;
                    font-size: 18px/27px;
                    font-family: '';
                    text-align: center;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    text-transform: uppercase;
                    opacity: 1;
                }
            }
        }
    }
`;

export const Header = styled.header``;