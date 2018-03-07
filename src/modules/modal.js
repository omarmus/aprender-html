// Submodule modal
export default (App, jQuery) => {
  App.modal = (function ($) {

    let idDefault = 'modal-main'

    let modal = {}

    modal.show = function (id) {
      $('#' + (id || idDefault)).modal()
    }

    modal.showWhite = function (id) {
      $('#' + (id || idDefault)).modal({
        backdrop : false
      })
    }

    modal.hide = function (id, callback) {
      $('#' + (id || idDefault)).modal('hide').on('hidden.bs.modal', function () {
        callback()
      })
    }

    return modal

  })(jQuery)
}
