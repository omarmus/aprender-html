// Submodule setting
export default (App, jQuery) => {
  App.setting = (function ($) {

    const $page = $('#page')
    const routeBgImages = 'static/images/'
    let cpBg = null

    let cpTable = null

    let cpDivBg = null
    let cpDivBorder = null
    let $divBorder = null
    let $divOpacity = null
    let $divSquare = null
    let $divCircle = null
    let $divBorderTrans = null
    let $divBgTrans = null
    let $btnDivSave = null

    let cpHrBorder = null
    let $hrBorder = null

    function init() {

      // Background
      cpBg = new App.colorpicker('#bg-color', {
        onClick : function (color, el) {
          App.setting.setBgColor(color)
        }
      })

      let $bgImages = $('#bg-image').find('.btn-bg-image')
      $bgImages.on('click', function(e) {
        e.preventDefault()
        $bgImages.removeClass('active')
        $(this).addClass('active')
        App.setting.setBgImage(routeBgImages + this.getAttribute('data-img'))
      })

      $('#bg-attachment').on('click', function(e) {
        App.setting.setBgAttachment(this.checked)
      })

      // Table
      cpTable = new App.colorpicker('#table-colorpicker')
      $('#btn-insert-table').on('click', function () {
        let rows = $('#table-rows').val()
        let cols = $('#table-cols').val()
        if (rows.length == 0 || cols.length == 0 || parseInt(rows) == 0 || parseInt(cols) == 0) {
          alert('¡Datos invalidos!')
          return false
        }
        App.editor.add({
          table : true,
          rows : rows,
          cols : cols,
          bgColor : $('#table-transparent')[0].checked ? 'transparent' : (cpBg.getColor() ? cpBg.getColor() : 'transparent')
        })
      })

      // Images
      let $images = $('#images').find('.btn-bg-image')
      $images.on('click', function(e) {
        e.preventDefault()
        $images.addClass('active')
        if (App.data.$edit) {
          App.editor.setImg(App.data.$edit, this.getAttribute('data-img'))
        } else {
          App.editor.add(this)
        }
        App.modal.hide('modal-img', function () {
          App.data.$edit = null
        })
      })

      // Contenedor Div
      $divBorder = $('#div-border')
      $divOpacity = $('#div-opacity')
      $divSquare = $('#div-square')
      $divCircle = $('#div-circle')
      $divBgTrans = $('#div-bg-transparent')
      $divBorderTrans = $('#div-border-transparent')
      $btnDivSave = $('#btn-insert-div')

      cpDivBg = new App.colorpicker('#div-bg-colorpicker')
      cpDivBorder = new App.colorpicker('#div-border-colorpicker')

      $btnDivSave.on('click', function () {
        let divBg = cpDivBg.getColor()
        let divBorder = cpDivBorder.getColor()
        let border = App.setting.$divBorder.val()
        let data = {
          tag : 'div',
          borderWidth : border,
          borderColor : $divBorderTrans[0].checked ? 'transparent' : (cpDivBorder.getColor() ? cpDivBorder.getColor() : 'transparent'),
          bgColor : $divBgTrans[0].checked ? 'transparent' : (cpDivBg.getColor() ? cpDivBg.getColor() : 'transparent'),
          opacity: $divOpacity.val(),
          borderRadius: $divSquare.prop('checked') ? '0': '50%'
        }
        if (App.data.$edit) {
          App.editor.setProp(App.data.$edit, data)
        } else {
          App.editor.add(data)
        }

        App.modal.hide('modal-div', function () {
          App.data.$edit = null
        })
      })

      // Línea hr
      cpHrBorder = new App.colorpicker('#hr-border-colorpicker')
      $hrBorder = $('#hr-border')

      $('#btn-insert-hr').on('click', function () {
        let divBorder = cpHrBorder.getColor()
        let border = App.setting.$hrBorder.val()
        let data = {
          tag : 'hr',
          borderWidth : border,
          borderColor : cpHrBorder.getColor() ? cpHrBorder.getColor() : '#000000'
        }
        if (App.data.$edit) {
          App.editor.setProp(App.data.$edit, data)
        } else {
          App.editor.add(data)
        }

        App.modal.hide('modal-hr', function () {
          App.data.$edit = null

          App.editor.addForm({
            type : 'div',
            borderWidth : border,
            borderColor : $('#div-border-transparent')[0].checked ? 'transparent' : (cpDivBorder.getColor() ? cpDivBorder.getColor() : 'transparent'),
            bgColor : $('#div-bg-transparent')[0].checked ? 'transparent' : (cpDivBg.getColor() ? cpDivBg.getColor() : 'transparent')
          })
        })
      })
    }

    init()

    let setting = {}

    setting.setBgColor = function (color) {
      App.data.addHistoric({step: 'bgColor', value : $page.css('background-color')})
      $page.css('background-color', color)
      App.data.setSettings('bgColor', color)
    }

    setting.setBgImage = function (image) {
      let img = $page.css('background-image')
      if (img != 'none') {
        img = img.substring(img.indexOf(routeBgImages))
        img = img.substring(0, img.length - 2)
      }
      App.data.addHistoric({step: 'bgImage', value: img})
      $page.css('background-image', 'url(' + image + ')')
      App.data.setSettings('bgImage', image)
    }

    setting.setBgAttachment = function (attachment) {
      attachment = attachment ? 'fixed' : 'scroll'
      App.data.addHistoric({step: 'bgAttachment', value: $page.css('background-attachment')})
      $page.css('background-attachment', attachment)
      App.data.setSettings('bgAttachment', attachment)
    }

    setting.setFontFamily = function (font) {
      App.data.addHistoric({step: 'fontFamily', value: $page.css('font-family')})
      $page.css('font-family', font)
      App.data.setSettings('fontFamily', font)
    }

    setting.initBgColor = function (color) {
      cpBg.setColor(color)
    }

    setting.initBgImage = function (image) {
      $('#bg-image').find('.btn-bg-image[data-img="' + image.replace(routeBgImages, '') + '"]').addClass('active')
    }

    setting.initBgAttachment = function (prop) {
      $('#bg-attachment').prop('checked', prop == 'fixed')
    }

    setting.initFontFamily = function (font) {

    }

    setting.cpBg = cpBg
    setting.cpTable = cpTable
    setting.cpDivBg = cpDivBg
    setting.cpDivBorder = cpDivBorder
    setting.cpHrBorder = cpHrBorder
    setting.$divBorder = $divBorder
    setting.$divBorderTrans = $divBorderTrans
    setting.$divBgTrans = $divBgTrans
    setting.$hrBorder = $hrBorder
    setting.$divOpacity = $divOpacity
    setting.$divSquare = $divSquare
    setting.$divCircle = $divCircle
    setting.$btnDivSave = $btnDivSave

    setting.routeBgImages = routeBgImages

    setting.open = function (el) {
      let option = el.getAttribute('data-option')
      if (option == 'img') {
        $('#images').find('.btn-bg-image').removeClass('active')
        App.modal.show('modal-img')
      } else if (option == 'table') {
        cpTable.resetColor()
        App.modal.show('modal-table')
      } else if (option == 'div') {
        cpDivBg.resetColor()
        cpDivBorder.resetColor()
        $divBorder.val(1)
        $divBgTrans[0].checked = false
        $divBorderTrans[0].checked = false
        $divOpacity.val(100)
        $divSquare.prop('checked', true)
        $btnDivSave.children('span').html('Insertar')
        App.modal.show('modal-div')
      } else if (option == 'hr') {
        cpHrBorder.resetColor()
        $hrBorder.val(1)
        App.modal.show('modal-hr')
      } else if (option == 'font') {
        App.modal.show('modal-font')
      } else if (option == 'page') {
        App.modal.show('modal-page')
      } else {
        App.modal.showWhite()
      }
    }

    return setting

  })(jQuery)
}
