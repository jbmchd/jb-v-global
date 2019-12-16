const array = {
  methods: {
    // ARRAY
    $removerElementosVaziosArray(array) {
      return array.filter(function(el) {
        return !!el
      })
    },
  }
}

export default array
