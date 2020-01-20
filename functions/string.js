import regex from './regex'

export default {
  toUpperFirstLetter : (string) => {
    return string ? string[0].toUpperCase() + string.slice(1) : string
  },
  toLowerFirstLetter : (string) => {
    return string ? string[0].toUpperCase() + string.slice(1) : string
  },
  removerEspacos : (string) => {
    return string.replace(regex.espacos, '') //remove os espaços
  },
  removerAcentos : (str) => {
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
}
