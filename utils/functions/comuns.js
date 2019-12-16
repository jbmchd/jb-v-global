const comuns = {
  methods: {
    // OUTROS
    $typeof(v, eTipo) {
      let tipo = typeof v;

      if (v === null) {
        tipo = "null";
      } else if (v === undefined) {
        tipo = "undefined";
      } else if (v === true || v === false) {
        tipo = "boolean";
      } else if (tipo == "object" && Array.isArray(v)) {
        tipo = "array";
      }

      if (eTipo) {
        return eTipo === tipo;
      }

      return tipo;
    }
  }
};

export default comuns;
