const numero = {
  methods: {
    $formataNumeroParaCartaoCredito(numero) {
      var str = this.$removerEspacos(numero);
      var numberChunks = str.match(/.{1,4}/g); //separa o numero em grupos de 4
      var result = numberChunks.join(" ");
      return result;
    }
  }
};

export default numero;
