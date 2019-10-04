const INITIAL_STATE = {list: []}

const FatorCotizacaoCDI = () => {}

const FatorCotizacaoIPCA = () => {}

const FatorCotizacaoPrefixado = () => {}

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
