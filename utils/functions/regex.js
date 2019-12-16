const regex = {
  methods: {
    /* ======================
     * Expressoes regulares
     * ======================
     */
    $regex(tipo, value_test) {
      let regex_tipos = {
        email: /^[^@]+@[^@]+\.[^@]+$/,
        cpf: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
        cnpj: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/,
        date_ptbr: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)((19|20))(\d{2})$/,
        datetime_ptbr: /^(0[\d]|[12][\d]|3[01])\/(0[\d]|1[0-2])\/\d\d\d\d (00|[\d]|1[\d]|2[0-3]):([\d]|[0-5][\d]):?([\d]|[0-5][\d])$/,
        date_us: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/,
        datetime_us: /^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][\d]|3[01]) (00|[\d]|1[\d]|2[0-3]):([\d]|[0-5][\d]):?([\d]|[0-5][\d])$/,
        time: /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,
        currency: /\d+|,(\.\d{3})*(,\d+)?/gm,
        espacos: /\s/g
      };

      let regex = regex_tipos[tipo];

      return value_test ? regex.test(value_test) : regex;
    }
  }
};

export default regex;
