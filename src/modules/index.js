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

export default {
  init (jQuery) {
    // Main Module
    var App = (function (app, $) {

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
        console.log(rgb)
        if (typeof rgb == 'undefined' || rgb == null) {
          return ''
        }
        if (rgb == 'transparent') {
          return 'transparent';
        }
        if (/^#[0-9A-F]{6}$/i.test(rgb)) {
          return rgb;
        }

        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2)
        }
        return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase()
      }

      console.log('Editor iniciado!');

      return app
    })(App || {}, jQuery)

    template(App, $);
    page(App);
    config(App, $);
    colorpicker(App);
    storage(App, $);
    data(App, $);
    event(App, $);
    editor(App, $);
    setting(App, $);
    preview(App, $);
    modal(App, $);
    zip(App, $);
    filter(App);
    form(App, $);
    load(App, $);

    console.dir('App', App);
  }
}
