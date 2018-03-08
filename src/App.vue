<template>
  <div id="app">
    <app-header></app-header>
    <app-options></app-options>
    <div class="tag-header alert-warning">
      <i class="fa fa-info-circle"></i>
      <strong>Agregue</strong> una nueva <strong>etiqueta HTML</strong> o <strong>configure</strong> su página haciendo <strong>click</strong> sobre las opciones del menú izquierdo
    </div>
    <div class="editor">
      <div id="page" class="page-container">
        <div class="editor-container">
          <div id="editor" class="editor-content"></div>
        </div>
      </div>
    </div>
    <app-template></app-template>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppOptions from './components/AppOptions';
import AppTemplate from './components/AppTemplate';

import Editor from './modules/index';
import $ from './lib/jquery/jquery-2.2.3.min.js';
import store from './store';

export default {
  name: 'app',
  mounted () {
    // Iniciando editor
    Editor.init($, store);
  },
  data () {
    return {
    }
  },
  components: {
    AppHeader,
    AppOptions,
    AppTemplate
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
