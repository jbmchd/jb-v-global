import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger mr-3'
  },
  buttonsStyling: false
})

const componentes = {
  methods: {
    $makeConfirm(options) {
      options = Object.assign(
        {
          title: 'Atenção!',
          text: 'Tem certeza?',
          // icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
          reverseButtons: true
        },
        options
      )

      return new Promise((resolve, reject) => {
        swalWithBootstrapButtons
          .fire(options)
          .then(result => resolve(result))
          .catch(error => reject(error))
      })
    },
    $makeToast(variant, msg = null, title = null) {
      if (variant == 'success') {
        msg = msg || 'Operação realizada com sucesso.'
        title = title || 'Tudo certo!'
      }
      if (variant == 'danger') {
        msg = msg || 'Ocorreu algum problema.'
        title = title || 'Atenção!'
      }

      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }
}

export default componentes
