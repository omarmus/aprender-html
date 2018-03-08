// Submodule Editor
export default (App, jQuery) => {
  App.editor = (function ($) {

    const $page = $('#page')
    const $editor = $('#editor')
    const $header = $('#header')
    const routeImages = 'static/images/'
    const $tags = $('#tags')

    let id = 0
    let edit = false
    let editor = {}

    function init () {

      $('#btn-new').on('click', function () {
        if (!$.isEmptyObject(App.data.getPage().tags)) {
          if (confirm('Se creará una página en blanco y se borrarán todos sus cambios, puede descargarla y guardarla antes de proceder.\n¿Deséa continuar?')) {
            App.editor.new()
          }
        } else {
          App.editor.new()
        }
      })
      $(window).scroll(function(e) {
        let $tag = $editor.find('.tag.selected')
        if ($tag.length) {
          App.event.scroll($tag)
        }
      })
      $tags.find('a.tag-element').on('click', function(e) {
        e.preventDefault()
        App.editor.add(this)
      })
      $tags.find('a.tag-setting').on('click', function(e) {
        e.preventDefault()
        App.setting.open(this)
      })
      $tags.find('a[data-toggle="tooltip"]').tooltip()
      $tags.find('.tag-menu').on('click', function (e) {
        e.preventDefault()
        $tags.find('.tag-menu-list').slideUp(300)
        $tags.find('.tag-list > li').removeClass('active')

        if(!$(this).next().is(":visible")) {
          $(this).next().slideToggle(300)
          $(this).closest('li').addClass('active')
        }
      })
      $tags.find('.tag-menu:first').click()
      $page.on('click', function (e) {
        let $selected = $editor.find('.tag.selected')
        if($(e.target).closest('.tag').is($selected)) {
          e.preventDefault()
          return
        }
        let $el = $selected.find('.note-editing-area')
        if (App.editor.filterText($el.text())) {
          App.editor.reset($editor)
          App.editor.isEmpty($selected.data('tag'), $el, $selected.find('.tag-edit'))
        }
      })
      App.event.key($editor)
    }

    let btnDone = function (context) {
      let ui = $.summernote.ui;

      let button = ui.button({
        contents: '<i class="fa fa-check" data-action="done"/> Terminar',
        click: function () {
          App.editor.done($editor.find('.tag.selected'))
        }
      })

      return button.render()
    }

    editor.new = function () {
      App.data.destroy()
      $editor.find('.tag').remove()
      $page.css('background-color', '')
      $page.css('background-image', '')
      // $page.css('background-attachment', 'scroll')
    }

    editor.setImg = function ($tag, image) {
      App.data.addHistoric(App.data.getTag($tag.data('id')))
      $tag.find('img').prop('src', routeImages + image).data('img', image)
      $tag.removeClass('edit')
      $tag.height($tag.find('.tag-edit-img').height())
      App.editor.update($tag, 'change-image')
    }

    editor.setProp = function ($tag, prop) {
      $tag.find('.tag-edit').children(prop.tag == 'circle' ? 'div' : prop.tag).css({
        borderWidth: prop.borderWidth || 0,
        borderColor: prop.borderColor || 'transparent',
        backgroundColor: prop.bgColor || 'transparent',
        borderRadius: prop.borderRadius || 0,
        opacity: prop.opacity ? parseFloat(prop.opacity) / 100 : 1
      })
      $tag.removeClass('edit')
      App.editor.update($tag, 'change-prop')
    }

    editor.addForm = function (el) {
      let $el = null
      if (el.type == 'div') {
        id++
        $el = $('div', {
          id : 'tag-div-' + id,

        })
      }
    }

    editor.add = function (el, newTag) {

      if (typeof newTag == 'undefined') {
        newTag = true
      }

      let tag = null
      let data = null
      let top = 0

      if (newTag) {
        let $last = $editor.find('.tag:last')
        if ($last.length) {
          top = parseInt($last.css('top')) + parseInt($last.height()) + 30;
        }

        id++;

        if (el.tag && (el.tag == 'div' || el.tag == 'hr' || el.tag == 'circle')) {
          tag = el.tag;
          data = {
            id: id,
            options: App.template.getOptions(tag),
            width: App.config.tag[tag].width,
            left: ($editor.width() - App.config.tag[tag].width)/2,
            top: top,
            img: null,
            tag: tag,
            zIndex: id,
            borderColor: el.borderColor,
            borderWidth: el.borderWidth,
            borderRadius: el.borderRadius || 0,
            opacity: el.opacity ? parseFloat(el.opacity) / 100 : 1
          }
          console.log('data', data);
          if (el.tag == 'div' || el.tag == 'circle') {
            data.bgColor = el.bgColor;
            data.height = App.config.tag[tag].height;
          }
        } else {
          tag = el.table ? 'table' : el.getAttribute('data-tag')
          data = {
            id: id,
            options: App.template.getOptions(tag),
            width: App.config.tag[tag].width,
            left: ($editor.width() - App.config.tag[tag].width)/2,
            top: top,
            img: typeof el.table == 'undefined' && el.getAttribute('data-img') ? routeImages + el.getAttribute('data-img') : null,
            tag: tag,
            zIndex: id
          }
          // is image
          if ($(el).children('img').length) {
            let width = $(el).children('img')[0].naturalWidth
            if (width < data.width) {
              data.width = width
            }
          }
          // is table
          if (el.table) {
            data.table = App.editor.table(el.rows, el.cols, el.bgColor)
          }
        }
      } else {
        if (el.copy) {
          el.id = ++id
          el.left += 20
          el.top += 20
        }
        data = el
        console.log('data edit', el);
        id = data.id
        tag = data.tag
        top = data.top
        data.options = App.template.getOptions(tag)
      }

      let $element = $($.parseHTML(App.nano(App.template[tag], data)))
      $editor.append($element)

      App.editor.reset($editor)
      let $tag = App.editor.get(tag, id)
      let $counter = $tag.find('.tag-counter')
      if (newTag) {
        if ($editor.find('.tag').length == 1) {
          $(window).scrollTop(top)
        }
        if (top > $(window).height() - $header.height() - 100) {
          $(window).scrollTop(top - 200)
        }
        data.text = tag == 'img' ? '' : $tag.find('.tag-edit').html().trim()
        $tag.addClass('selected')
      } else {
        if (typeof data.copy == 'undefined') {
          $(window).scrollTop(0)
        } else {
          $tag.addClass('selected')
        }
        $tag.find('.tag-edit').html(data.text)
      }

      App.event.edit($tag)
      App.event.draggable($tag, tag, $counter)
      App.event.resizable($tag, tag, $counter)

      // Save tag data
      delete data.copy
      delete data.table
      delete data.options
      App.data.add(data)
    }

    editor.get = function (tag, id) {
      return $('#tag-' + tag + '-' + id)
    }

    editor.reset = function ($editor) {
      let $prev = $editor.find('.tag.selected')
      if ($prev.length) {
        $prev.removeClass('selected')
        App.editor.done($prev)
      }
    }

    editor.getBorderRadio = function ($el) {
      return $el.css('MozBorderRadius') || $el.css('-moz-border-radius-topleft') || $el.css('-webkit-border-top-left-radius')
    }

    editor.edit = function ($tag) {
      App.data.$edit = $tag
      let tag = $tag.data('tag')
      console.log('edit tag', $tag)
      if (tag == 'img') {
        let $images = $('#images').find('.btn-bg-image')
        $images.removeClass('active')
        $images.filter(function (index, el) {
          if (el.getAttribute('data-img') == $tag.find('img').data('img').replace(routeImages, '')) {
            $(el).addClass('active')
          }
        })
        App.modal.show('modal-img')
      } else if (tag == 'div') {
        let $el = $tag.find('.tag-edit').children('div')
        App.setting.cpDivBg.setColor(App.rgb2hex($el.css('backgroundColor')))
        App.setting.cpDivBorder.setColor(App.rgb2hex($el.css('borderLeftColor')))
        App.setting.$divBorder.val(parseInt($el.css('borderLeftWidth')))
        App.setting.$divOpacity.val(parseFloat($el.css('opacity')) * 100)
        App.setting.$divSquare.prop('checked', editor.getBorderRadio($el) != '50%')
        App.setting.$divCircle.prop('checked', editor.getBorderRadio($el) == '50%')
        App.setting.$btnDivSave.children('span').html('Actualizar')
        App.modal.show('modal-div')
      } else if (tag == 'hr') {
        let $el = $tag.find('.tag-edit').children('hr')
        App.setting.cpHrBorder.setColor(App.rgb2hex($el.css('borderTopColor')))
        App.setting.$hrBorder.val(parseInt($el.css('borderTopWidth')))
        App.modal.show('modal-hr')
      } else {
        let $el = $tag.find('.tag-edit')
        $el.summernote({
          focus : typeof App.config.tag[tag].focus != 'undefined' ? App.config.tag[tag].focus : true,
          toolbar: App.config.tag[tag].toolbar,
          fontSizes:["8","9","10","11","12","14","16","18","24","30","36","42","48","60","72"],
          lang: 'es-ES',
          buttons: {
            done: btnDone
          }
        }).on('summernote.change', function(we, contents) {
          $tag.height($tag.find('.note-editable').height())
        })
        $tag.find('[data-action="done"]').parent().removeClass('btn-default').addClass('btn-success')

        $tag.draggable("disable")
      }
      $tag.addClass('edit')
    }

    editor.remove = function ($tag, historic) {
      App.data.remove($tag.data('id'), historic)
      $tag.remove()
    }

    editor.isEmpty = function (tag, $selected, $el) {
      if ((tag == 'ul' || tag == 'ol') && ($selected.text().length == 0 && $el.text().length == 0 || $selected.find('p').length || $el.find('p').length)) {
        $el.html('<li>' + (tag == 'ul' ? 'Lista no ordenada' : 'Lista ordenada') +'</li>')
      }
    }

    editor.update = function ($tag, step) {
      if ($tag.length) {
        let data = {
          id : $tag.data('id'),
          width : parseInt($tag.css('width')),
          left : parseInt($tag.css('left')),
          top : parseInt($tag.css('top')),
          img : $tag.data('tag') == 'img' ? routeImages + $tag.find('img').data('img').replace(routeImages, '') : null,
          tag : $tag.data('tag'),
          text : $tag.data('tag') == 'img' ? '' : $tag.find('.tag-edit').html().trim(),
          zIndex : parseInt($tag.find('.tag-zindex').css('z-index'))
        }
        if (data.tag == 'div' || data.tag == 'hr' || data.tag == 'circle') {
          let $el = $tag.find('.tag-edit').children(data.tag == 'circle' ? 'div' : data.tag)
          if (data.tag == 'div') {
            data.borderColor = $el.css('borderLeftColor')
            data.borderWidth = $el.css('borderLeftWidth')
            data.bgColor = $el.css('backgroundColor')
            data.opacity = $el.css('opacity')
            data.borderRadius = editor.getBorderRadio($el)
            data.height = parseInt($tag.css('height'))

            console.log('div data', data);
          }
        }
        App.data.update(data, step)
      }
    }

    editor.done = function ($tag) {
      let $el = $tag.find('.tag-edit')
      if ($tag.find('.note-editor').length) {
        $el.summernote('destroy')
        $tag.draggable("enable")
      }
      $tag.removeClass('edit')

      App.editor.update($tag)
    }

    editor.filterText = function (text) {
      let words = text.split(' ').filter(function (text) {
        return text.length > 50
      })
      if (words.length) {
        alert('Tiene palabras muy largas para guardar, debe modificarlas o eliminarlas para continuar.\n\nTiene las siguientes palabras:\n' + words.join('\n'))
        return false
      }
      return true;
    }

    editor.table = function (rows, cols, bgColor) {
      let table = '<table style="background-color: ' + bgColor + ';">'

      for (let i = 0, count = 0; i < rows; i++) {
        table += '<tr>'
        for (let j = 0; j < cols; j++) {
          table += '<td>Celda ' + ++count + '</td>'
        }
        table += '</tr>'
      }
      return table + '</table>'
    }

    editor.copy = function ($tag) {
      if ($tag.length) {
        App.data.setCopy($tag.data('id'))
      }
    }

    editor.paste = function () {
      if (App.data.getCopy()) {
        let data = App.data.getCopy()
        data.copy = true
        App.editor.add(data, false)
      }
    }

    editor.undo = function () {
      let historic = App.data.getHistoric()
      let posPrev = historic.length - 1
      let posBefore = historic.length - 2

      let prev = historic[posPrev]
      let before = historic[posBefore]

      // console.log('historic', historic)
      // console.log('prev', historic[posPrev])
      // console.log('prev.step', prev.step)

      // console.log('before', historic[posBefore])
      // if (before) {
        //     console.log('before.step', before.step)
        // }

        if (prev) {
          if (prev.step == 'add') {
            App.editor.remove(App.editor.get(prev.tag, prev.id))
          } else if (prev.step == 'delete') {
            delete prev.step
            App.editor.add(prev)
          } else if (prev.step == 'update') {
            App.editor.remove(App.editor.get(prev.tag, prev.id), false)
            delete before.step
            App.editor.add(before)
          } else if (before.step == 'drag') {
            App.editor.prop({id : before.id, top: before.top, left : before.left})
          } else if (before.step == 'resize') {
            App.editor.prop({id : before.id, width: before.width, height : before.height})
          } else if (before.step == 'change-image') {
            App.editor.setImg(App.editor.get(before.tag, before.id), before.img)
          } else if (before.step == 'bgColor') {
            App.setting.setBgColor(before.value)
          } else if (before.step == 'bgImage') {
            App.setting.setBgImage(before.value)
          } else if (before.step == 'bgAttachment') {
            App.setting.setBgAttachment(before.value)
          } else if (before.step == 'fontFamily') {
            App.setting.setFontFamily(before.value)
          }
        }
      }

      editor.prop = function (data) {
        let $tag = App.editor.get(data.id)
        delete data.id
        for (let prop in data) {
          $tag.css({prop : data[i]})
        }
      }

      init()

      return editor

    })(jQuery)
  }
