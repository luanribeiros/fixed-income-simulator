const INITIAL_STATE = {
  datas: {
      minInvestValue: 1,
      maxInvestValue: 1000000,
      defaultInvestValue: 100000,
      stepInvestValue: 5000,

      minPeriod: 1,
      maxPeriod: 120,
      defaultPeriod: 25,
      stepPeriod: 1,

      minCdiPercentRate: 0.1,
      maxCdiPercentRate: 2,
      defaultCdiPercentRate: 1,
      stepCdiPercentRate: 0.01,

      minCdiPlusRate: -0.03,
      maxCdiPlusRate: 0.03,
      defaultCdiPlusRate: 0.01,
      stepCdiPlusRate: 0.001,

      minIpcaPlusRate: 0.01,
      maxIpcaPlusRate: 0.15,
      defaultIpcaPlusRate: 0.05,
      stepIpcaPlusRate: 0.005,

      minFixedRate: 0.03,
      maxFixedRate: 0.15,
      defaultFixedRate: 0.08,
      stepFixedRate: 0.005,

      minDiRate: 0.01,
      maxDiRate: 0.2,
      defaultDiRate: 0.059,
      stepDiRate: 0.001,

      minIpcaRate: 0.01,
      maxIpcaRate: 0.2,
      defaultIpcaRate: 0.035,
      stepIpcaRate: 0.001,

      rateOptions: ["% do CDI", "CDI + %", "IPCA + %", "Prefixado"]
    }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DATAS':
      return {
        ...state,
        list: action.payload.data
      }
    default:
      return state
  }
}
