// Submodule preview
export default (App, jQuery, store) => {
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
        tagsHtml += App.template.tag(tag)
      }
      settings.tags = tagsHtml
      settings.height = parseInt(App.editor.get(tagTop, tagId).css('height')) + maxTop + 20

      return settings
    }

    function getTemplate (data) {
      let tmpl = `
        <link rel="stylesheet" href="static/css/preview.css" />
        <div class="main" style="background-color: ${data.bgColor}; background-image: url(${data.bgImage}); background-attachment: ${data.bgAttachment}">
          <div class="page-container preview">
            <div class="editor-container">
              <div class="editor-content" style="height: ${data.height}px;">${data.tags}</div>
            </div>
          </div>
        </div>
      `;
      return tmpl;
    }

    function createIframe (html, data) {
      var iframe = document.getElementById('iframe-preview');

      iframe.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
        'script.innerHTML = "(function() {' +
        'document.open();document.domain=\'' + document.domain +
        '\';document.close();})();";' +
        `document.write("<head>" + script.outerHTML + '</head><body></body>');})())`;

      iframe.contentWindow.document.write(html);
      let body = iframe.contentWindow.document.body;
      body.style.backgroundImage = `url(${data.bgImage})`;
      body.style.backgroundColor = data.bgColor;
      body.style.backgroundAttachment = 'fixed';
    }

    function init () {
      $('#btn-preview').on('click', function () {
        let page = App.preview.page();
        let html = getTemplate(page);
        console.log('html', html);
        createIframe(html, page);
        $('#show-code').html(html.replace(/</gi, '&lt;').replace(/>/gi, '&gt;'));
        App.modal.show('modal-preview')
      })
    }

    init()

    return preview

  })(jQuery)
}
