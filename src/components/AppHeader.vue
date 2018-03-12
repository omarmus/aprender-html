<template>
  <header class="header" id="header">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="" class="navbar-brand logo"><img src="../../static/images/logo2.png" alt="logo"></a>
          <a class="navbar-brand" href="#"><i class="fa fa-edit"></i> Aprendiendo HTML</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav hide">
            <li class="active"><a href="#">Editor<span class="sr-only">(current)</span></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button type="button" class="btn btn-success navbar-btn" id="btn-new"><i class="fa fa-file"></i> Nueva página</button>
              <!-- <button type="button" class="btn btn-default navbar-btn" id="btn-download"><i class="fa fa-download"></i> Descargar página</button> -->
              <button type="button" class="btn btn-default navbar-btn" id="btn-preview" ><i class="fa fa-eye"></i> Vista previa</button>
              <!-- <button type="button" class="btn btn-default navbar-btn" id="btn-demo" ><i class="fa fa-star"></i> Demo</button> -->
              <button type="button" class="btn btn-default navbar-btn" @click="learn" id="btn-learning" ><i class="fa fa-star"></i> Lecciones</button>
              <!-- <button type="button" class="btn btn-default navbar-btn" @click="save"><i class="fa fa-save"></i> Guardar</button> -->
            </li>
            <li class="dropdown hide">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> Mi usuario <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Opciones</a></li>
                <li><a href="#">Cerrar sesión</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>

<script>
import editor from '../modules/index';
import services from '../services/services';

export default {
  methods: {
    learn () {
      const App = editor.getApp();

      const $code = $('#input-code');
      $code.val('');
      setTimeout(() => {
        $code.focus();
      }, 500);

      App.modal.show('modal-learning')
    },
    save () {
      const App = editor.getApp();

      const page = App.data.getPage();
      services.savePage(page)
      .then(response => {
        App.data.setPage(response);
      });
    }
  }
}
</script>
