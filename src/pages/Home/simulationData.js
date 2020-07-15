import img1 from '../../assets/images/01.png';

export const getSteps = () => {
  return ["Select", "Create an ad group", "Create an ad"];
};

export const getTableData = () => {
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
};

export const getResult = () => {
  return [
    { title: "Subtotal:", value: "R$ 674,00" },
    { title: "Desconto:", value: "- R$ 269,60" },
    { title: "Frete:", value: "R$ 0,00" },
    { title: "Subtotal:", value: "R$ 674,00" },
  ];
};