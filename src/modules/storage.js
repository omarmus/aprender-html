// Submodule storage
export default (App, jQuery) => {
  App.storage = (function ($) {

    let id = 'editor'

    let storage = {}

    storage.set = function (data) {
      localStorage.setItem(id, JSON.stringify(data))
    }

    storage.get = function () {
      return JSON.parse(localStorage.getItem(id))
    }

    storage.destroy = function () {
      localStorage.removeItem(id)
    }

    storage.isEmpty = function () {
      return localStorage.getItem(id) == null
    }

    return storage

  })(jQuery)
}
