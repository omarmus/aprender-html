// Submodule Form
export default App => {
  App.form = (function () {

    let inputBase = function (query, type) {
      $(query).on('keydown', function (e) {
        App.filter[type](e, this.value)
      }).on('paste', function () {
        let el = this;
        setTimeout(function () {
          if (!App.filter['is' + type.substr(0,1).toUpperCase() + type.substr(1)](el.value)) {
            el.value = '';
          }
        }, 1)
      })
    }
    let form = {};

    form.integer = function (query) {
      inputBase(query, 'integer')
    }
    form.decimal = function (query) {
      inputBase(query, 'decimal')
    }
    form.numeric = function (query) {
      inputBase(query, 'numeric')
    }
    form.natural = function (query) {
      inputBase(query, 'natural')
    }
    form.alpha = function (query) {
      inputBase(query, 'alpha')
    }
    form.alphaNumeric = function (query) {
      inputBase(query, 'alphaNumeric')
    }
    form.alphaDash = function (query) {
      inputBase(query, 'alphaDash')
    }

    form.render = function (container) {
      container = container || ''
      App.form.integer(container + ' .integer')
      App.form.decimal(container + ' .decimal')
      App.form.numeric(container + ' .numeric')
    }

    return form
  }())
}
