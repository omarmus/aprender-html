// Submodule preview
export default (App, jQuery) => {
  App.preview = (function ($) {

    let $page = $('#page')
    let preview = {}
    const classes = {
      table : 'tag-table',
      img : 'tag-img',
      ul : 'ul',
      ol : 'ol',
      div : 'tag-div'
    }

    preview.page = function () {
      let tagsHtml = '';
      let page = App.data.getPage()
      let tags = page.tags
      let settings = page.settings
      let maxTop = 0
      let tagTop = null
      let tagId = null

      if ($.isEmptyObject(tags)) {
        alert('Todavía no ha creado ningún elemento.')
        throw new Error('No tiene elementos para dibujar')
      }

      for (let i in tags) {
        let tag = tags[i]
        tag.class = classes[tag.tag]
        if (tag.tag == 'img') {
          tag.text = '<img src="' + tag.img + '">'
        } else {
          if (tag.tag != 'table' && tag.tag != 'div' && tag.tag != 'hr') {
            tag.text = '<' + tag.tag + ' ' + (tag.tag[0] == 'h' ? 'class="text-center"' : '')+ '>' + tag.text + '</' + tag.tag + '>\n'
          }
        }
        if (tag.top > maxTop) {
          maxTop = tag.top
          tagTop = tag.tag
          tagId = tag.id
        }
        tagsHtml += App.nano(App.template.tag, tag)
      }
      settings.tags = tagsHtml
      settings.height = parseInt(App.editor.get(tagTop, tagId).css('height')) + maxTop + 20

      return settings
    }

    function init() {

      $('#btn-preview').on('click', function () {
        let page = App.preview.page()
        let frame = frames.preview.document.getElementById('container').innerHTML = App.nano(App.template.page, page)
        $(frames.preview.document.body).css({
          backgroundColor: page.bgColor,
          backgroundImage: 'url(' + page.bgImage + ')',
          backgroundAttachment: 'fixed'
        });
        App.modal.show('modal-preview')
      })
    }

    init()

    return preview

  })(jQuery)
}