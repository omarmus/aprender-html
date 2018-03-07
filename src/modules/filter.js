// Filters
export default App => {
  App.filter = (function () {

    let exceptions = {
      integer      : [46, 8, 9, 27, 13, 110, 190, 173],
      natural      : [46, 8, 9, 27, 13, 110, 190],
      decimal      : [46, 8, 9, 27, 13, 110, 188, 190, 173],
      numeric      : [46, 8, 9, 27, 13],
      alpha        : [46, 8, 9, 27, 13],
      alpha_dash   : [46, 8, 9, 27, 13, 173]
    }
    exceptions.alpha_numeric = exceptions.alpha;

    let evaluate = {
      numeric : function (e) {
        return (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)
      },
      alpha : function (e) {
        return e.shiftKey || (e.keyCode < 65 || e.keyCode > 90)
      }
    }
    evaluate.integer = evaluate.numeric;
    evaluate.decimal = evaluate.numeric;
    evaluate.natural = evaluate.numeric;
    evaluate.alpha_numeric = function (e) {
      return evaluate.alpha(e) && evaluate.numeric(e)
    };
    evaluate.alpha_dash = evaluate.alpha_numeric;

    let filterBase = function (e, type) {
      if (exceptions[type].indexOf(e.keyCode) !== -1 || (e.keyCode == 86 && e.ctrlKey === true) || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
      }
      if (evaluate[type](e)) {
        e.preventDefault()
      }
    }

    let filter = {};

    filter.isNumber = function(o) {
      return typeof o === 'number' && isFinite(o)
    }

    filter.isFloat = function (value) {
      return value % 1 != 0;
    }

    filter.integer = function (e) {
      filterBase(e, 'integer')
    }

    filter.isInteger = function (value) {
      if (/[a-zA-Z]+/g.test(value) || !/^-?[0-9.]*$/g.test(value)) {
        return false;
      }
      value = App.number.convert(value)
      if (value === 'NaN' || !App.filter.isNumber(value)) {
        return false;
      }
      return !App.filter.isFloat(value)
    }

    filter.decimal = function (e) {
      filterBase(e, 'decimal')
    }

    filter.isDecimal = function (value) {
      if (/[a-zA-Z]+/g.test(value) || !/^-?[0-9.]+\,?[0-9]*$/g.test(value)) {
        return false;
      }
      value = App.number.convert(value)
      if (value === 'NaN') {
        return false;
      }
      return App.filter.isNumber(value)
    }

    filter.natural = function (e) {
      filterBase(e, 'natural')
    }

    filter.isNatural = function (value) {
      if (/[a-zA-Z]+/g.test(value) || !/^[0-9]*$/g.test(value)) {
        return false;
      }
      value = App.number.convert(value)
      if (value === 'NaN' || !App.filter.isNumber(value)) {
        return false;
      }
      return !App.filter.isFloat(value) && value >= 0;
    }

    filter.numeric = function (e) {
      filterBase(e, 'numeric')
    }

    filter.isNumeric = function (value) {
      return /^([0-9])*$/.test(value)
    }

    filter.alpha = function (e) {
      filterBase(e, 'alpha')
    }

    filter.isAlpha = function (value) {
      return /^[\u00F1A-Za-z]*$/.test(value)
    }

    filter.alphaNumeric = function (e) {
      filterBase(e, 'alpha_numeric')
    }

    filter.isAlphaNumeric = function (value) {
      return /^[\u00F1A-Za-z0-9]*$/.test(value)
    }

    filter.alphaDash = function (e) {
      filterBase(e, 'alpha_dash')
    }

    filter.isAlphaDash = function (value) {
      return /^[\u00F1A-Za-z-_0-9]*$/.test(value)
    }

    filter.removeTagHTML = function (text) {
      return text.replace(/<([^ >]+)[^>]*>.*?<\/\1>|<[^\/]+\/>/gi, "")
    }

    filter.empty = function (value) {
      return value == null || value.length == 0 || /^\s+$/.test(value)
    }

    filter.isEmail = function (value) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    }

    return filter;

  }())
}
