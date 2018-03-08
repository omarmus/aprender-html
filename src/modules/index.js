'use strict';

import template from './template';
import page from './page';
import config from './config';
import colorpicker from './colorpicker';
import storage from './storage';
import data from './data';
import event from './event';
import editor from './editor';
import setting from './setting';
import preview from './preview';
import modal from './modal';
import zip from './zip';
import filter from './filter';
import form from './form';
import load from './load';

let App = null;

export default {
  init (jQuery, store) {
    // Main Module
    App = (function (app, $) {

      app.nano = function (template, data) {
        return template.replace(/\{([\w\.]*)\}/g, (str, key) => {
          let keys = key.split("."), v = data[keys.shift()]
          for (let i = 0, l = keys.length;i < l;i++)
            v = v[keys[i]]
          return (typeof v !== "undefined" && v !== null) ? v : ""
        })
      }

      app.toType = function (el) {
        return ({}).toString.call(el).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      app.rgb2hex = function (rgb) {
        if (typeof rgb == 'undefined' || rgb == null || rgb == '') {
          return ''
        }
        if (rgb == 'transparent') {
          return 'transparent';
        }
        if (/^#[0-9A-F]{6}$/i.test(rgb)) {
          return rgb;
        }

        let rgba = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        if (rgba == null) {
          rgba = rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/)
        }
        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2)
        }
        return ("#" + hex(rgba[1]) + hex(rgba[2]) + hex(rgba[3])).toUpperCase()
      }

      console.log('Editor iniciado!');

      return app
    })(App || {}, jQuery, store)

    template(App, $, store);
    page(App, store);
    config(App, $, store);
    colorpicker(App, store);
    storage(App, $, store);
    data(App, $, store);
    event(App, $, store);
    editor(App, $, store);
    setting(App, $, store);
    preview(App, $, store);
    modal(App, $, store);
    zip(App, $, store);
    filter(App, store);
    form(App, $, store);
    load(App, $, store);
  },
  getApp () {
    return App;
  }
}
