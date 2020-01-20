import diversos from './diversos'

export default {
  hasKey: (key, obj) => {
    return obj ? {}.hasOwnProperty.call(obj, key) : false
  },
  getKeyByValue: (object, value) => {
    return Object.keys(object).find(key => object[key] == value)
  },
  copiar: (obj) => {
    return diversos.typeof(obj, 'object') ? JSON.parse(JSON.stringify(obj)) : {}
  }
}
