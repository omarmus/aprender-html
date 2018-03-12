// Object Page
export default App => {
  App.page = function () {

    let demo = {
      id: null,
      title : 'Demo Page',
      code: '<h1></h1>',
      settings : {
        bgColor: '#333333',
        bgImage : null,
        bgAttachment : null,
        fontFamily: ''
      },
      tags : null
    }

    let empty = {
      id: null,
      title : 'Empty Page',
      code: '',
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
