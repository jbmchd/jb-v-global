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
} from './../../jbmchd/jb-v-global/functions'

Vue.prototype.$jb = {regex, object, string, validar: validacao, array, mascara: mascaras, ...diversos, ...componentes}