import {
  array,
  datetime,
  object,
  moeda,
  numero,
  comuns,
  regex,
  string,
  validacao,
  componentes
} from './utils/functions'

const globalMixin = {
  mixins: [
    array,
    object,
    datetime,
    comuns,
    moeda,
    numero,
    string,
    regex,
    validacao,
    componentes
  ],
  // props: { value: { type: [ String, Number, Boolean, Array, Object, Date, Function, Symbol, CustomEvent, InputEvent, Event ] } },
  props: ['value'],
  data() {
    return {
      atualizar_componente: false,
      value_data: this.value
    }
  },
  computed: {
    _id() {
      let id = this.id || `uid_${this._uid}`
      return id.toString()
    },
    vmodel: {
      get() {
        return this.value || this.value_data
      },
      set(v) {
        this.value_data = v
      }
    }
  },
  watch: {
    value(v) {
      this.vmodel = v
    }
  },
  methods: {
    atualizarComponente() {
      this.atualizar_componente = !this.atualizar_componente
    },
    bootstrapvue_ref(novo_ref) {
      return this.ref || novo_ref || `uid_${this._uid}`
    }
  }
}

export default globalMixin
