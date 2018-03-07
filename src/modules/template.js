// Submodule Template
export default (App, jQuery) => {
  App.template = (function ($) {

    let template = {}

    template.h1 = $('#tmpl-h1').html()
    template.h2 = $('#tmpl-h2').html()
    template.h3 = $('#tmpl-h3').html()
    template.h4 = $('#tmpl-h4').html()
    template.h5 = $('#tmpl-h5').html()
    template.h6 = $('#tmpl-h6').html()
    template.p = $('#tmpl-p').html()
    template.img = $('#tmpl-img').html()
    template.ul = $('#tmpl-ul').html()
    template.ol = $('#tmpl-ol').html()
    template.table = $('#tmpl-table').html()
    template.options = $('#tmpl-options').html()
    template.tag = $('#tmpl-tag').html()
    template.page = $('#tmpl-page').html()
    template.html = $('#tmpl-html').html()
    template.div = $('#tmpl-div').html()
    template.hr = $('#tmpl-hr').html()

    template.getOptions = function (tag) {
      return App.nano(App.template.options, {
        label : tag == 'img' ? 'Cambiar imagen' : 'Editar',
        image : tag == 'img' ? 'image' : ''
      })
    }

    console.log('template iniciado');

    return template

  })(jQuery)
}