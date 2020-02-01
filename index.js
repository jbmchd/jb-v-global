import Vue from 'vue'
import regex from './regex'
import componentes from './componentes'
import {
  array,
  object,
  mascaras,
  diversos,
  string,
  validacao,
} from './functions'


Vue.prototype.$jb = {regex, object, string, validar: validacao, array, mascara: mascaras, ...diversos, ...componentes}
