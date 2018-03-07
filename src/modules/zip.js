// Submodule zip
export default (App, jQuery) => {
  App.zip = (function ($) {

    function init() {
      $('#btn-download').on('click', function () {
        let page = App.preview.page()
        page.bgAttachment = 'fixed'

        App.zip.exec(App.nano(App.template.html, page), App.data.getImages())
      })
    }
    init()

    let Promise = window.Promise;
    if (!Promise) {
      Promise = JSZip.external.Promise;
    }

    if(!JSZip.support.blob) {
      showError("Library works only with a recent browser !")
      return;
    }

    function urlToPromise(url) {
      return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
          if(err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
    }

    function generate(html, images) {
      let zip = new JSZip()

      let img = zip.folder("images")
      let css = zip.folder("css")

      zip.file('index.html', html)
      css.file('preview.min.css', urlToPromise('css/preview.min.css'), {binary:true})

      for (let i in images) {
        let url = images[i]
        if (url) {
          let filename = url.replace(/.*\//g, "")
          img.file(filename, urlToPromise(url), {base64: true})
        }
      }

      zip.generateAsync({type:"blob"}, function updateCallback(metadata) {
        // let msg = "progression : " + metadata.percent.toFixed(2) + " %";
        // if(metadata.currentFile) {
          //     msg += ", current file = " + metadata.currentFile;
          // }
          // console.log(msg)
      }).then(function callback(blob) {

        // see FileSaver.js
        saveAs(blob, "my-page-html.zip")

        // console.log('Done zip!')
      }, function (e) {
        console.log(e)
      })
    }

    return {
      exec : generate,
      readFile : urlToPromise
    }

  })(jQuery)
}
