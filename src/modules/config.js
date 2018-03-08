// Submodule Config
export default (App, jQuery) => {
  App.config = (function ($) {

    let config = {}

    let toolbar = {
      basic : [
      ['mybutton', ['done']],
      ['fontsize', ['fontsize']],
      ['style', ['bold', 'italic', 'underline']],
      ['color', ['color']],
      // ['height', ['height']],
      ['para', ['paragraph']],
      ['insert', ['link']],
      ]
    }

    let handle = {
      basic : "e, w",
      complete : "n, e, s, w, ne, se, sw, nw"
    }

    config.toolbar = toolbar
    config.handle = handle

    config.tag = {
      h1 : {
        width : 500,
        minHeight: 40,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      h2 : {
        width : 500,
        minHeight: 38,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      h3 : {
        width : 500,
        minHeight: 36,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      h4 : {
        width : 500,
        minHeight: 34,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      h5 : {
        width : 500,
        minHeight: 32,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      h6 : {
        width : 500,
        minHeight: 30,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      p : {
        width : 800,
        minHeight: 60,
        minWidth: 300,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      img : {
        width : 400,
        minHeight: 60,
        minWidth: 100,
        handles: handle["complete"],
        toolbar: toolbar["basic"],
        aspectRatio: true
      },
      ol : {
        width : 300,
        minHeight: 60,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"],
        focus: false
      },
      ul : {
        width : 300,
        minHeight: 60,
        minWidth: 200,
        handles: handle["basic"],
        toolbar: toolbar["basic"],
        focus: false
      },
      table : {
        width : 600,
        minHeight: 60,
        minWidth: 300,
        handles: handle["basic"],
        toolbar: toolbar["basic"]
      },
      div : {
        width : 300,
        minHeight: 10,
        minWidth: 10,
        handles: handle["complete"],
        height: 300
      },
      circle : {
        width : 300,
        minHeight: 10,
        minWidth: 10,
        handles: handle["complete"],
        height: 200
      },
      hr : {
        width : 600,
        minHeight: 1,
        minWidth: 10,
        handles: handle["basic"]
      }
    }

    config.page = {
      title : '',
      settings : {
        bgColor: null,
        bgImage : null,
        bgAttachment : null,
        fontFamily: ''
      }
    }

    return config

  })(jQuery)
}
