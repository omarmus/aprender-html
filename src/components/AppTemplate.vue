<template>
  <div>
    <!-- templates -->
    <script type="text/js-tmpl" id="tmpl-div">
      <div class="tag tag-div" id="tag-div-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px; height: {height}px;" data-tag="div">
        <div class="tag-edit tag-zindex" style="z-index: {zIndex};"><div style="border: {borderWidth}px solid {borderColor}; background-color: {bgColor};"></div></div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;div&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-circle">
      <div class="tag tag-circle" id="tag-circle-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px; height: {height}px;" data-tag="div">
        <div class="tag-edit tag-zindex" style="z-index: {zIndex};"><div style="border: {borderWidth}px solid {borderColor}; background-color: {bgColor};"></div></div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;div&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-hr">
      <div class="tag tag-hr" id="tag-hr-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="hr">
        <div class="tag-edit tag-zindex" style="z-index: {zIndex};"><hr style="border-top: {borderWidth}px solid {borderColor};" /></div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;hr&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h1">
      <div class="tag" id="tag-h1-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h1">
        <div class="tag-edit-container">
          <h1 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 1</div></h1>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h1&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h2">
      <div class="tag" id="tag-h2-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h2">
        <div class="tag-edit-container">
          <h2 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 2</div></h2>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h2&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h3">
      <div class="tag" id="tag-h3-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h3">
        <div class="tag-edit-container">
          <h3 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 3</div></h3>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h3&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h4">
      <div class="tag" id="tag-h4-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h4">
        <div class="tag-edit-container">
          <h4 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 4</div></h4>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h4&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h5">
      <div class="tag" id="tag-h5-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h5">
        <div class="tag-edit-container">
          <h5 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 5</div></h5>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h5&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-h6">
      <div class="tag" id="tag-h6-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="h6">
        <div class="tag-edit-container">
          <h6 class="text-center"><div class="tag-edit tag-zindex" style="z-index: {zIndex}">Título 6</div></h6>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;h6&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-p">
      <div class="tag" id="tag-p-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="p">
        <div class="tag-edit-container">
          <p><span class="tag-edit tag-zindex" style="z-index: {zIndex}">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;p&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-img">
      <div class="tag tag-img" id="tag-img-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="img">
        <div class="tag-edit-container">
          <div class="tag-edit-img tag-zindex" style="z-index: {zIndex}"><img src="{img}" data-img="{img}"></div>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;img&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-ul">
      <div class="tag ul" id="tag-ul-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="ul">
        <div class="tag-edit-container">
          <ul class="tag-edit tag-zindex" style="z-index: {zIndex}">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;ul&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-ol">
      <div class="tag ol" id="tag-ol-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="ol">
        <div class="tag-edit-container">
          <ol class="tag-edit tag-zindex" style="z-index: {zIndex}">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ol>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;ol&gt;</div>
        {options}
      </div>
    </script>
    <script type="text/js-tmpl" id="tmpl-table">
      <div class="tag tag-table" id="tag-table-{id}" data-id="{id}" style="width: {width}px; left: {left}px; top: {top}px;" data-tag="table">
        <div class="tag-edit-container">
          <div class="tag-edit tag-zindex" style="z-index: {zIndex}">{table}</div>
        </div>
        <div class="tag-counter"></div>
        <div class="tag-inf">&lt;table&gt;</div>
        {options}
      </div>
    </script>

    <script type="text/js-tmpl" id="tmpl-page">
      <div class="page-container preview">
        <div class="editor-container">
          <div class="editor-content" style="height: {height}px">{tags}</div>
        </div>
      </div>
    </script>

    <script type="text/js-tmpl" id="tmpl-tag">
      <div class="tag {class}" style="width: {width}px; left: {left}px; top: {top}px; height: {height}px">
        <div class="tag-zindex" style="z-index: {zIndex}; border: {borderWidth}px solid {borderColor}; background-color: {bgColor};">{text}</div>
      </div>
    </script>

    <script type="text/js-tmpl" id="tmpl-options">
      <div class="tag-options {image}">
        <div class="tag-btn-edit">
          <button class="btn btn-success btn-edit btn-sm" type="button"><i class="fa fa-edit"></i> {label}</button>
          <button class="btn btn-danger btn-delete btn-sm" type="button" data-toggle="tooltip" data-placement="bottom" title="Eliminar"><i class="fa fa-trash"></i></button>
          <button class="btn btn-default btn-clone btn-sm" type="button" data-toggle="tooltip" data-placement="bottom" title="Duplicar"><i class="fa fa-clone"></i></button>
          <button class="btn btn-default btn-up btn-sm" type="button" data-toggle="tooltip" data-placement="bottom" title="Subir capa"><i class="fa fa-arrow-circle-up"></i></button>
          <button class="btn btn-default btn-down btn-sm" type="button" data-toggle="tooltip" data-placement="bottom" title="Bajar capa"><i class="fa fa-arrow-circle-down"></i></button>
        </div>
      </div>
    </script>

    <script type="text/js-tmpl" id="tmpl-btn-picker">
      <button style="background-color:{color}" class="note-color-btn" type="button" data-toggle="tooltip" data-placement="bottom" data-color="{color}" title="{color}"></button>
    </script>

    <script type="text/js-tmpl" id="tmpl-html">
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>{title}</title>
        <link rel="stylesheet" href="css/preview.min.css">
      </head>
      <body style="background-color: {bgColor}; background-image: url({bgImage}); background-attachment: {bgAttachment}">
        <div class="page-container preview">
          <div class="editor-container">
            <div class="editor-content" style="height: {height}px;">{tags}</div>
          </div>
        </div>
      </body>
      </html>
    </script>

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-main">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="fa fa-file-image-o"></i> Background</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <div class="setting-bg-color">
                  <h5><strong>Color de Fondo</strong></h5>
                  <div id="bg-color"></div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="setting-bg-image" id="bg-image">
                  <h5><strong>Imagen de Fondo</strong></h5>
                  <div>
                    <a href="" class="btn-bg-image thumbnail" data-img="">Sin imagen</a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg01.jpg"><img src="../../static/images/bg01.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg02.jpg"><img src="../../static/images/bg02.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg03.jpg"><img src="../../static/images/bg03.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg04.jpg"><img src="../../static/images/bg04.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg05.jpg"><img src="../../static/images/bg05.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg06.jpg"><img src="../../static/images/bg06.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg07.jpg"><img src="../../static/images/bg07.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg08.jpg"><img src="../../static/images/bg08.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg09.jpg"><img src="../../static/images/bg09.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg10.jpg"><img src="../../static/images/bg10.jpg" alt=""></a>
                    <a href="" class="btn-bg-image thumbnail" data-img="bg11.jpg"><img src="../../static/images/bg11.jpg" alt=""></a>
                  </div>
                </div>
                <label class="checkbox-inline hide">
                  <input type="checkbox" id="bg-attachment"> Fondo fijo
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-check"></i> Terminar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-img">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="fa fa-image"></i> Seleccionar imagen</h4>
          </div>
          <div class="modal-body">
            <div class="alert alert-info"><i class="fa fa-info-circle"></i> <small>Seleccione una imagen para insertar</small></div>
            <div class="setting-images" id="images">
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="logo.png"><img src="../../static/images/logo.png" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="logo2.png" style="background-color: white;"><img src="../../static/images/logo2.png" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="presidencia.png"><img src="../../static/images/presidencia.png" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="flisol.jpg"><img src="../../static/images/flisol.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="isotipo.png"><img src="../../static/images/isotipo.png" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img01.jpg"><img src="../../static/images/img01.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img02.jpg"><img src="../../static/images/img02.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img03.jpg"><img src="../../static/images/img03.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img04.jpg"><img src="../../static/images/img04.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img05.jpg"><img src="../../static/images/img05.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img06.jpg"><img src="../../static/images/img06.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img07.jpg"><img src="../../static/images/img07.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img08.png"><img src="../../static/images/img08.png" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img09.gif"><img src="../../static/images/img09.gif" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img10.jpg"><img src="../../static/images/img10.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img11.jpg"><img src="../../static/images/img11.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img12.jpg"><img src="../../static/images/img12.jpg" alt=""></a>
              <a href="" class="btn-bg-image thumbnail" data-tag="img" data-img="img13.jpg"><img src="../../static/images/img13.jpg" alt=""></a>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-check"></i> Terminar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-table">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="fa fa-table"></i> Insertar Tabla</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-7">
                <h5><strong>Dimensión de la tabla</strong></h5>
                <div class="alert alert-info"><i class="fa fa-info-circle"></i> Defina de cuantas filas y columnas desea insertar la tabla</div>
                <div class="form-horizontal">
                  <div class="form-group">
                    <label for="table-rows" class="col-sm-5 control-label">Filas</label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control integer" id="table-rows" value="3" maxlength="1" max="20" min="1">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="table-cols" class="col-sm-5 control-label">Columnas</label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control integer" id="table-cols" value="3" maxlength="1" max="20" min="1">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <h5><strong>Color de fondo de la tabla</strong></h5>
                <div id="table-colorpicker"></div>
                <label class="checkbox-inline">
                  <input type="checkbox" id="table-transparent"> Fondo transparente
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" id="btn-insert-table"><i class="fa fa-check"></i> Insertar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-div">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="fa fa-square-o"></i> Insertar contenedor DIV</h4>
          </div>
          <div class="modal-body">
            <div class="alert alert-info"><i class="fa fa-info-circle"></i> Un contenedor(div) agrupa un grupo de elementos html</div>
            <div class="row">
              <div class="col-md-4">
                <div class="setting-bg-color">
                  <h5><strong>Color de Fondo</strong></h5>
                  <div id="div-bg-colorpicker"></div>
                  <label class="checkbox-inline">
                    <input type="checkbox" id="div-bg-transparent"> Fondo transparente
                  </label>
                </div>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-6">
                    <h5><strong>Color del borde</strong></h5>
                    <div id="div-border-colorpicker"></div>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="div-border-transparent"> Borde transparente
                    </label>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="div-border" class="control-label">Ancho del borde</label>
                      <div class="input-group">
                        <input type="text" class="form-control integer" id="div-border" value="3" maxlength="2" min="0" max="10">
                        <div class="input-group-addon">px</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" id="btn-insert-div"><i class="fa fa-check"></i> Insertar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-preview">
      <div class="modal-dialog modal-preview">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="fa fa-eye"></i> Vista previa</h4>
          </div>
          <div class="modal-body">
            <iframe src="preview.html" name="preview" id="preview" class="preview-iframe"></iframe>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-check"></i> Terminar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-hr">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><i class="icon-line pull-left"></i> Insertar línea HR</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <h5><strong>Color de la línea</strong></h5>
                <div id="hr-border-colorpicker"></div>
                <label class="checkbox-inline hide">
                  <input type="checkbox" id="hr-border-transparent"> Línea transparente
                </label>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="hr-border" class="control-label">Ancho de la línea</label>
                  <div class="input-group">
                    <input type="text" class="form-control integer" id="hr-border" value="1" maxlength="2" min="0" max="10">
                    <div class="input-group-addon">px</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" id="btn-insert-hr"><i class="fa fa-check"></i> Insertar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>
