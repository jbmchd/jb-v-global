export default {
  removerElementosVazios: array => {
    return array.filter(el => {
      return !!el
    })
  },
}