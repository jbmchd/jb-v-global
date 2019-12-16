import comuns from './comuns'

const object = {
  mixins: [comuns],
  methods: {
    $hasKey(key, obj) {
      if (obj) {
        return {}.hasOwnProperty.call(obj, key)
      }

      return false
    },
    $getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] == value)
    },
    $copiarObjeto(obj) {
      return this.$typeof(obj, 'object') ? JSON.parse(JSON.stringify(obj)) : {}
    },
    $laravelArrayErrosToString(array) {
      let erros = ''
      if (!this.$typeof(array, 'object')) {
        console.log('não é objeto')
        return {}
      }

      for (const key in array) {
        const mensagem = array[key]
        erros += mensagem.join('. ')
      }

      return erros
    }
    // $criarObjetoMensagensForm(mensagens, tipo, detalhes, tooltip) {
    //   return {
    //     mensagens: mensagens,
    //     tipo: tipo,
    //     detalhes: detalhes,
    //     tooltip: tooltip
    //   }
    // },
    // $buscarItemDatatable(
    //   datatable,
    //   valor_procurado,
    //   campo_de_busca = 'value',
    //   case_sensitive = false
    // ) {
    //   if (!valor_procurado || valor_procurado == undefined) {
    //     return {
    //       index: -1,
    //       result: null
    //     }
    //   }

    //   if (typeof valor_procurado == 'object') {
    //     valor_procurado = valor_procurado[campo_de_busca]
    //   }

    //   if (!case_sensitive) {
    //     valor_procurado = valor_procurado.toString().toUpperCase()
    //   }

    //   let indexItem = -1
    //   let result = datatable.filter(dtItem => {
    //     let item = dtItem[campo_de_busca]
    //     if (item) {
    //       let dtitem_valor = !case_sensitive
    //         ? item.toString().toUpperCase()
    //         : item

    //       if (dtitem_valor == valor_procurado) {
    //         indexItem = datatable.indexOf(dtItem)
    //         return datatable[indexItem]
    //       }
    //     }
    //   })

    //   return {
    //     index: indexItem,
    //     result: result.length ? result[0] : null
    //   }
    // },
    // $resetarObjeto(obj, modelo) {
    //   for (const key in obj) {
    //     let cada = obj[key]

    //     if (modelo && this.$hasKey(key, modelo)) {
    //       cada = modelo[key]
    //     } else {
    //       if (this.$typeof(cada, 'null')) {
    //         cada = null
    //       }
    //       if (this.$typeof(cada, 'boolean')) {
    //         cada = true
    //       } else if (this.$typeof(cada, 'object')) {
    //         cada = {}
    //       } else if (this.$typeof(cada, 'array')) {
    //         cada = []
    //       } else if (this.$typeof(cada, 'string')) {
    //         cada = ''
    //       }
    //     }

    //     obj[key] = cada
    //   }

    //   return obj
    // }
  }
}

export default object
