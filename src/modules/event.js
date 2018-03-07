// Submodule event
export default (App, jQuery) => {
  App.event = (function ($) {

    let event = {}
    const $editor = $('#editor')

    event.key = function ($editor) {
      let ctrlDown = false
      let ctrlKey = 17, vKey = 86, cKey = 67, dKey = 46, uKey = 90, cuKey

      $(document).on('keydown', function(e) {
        if (e.keyCode == ctrlKey) {
          ctrlDown = true
        }
      }).on('keyup', function(e) {
        if (e.keyCode == ctrlKey) {
          ctrlDown = false
        }
      })

      $(document).on('keydown', function(e) {
        if ($editor.find('.tag.edit').length == 0) {
          if (ctrlDown && e.keyCode == cKey) {
            App.editor.copy($editor.find('.tag.selected'))
          }
          if (ctrlDown && e.keyCode == vKey) {
            App.editor.paste()
          }
          if (e.keyCode == uKey && e.ctrlKey) {
            // App.editor.undo()
          }
          if (e.keyCode == cuKey && e.ctrlKey) {
            console.log('cut!')
          }
        }
      })

      $(document).on('keyup', function (e) {
        if ($editor.find('.tag.edit').length == 0) {
          if(e.keyCode == dKey) {
            App.editor.remove($editor.find('.tag.selected'))
          }
        }
      })

    }

    event.edit = function ($tag) {
      $tag.find('.btn[data-toggle="tooltip"]').tooltip()
      $tag.find('.btn-edit').on('click', function(e) {
        App.editor.edit($tag)
      })
      $tag.on('dblclick', function(e) {
        if($(e.target).is($editor.find('.btn'))) {
          e.preventDefault()
          return
        }
        App.editor.edit($tag)
      })
      $tag.on('click', function (e) {
        if($(e.target).closest('.tag').is($editor.find('.tag.selected'))) {
          e.preventDefault()
          return
        }
        App.editor.reset($editor)
        $tag.addClass('selected')

        App.event.scroll($tag)
      })
      App.event.done($tag)
      App.event.delete($tag)
      App.event.clone($tag)
      App.event.upLayer($tag)
      App.event.downLayer($tag)
    }

    event.scroll = function ($tag) {
      let top = parseInt($tag.css('top'))
      $tag[top < $(window).scrollTop() || top < 50 ? 'addClass' : 'removeClass']('tag-bottom')
    }

    event.done = function ($tag) {
      $tag.find('.btn-done').on('click', function(e) {
        App.editor.done($tag)
      })
    }

    event.delete = function ($tag) {
      $tag.find('.btn-delete').on('click', function(e) {
        App.editor.remove($(this).parent().parent().parent())
      })
    }

    event.clone = function ($tag) {
      $tag.find('.btn-clone').on('click', function () {
        App.editor.copy($editor.find('.tag.selected'))
        App.editor.paste()
        App.data.copy = null
        setTimeout(function () {
          $tag.removeClass('selected')
          $editor.find('.tag:last').addClass('selected')
        }, 50)
      })
    }

    event.upLayer = function ($tag) {
      $tag.find('.btn-up').on('click', function () {
        let $layer = $tag.find('.tag-zindex')
        $layer.css('z-index', parseInt($layer.css('z-index')) + 1)
        App.editor.update($tag)
      })
    }

    event.downLayer = function ($tag) {
      $tag.find('.btn-down').on('click', function () {
        let $layer = $tag.find('.tag-zindex')
        let zIndex = parseInt($layer.css('z-index'))
        if (zIndex > 1) {
          zIndex--
        }
        $layer.css('z-index', zIndex)
        App.editor.update($tag)
      })
    }

    event.draggable = function ($tag, tag, $counter)  {
      $tag.draggable({
        containment: "#editor",
        cursor: "move",
        scroll: true,
        drag: function() {
          let top = parseInt($tag.css('top'))
          let left = parseInt($tag.css('left'))
          $counter.html('<span>X</span>: ' + left + '<br><span>Y</span>: ' + top)
          $tag.addClass('tag-drag')
          App.event.scroll($tag)
        },
        stop: function() {
          $tag.removeClass('tag-drag')
          App.editor.update($tag, 'drag')
        }
      })
    }

    event.resizable = function ($tag, tag, $counter)  {
      let $tagEdit = $tag.find('.tag-edit')
      $tag.resizable({
        containment: "#editor",
        minHeight: App.config.tag[tag].minHeight,
        minWidth: App.config.tag[tag].minWidth,
        handles: App.config.tag[tag].handles,
        aspectRatio: App.config.tag[tag].aspectRatio || false,
        resize: function() {
          $counter.html('<span>W</span>:  ' + parseInt($tag.css('width')) + '<br><span>H</span>: ' + parseInt($tag.css('height')))
          $tag.addClass('tag-resize')
          if (App.config.tag[tag].handles == 'e, w') {
            $tag.height($tagEdit.height())
          }
        },
        stop: function() {
          $tag.removeClass('tag-resize')
          App.editor.update($tag, 'resize')
          if ($tag.width() + parseInt($tag.css('left')) > $editor.width()) {
            $tag.css('left', $editor.width() - $tag.width() - 12)
          }
        }
      })
    }

    return event

  })(jQuery)
}
