// Submodule data
export default (App, jQuery) => {
  App.data = (function ($) {

    let page = new App.page().empty
    let tags = {}
    let historic = []
    let undo = []
    let $edit = null

    let copy = null
    let cut = null

    let data = {}

    data.load = function () {
      if (!App.storage.isEmpty()) {
        let page = App.storage.get()

        let settings = page.settings

        if (settings.bgColor) {
          App.setting.initBgColor(settings.bgColor)
          App.setting.setBgColor(settings.bgColor)
        }

        if (settings.bgImage) {
          App.setting.initBgImage(settings.bgImage)
          App.setting.setBgImage(settings.bgImage)
        }

        if (settings.bgAttachment) {
          App.setting.initBgAttachment(settings.bgAttachment)
          App.setting.setBgAttachment(settings.bgAttachment)
        }

        let tags = page.tags
        for (let i in tags) {
          App.editor.add(tags[i], false)
        }
        App.data.resetHistoric()
      }
    }

    data.setSettings = function (key, value) {
      page.settings[key] = value
      App.storage.set(page)

      historic.push({step : key, value : value})
    }

    data.setTags = function (tags) {
      page.tags = tags
    }

    data.add = function (tag) {
      if (typeof tags[tag.id] == 'undefined') {
        tags[tag.id] = tag
        App.data.setTags(tags)
        App.storage.set(page)

        tag.step = 'add'
        historic.push(tag)
      }
    }

    data.update = function (tag, step) {
      if (tags[tag.id]) {
        tags[tag.id] = tag
        App.data.setTags(tags)
        App.storage.set(page)
        tag.step = step || 'update'
        if (!App.data.compare(historic[historic.length - 1], tag) || tag.step == 'drag' || tag.step == 'resize') {
          historic.push(tag)
        }
      }
    }

    data.remove = function (id, history) {
      history = typeof history == 'undefined' ? true : history
      if (tags[id] && history) {
        let tag = tags[id]
        tag.step = 'delete'
        historic.push(tag)

        delete tags[id]
        App.data.setTags(tags)
        App.storage.set(page)
      }
    }

    data.getTag = function (id) {
      return tags[id]
    }

    data.getPage = function () {
      return page
    }

    data.setPage = function (data) {
      page = data;
      App.storage.set(page);
    }

    data.setCopy = function (id) {
      copy = App.data.getTag(id)
    }

    data.getCopy = function () {
      return copy
    }

    data.cut = function (id) {
      App.data.setCopy(id)
      App.data.remove(id)
    }

    data.getHistoric = function () {
      return historic
    }

    data.resetHistoric = function () {
      historic = []
    }

    data.getUndo = function () {
      return undo
    }

    data.addHistoric = function (data) {
      historic.push(data)
    }

    data.getStepUndo = function (pos) {
      return undo[pos]
    }

    data.setStepUndo = function (tag) {
      undo.push(tag)
    }

    data.compare = function (a, b) {
      if (typeof a != 'undefined') {
        return a.id == b.id &&
        a.text == b.text &&
        a.left == b.left &&
        a.top == b.top &&
        a.img == b.img &&
        a.tag == b.tag &&
        a.width == b.width
      }
      return true
    }

    data.getImages = function () {
      let page = App.data.getPage()
      let tags = page.tags
      let images = []

      if (page.settings.bgImage != App.setting.routeBgImages) {
        images.push(page.settings.bgImage)
      }

      for (let i in tags) {
        if (tags[i].img) {
          images.push(tags[i].img)
        }
      }
      return images
    }

    data.destroy = function (page) {
      App.storage.destroy()
      page = new App.page().empty
      tags = {}
      historic = []
      copy = null
    }

    data.$edit = $edit
    data.copy = copy

    return data

  })(jQuery)
}
