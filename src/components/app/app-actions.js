import axios from 'axios'

const URL = 'http://localhost:3001/datas'

export function GetDatas () {
  const request = axios.get(URL)
  return {
    type: 'GET_DATAS',
    payload: request
  }
}

export function InvestValue(e) {
  return {
    type: 'INVEST_VALUE',
    payload: e.target.value
  }
}

export function Period(e) {
  return {
    type: 'PERIOD',
    payload: e.target.value
  }
}

export function CdbLc(e) {
  return {
    type: 'CDB_LC',
    payload: e.target.value
  }
}

export function LciLca(e) {
  return {
    type: 'LCI_LCA',
    payload: e.target.value
  }
}

export function Di(e) {
  return {
    type: 'DI',
    payload: e.target.value
  }
}

export function IPCA(e) {
  return {
    type: 'IPCA',
    payload: e.target.value
  }
}
