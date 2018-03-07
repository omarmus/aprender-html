// Object Page
export default App => {
  App.page = function () {

    let demo = {
      title : 'Demo Page',
      settings : {
        bgColor: '#333333',
        bgImage : null,
        bgAttachment : null,
        fontFamily: ''
      },
      tags : null
    }

    let empty = {
      title : 'Empty Page',
      settings : {
        bgColor: null,
        bgImage : null,
        bgAttachment : null,
        fontFamily: ''
      },
      tags : null
    }

    return {
      empty : empty,
      demo : demo
    }
  }
}
