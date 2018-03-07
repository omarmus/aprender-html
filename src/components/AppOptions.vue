<template>
  <div class="tag-container" id="tags">
    <div class="tag-body">
      <ul class="tag-list">
        <li>
          <a class="tag-menu" href="#"><i class="fa fa-code"></i><br>HTML</a>
          <ul class="tag-menu-list">
            <li class="tag-item">
              <span class="tag-element">
                <i class="fa fa-heading"></i>
                <div class="tag-name">&lt;h1&gt;</div>
                <div class="tag-description">Título</div>
              </span>
              <ul class="tag-sub-list">
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h1">
                    <div class="tag-name">&lt;h1&gt;</div>
                    <div class="tag-description">Título 1</div>
                  </a>
                </li>
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h2">
                    <div class="tag-name">&lt;h2&gt;</div>
                    <div class="tag-description">Título 2</div>
                  </a>
                </li>
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h3">
                    <div class="tag-name">&lt;h3&gt;</div>
                    <div class="tag-description">Título 3</div>
                  </a>
                </li>
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h4">
                    <div class="tag-name">&lt;h4&gt;</div>
                    <div class="tag-description">Título 4</div>
                  </a>
                </li>
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h5">
                    <div class="tag-name">&lt;h5&gt;</div>
                    <div class="tag-description">Título 5</div>
                  </a>
                </li>
                <li class="tag-item">
                  <a href="#" class="tag-element" data-tag="h6">
                    <div class="tag-name">&lt;h6&gt;</div>
                    <div class="tag-description">Título 6</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-element" data-tag="p" data-toggle="tooltip" data-placement="right" title="&lt;p&gt;">
                <i class="fa fa-bars"></i>
                <div class="tag-description">Párrafo</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-setting" data-option="img" data-toggle="tooltip" data-placement="right" title="&lt;img&gt;">
                <i class="fa fa-image"></i>
                <div class="tag-description">Imagen</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-element tag-element-list" data-tag="ul" data-toggle="tooltip" data-placement="right" title="&lt;ul&gt;">
                <i class="fa fa-list-ul"></i>
                <div class="tag-description">Lista no ordenada</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-element tag-element-list" data-tag="ol" data-toggle="tooltip" data-placement="right" title="&lt;ol&gt;">
                <i class="fa fa-list-ol"></i>
                <div class="tag-description">Lista ordenada</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-setting" data-option="table" data-toggle="tooltip" data-placement="right" title="&lt;table&gt;">
                <i class="fa fa-table"></i>
                <div class="tag-description">Tabla</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-setting" data-option="div" data-toggle="tooltip" data-placement="right" title="&lt;div&gt;">
                <i class="icon-square"></i>
                <div class="tag-description">Contenedor</div>
              </a>
            </li>
            <li class="tag-item">
              <a href="#" class="tag-setting" data-option="hr" data-toggle="tooltip" data-placement="right" title="&lt;hr&gt;">
                <i class="icon-line"></i>
                <div class="tag-description">Línea</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="tag-menu" href="#"><i class="fa fa-cog"></i><br>Settings</a>
          <ul class="tag-menu-list">
            <li class="tag-item">
              <a href="#" class="tag-setting" data-option="background">
                <i class="fa fa-file-image-o"></i>
                <div class="tag-description">Background</div>
              </a>
            </li>
            <li class="tag-item hide">
              <a href="#" class="tag-setting" data-option="font">
                <i class="fa fa-font"></i>
                <div class="tag-description">Fuente</div>
              </a>
            </li>
            <li class="tag-item hide">
              <a href="#" class="tag-setting tag-element-list" data-option="page">
                <i class="fa fa-file-text"></i>
                <div class="tag-description">Información de la página</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
