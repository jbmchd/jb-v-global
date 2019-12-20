const string = {
  methods: {
    // STRING
    $toLowerCase(string) {
      return string
        .split('-')
        .map((string, key) =>
          key > 0 ? string[0].toLowerCase() + string.slice(1) : string
        )
        .join('')
    },
    $toUpperCase(string) {
      return string
        .split('-')
        .map(string => string[0].toUpperCase() + string.slice(1))
        .join('')
    },
    $removerEspacos(string) {
      let regex = this.$regex('espacos')
      return string.replace(regex, '') //remove os espaços
    },
    $removerAcentos(str) {
      str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
    $toUpperFirstLetter(string) {
      return string ? string[0].toUpperCase() + string.slice(1) : string
    },
    $toLowerFirstLetter(string) {
      return string ? string[0].toUpperCase() + string.slice(1) : string
    },
    $retirarFormatacaoCpfCnpj(value) {
      return !value ? value : value.toString().replace(/(\.|\/|\-)/g, '')
    },
    $mascaraCPF(cpf) {
      return !cpf
        ? cpf
        : cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    },
    $mascaraCNPJ(cnpj) {
      return !cnpj
        ? cnpj
        : cnpj
            .toString()
            .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    },
    $mascaraCNS(cns) {
      return !cns
        ? cns
        : cns.toString().replace(/(\d{2})(\d{3})(\d{1})/g, '$1.$2-$3')
    }
  }
}

export default string
