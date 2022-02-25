export default {
  cohort: [
    { value: 1001, label: "ccRCC", color: "#450A01", show: true },
    { value: 1002, label: "nonCCRCC", color: "#2A68EE", show: true },
  ],
  isConfirmatory: [
    { value: 2001, label: "False", color: "#7466B8", show: true },
    { value: 2002, label: "True", color: "#75BDBE", show: true },
  ],
  tumorClass: [
    { value: 3001, label: "AML", color: "#5F7E97", show: true },
    { value: 3002, label: "BHD", color: "#145DAE", show: true },
    { value: 3003, label: "ChRCC", color: "#DE8E13", show: true },
    { value: 3004, label: "ESCRCC", color: "#1C171F", show: true },
    { value: 3005, label: "MEST", color: "#DF7D26", show: true },
    { value: 3006, label: "MTOR Mutated RCC", color: "#2B1781", show: true },
    { value: 3007, label: "MTSCC-variant", color: "#F5B1A4", show: true },
    { value: 3008, label: "ND", color: "#3EBB4A", show: true },
    { value: 3009, label: "Oncocytoma type1", color: "#25A61F", show: true },
    { value: 3010, label: "Oncocytoma type2", color: "#0CA0D8", show: true },
    { value: 3011, label: "Oncocytoma variant", color: "#061B27", show: true },
    { value: 3012, label: "PRCC", color: "#3FE667", show: true },
    { value: 3013, label: "PRCC type1", color: "#08328E", show: true },
    { value: 3014, label: "PUC", color: "#4A0D4B", show: true },
    { value: 3015, label: "TRCC", color: "#ACC3AA", show: true },
    { value: 3016, label: "ccRCC", color: "#B9CDF4", show: true },
    { value: 3017, label: "unRCC", color: "#1051D2", show: true },
  ],
  Age: [
    { value: 4001, label: "54.0-62.0 (25%-50%)", color: "#0999E1", show: true },
    { value: 4002, label: "62.0-69.0(50%-75%)", color: "#04F819", show: true },
    { value: 4003, label: "<54.0 (25%)", color: "#7B9BDA", show: true },
    { value: 4004, label: ">=69.0 (>75%)", color: "#58CD65", show: true },
  ],
  Sex: [
    { value: 5001, label: "Female", color: "#8FD5EB", show: true },
    { value: 5002, label: "Male", color: "#052619", show: true },
  ],
  consent_race: [
    { value: 6001, label: "Asian", color: "#244D0F", show: true },
    {
      value: 6002,
      label: "Black or African American",
      color: "#19D00B",
      show: true,
    },
    { value: 6003, label: "Not Reported", color: "#C8ABD2", show: true },
    { value: 6004, label: "White", color: "#E7AD3C", show: true },
  ],
  consent_participant_country: [
    { value: 7001, label: "Other", color: "#321E82", show: true },
    { value: 7002, label: "Poland", color: "#E8E7E8", show: true },
    { value: 7003, label: "Ukraine", color: "#65AAA5", show: true },
    { value: 7004, label: "United States", color: "#668F7E", show: true },
    { value: 7005, label: "Vietnam", color: "#33C491", show: true },
  ],
  stage: [
    { value: 8001, label: "Stage I", color: "#0A756C", show: true },
    { value: 8002, label: "Stage II", color: "#646266", show: true },
    { value: 8003, label: "Stage III", color: "#0E78FD", show: true },
    { value: 8004, label: "Stage IV", color: "#FD0B92", show: true },
    { value: 8005, label: "T0", color: "#4DADE4", show: true },
    { value: 8006, label: "unknown", color: "#64975B", show: true },
  ],
  "Vital status": [
    { value: 9001, label: "Deceased", color: "#6DB7E4", show: true },
    { value: 9002, label: "Living", color: "#FAC434", show: true },
  ],
  hypertension: [
    { value: 10001, label: "False", color: "#D1DC9B", show: true },
    { value: 10002, label: "True", color: "#D85F16", show: true },
  ],
  grade: [
    { value: 11001, label: "G1", color: "#9405A4", show: true },
    { value: 11002, label: "G2", color: "#01C106", show: true },
    { value: 11003, label: "G3", color: "#55F3A0", show: true },
    { value: 11004, label: "G4", color: "#C0C7D8", show: true },
    { value: 11005, label: "GX", color: "#E45E3D", show: true },
  ],
  BMI: [
    {
      value: 12001,
      label: "25.585-28.75 (25%-50%)",
      color: "#DAB60F",
      show: true,
    },
    {
      value: 12002,
      label: "28.75-35.83(50%-75%)",
      color: "#43829A",
      show: true,
    },
    { value: 12003, label: "<25.585 (25%)", color: "#22AA59", show: true },
    { value: 12004, label: ">=35.83 (>75%)", color: "#23BCE6", show: true },
  ],
  Weight_at_surgery: [
    {
      value: 13001,
      label: "75.0-89.0 (25%-50%)",
      color: "#D07732",
      show: true,
    },
    {
      value: 13002,
      label: "89.0-104.5(50%-75%)",
      color: "#C89EB0",
      show: true,
    },
    { value: 13003, label: "<75.0 (25%)", color: "#4B3016", show: true },
    { value: 13004, label: ">=104.5 (>75%)", color: "#0A6390", show: true },
  ],
  alcohol_consumption: [
    { value: 14001, label: "heavy drinker", color: "#096A3E", show: true },
    { value: 14002, label: "light drinker", color: "#F08F5B", show: true },
    { value: 14003, label: "non-drinker", color: "#27649A", show: true },
    { value: 14004, label: "not reported", color: "#C5BCFE", show: true },
    { value: 14005, label: "past drinker", color: "#8D0263", show: true },
  ],
  smoking_history: [
    { value: 15001, label: "current smoker", color: "#3E4E05", show: true },
    { value: 15002, label: "non-smoker", color: "#5D923A", show: true },
    { value: 15003, label: "not reported", color: "#999F91", show: true },
    {
      value: 15004,
      label: "past smoker more than 15 years",
      color: "#EA1935",
      show: true,
    },
    {
      value: 15005,
      label: "past smoker unknown years",
      color: "#579334",
      show: true,
    },
    {
      value: 15006,
      label: "past smoker within 15 years",
      color: "#2D4E40",
      show: true,
    },
  ],
  simp_country: [
    { value: 16001, label: "Poland", color: "#3827DA", show: true },
    { value: 16002, label: "Ukraine", color: "#BBABFA", show: true },
    { value: 16003, label: "United States", color: "#1CFBAE", show: true },
    { value: 16004, label: "Vietnam", color: "#87360B", show: true },
    { value: 16005, label: "other", color: "#A0DE03", show: true },
  ],
  simp_stage: [
    { value: 17001, label: "Stage I", color: "#377611", show: true },
    { value: 17002, label: "Stage II", color: "#A1A6D3", show: true },
    { value: 17003, label: "Stage III", color: "#579E62", show: true },
    { value: 17004, label: "Stage IV", color: "#4921E6", show: true },
    { value: 17005, label: "other", color: "#AF5A21", show: true },
  ],
  methyl_type1: [
    { value: 18002, label: "1.0", color: "#B2CFA4", show: true },
    { value: 18003, label: "2.0", color: "#D2E27F", show: true },
    { value: 18004, label: "3.0", color: "#56942C", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  methyl_type2: [
    { value: 19002, label: "1.0", color: "#2B03A8", show: true },
    { value: 19003, label: "2.0", color: "#B17F1F", show: true },
    { value: 19004, label: "3.0", color: "#39C1E9", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  im_type: [
    { value: 20002, label: "im1", color: "#970C5D", show: true },
    { value: 20003, label: "im2", color: "#6BF13F", show: true },
    { value: 20004, label: "im3", color: "#FAE99A", show: true },
    { value: 20005, label: "im4", color: "#59D694", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  im_type_discovery: [
    { value: 21002, label: "CD8+ inflamed", color: "#BD9ADA", show: true },
    { value: 21003, label: "CD8- inflamed", color: "#26453A", show: true },
    {
      value: 21004,
      label: "Metabolic immune-desert",
      color: "#3F2ADD",
      show: true,
    },
    { value: 21005, label: "VEGF immune-desert", color: "#A80C61", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  BAP1: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  FLCN: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  MET: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  MTOR: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  PBRM1: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  SETD2: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  TP53: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  TSC1: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  TSC2: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  VHL: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  CCND1: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  gain_chr7: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  gain_chr17: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  loss_chr1: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  loss_chr3p: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
  loss_chr14q: [
    { value: 21002, label: "0.0", color: "#BD9ADA", show: true },
    { value: 21003, label: "1.0", color: "#26453A", show: true },
    { value: null, label: "", color: "#ffffff", show: true },
  ],
};
