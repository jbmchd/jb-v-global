import Vue from 'vue'
import {
  array,
  object,
  mascaras,
  diversos,
  regex,
  string,
  validacao,
  componentes
} from './functions'

Vue.prototype.$jb = {regex, object, string, validar: validacao, array, mascara: mascaras, ...diversos, ...componentes}