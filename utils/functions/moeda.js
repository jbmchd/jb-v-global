const moeda = {
  methods: {
    // MOEDA
    $formataNumeroParaMoeda(value, digits) {
      if (parseFloat(value)) {
        value = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: digits || 2
        }).format(value);
      }

      return value;
    }
  }
};

export default moeda;
