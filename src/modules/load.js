// Submodule load
export default (App, jQuery) => {
  App.load = (function ($) {

    function init() {
      App.data.load()
      App.form.render()
    }

    init()

  })(jQuery)
}
