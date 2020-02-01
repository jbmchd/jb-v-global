export default {
        copiar: (value) => {
          return JSON.parse(JSON.stringify(value))
        },
        typeof: (value, eTipo) => {
          let tipo = typeof value;

          if (value === null) {
            tipo = "null";
          } else if (value === undefined) {
            tipo = "undefined";
          } else if (value === true || value === false) {
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
