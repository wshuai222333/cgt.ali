<template>
  <div class="page">
    <div class="page-header">
        <h1 class="page-title">状态</h1>
    </div>

    <div class="page-content">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">表单元素</h3>
            </div>
            <div class="panel-body container-fluid">
                <div class="row row-lg">
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">圆形</h4>
                            <input type="text" class="form-control round" id="inputRounded">
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">禁用</h4>
                            <input type="text" class="form-control" id="inputDisabled" placeholder="被禁用的文本框" disabled="">
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control focus" id="inputFocus" value="当前文本框获得了焦点">
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">占位符</h4>
                            <input type="text" class="form-control" id="inputPlaceholder" placeholder="我是placeholder">
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">文本</h4>
                            <p class="form-control-static">email@example.com</p>
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">文件上传</h4>
                            <div class="form-group">
                                <div class="input-group input-group-file">
                                    <input type="text" class="form-control" readonly="">
                                    <span class="input-group-btn">
                                        <span class="btn btn-success btn-file">
                                            <i class="icon wb-upload" aria-hidden="true"></i>
                                            <input type="file" name="" multiple="">
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-file">
                                    <input type="text" class="form-control" readonly="">
                                    <span class="input-group-btn">
                                        <span class="btn btn-outline btn-file">
                                            <i class="icon wb-upload" aria-hidden="true"></i>
                                            <input type="file" name="" multiple="">
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">辅助文本</h4>
                            <input type="text" class="form-control" id="inputHelpText">
                            <span class="help-block">这里可以显示说明、帮助、描述等信息</span>
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">搜索框</h4>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" name="" placeholder="请输入关键词...">
                                    <span class="input-group-btn">
                      <button type="submit" class="btn btn-primary"><i class="icon wb-search" aria-hidden="true"></i></button>
                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-search">
                                    <button type="submit" class="input-search-btn">
                                        <i class="icon wb-search" aria-hidden="true"></i></button>
                                    <input type="text" class="form-control" name="" placeholder="请输入关键词...">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-search input-search-dark">
                                    <i class="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input type="text" class="form-control" name="" placeholder="请输入关键词...">
                                    <button type="button" class="input-search-close icon wb-close" aria-label="清空"></button>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-search">
                                    <i class="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input type="text" class="form-control" name="" placeholder="请输入关键词...">
                                    <button type="button" class="input-search-close icon wb-close" aria-label="清空"></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clearfix visible-sm-block"></div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">大小</h4>
                            <div class="form-group">
                                <input type="text" class="form-control input-sm" placeholder="小尺寸">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="普通">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="大尺寸">
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6">

                        <div class="example-wrap margin-sm-0">
                            <h4 class="example-title">下拉列表</h4>
                            <div class="form-group">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control" multiple="">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="clearfix visible-sm-block"></div>
                    <div class="col-sm-6">

                        <div class="example-wrap">
                            <h4 class="example-title">文本域</h4>
                            <textarea class="form-control" id="textareaDefault" rows="3"></textarea>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">输入组</h3>
            </div>
            <div class="panel-body container-fluid">
                <div class="row row-lg">
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">复选、单选</h4>
                            <p>复选，单选框也可以换成其他元素</p>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <span class="checkbox-custom checkbox-default">
                                            <input type="checkbox" id="inputCheckbox" name="inputCheckbox" checked="">
                                            <label for="inputCheckbox"></label>
                                        </span>
                                    </span>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <span class="radio-custom radio-default">
                                            <input type="radio" id="inputRadio" name="inputRadio" checked="">
                                            <label for="inputRadio"></label>
                                        </span>
                                    </span>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">文本</h4>
                            <p>可以在文本框任意一侧放置</p>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="email">
                                    <span class="input-group-addon">@example.com</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">¥</span>
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">¥</span>
                                    <input type="text" class="form-control" placeholder="">
                                    <span class="input-group-addon">.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clearfix visible-sm-block"></div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">图标</h4>
                            <p>可以使用字体图标</p>
                            <div class="form-group">
                                <div class="input-group input-group-icon">
                                    <span class="input-group-addon">
                                        <span class="icon wb-user" aria-hidden="true"></span>
                                    </span>
                                    <input type="text" class="form-control" placeholder="用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-icon">
                                    <span class="input-group-addon">
                                        <span class="icon wb-envelope" aria-hidden="true"></span>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-icon">
                                    <input type="email" class="form-control" placeholder="Email">
                                    <span class="input-group-addon">
                                        <span class="icon wb-envelope" aria-hidden="true"></span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clearfix visible-md-block"></div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap margin-md-0">
                            <h4 class="example-title">按钮</h4>
                            <p>需要使用 <code>.input-group-btn</code> 包裹在按钮外面 </p>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-outline">搜索</button>
                                    </span>
                                    <input type="text" class="form-control" placeholder="关键词...">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="关键词...">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-outline">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clearfix visible-sm-block"></div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap margin-sm-0">
                            <h4 class="example-title">下拉菜单</h4>
                            <p>使用下拉菜单</p>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-outline dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            操作 <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="exampleColorDropdown1" role="menu">
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项1</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项2</a>
                                            </li>
                                            <li class="active" role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项3</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项4</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-outline" tabindex="-1">操作
                                        </button>
                                        <button type="button" class="btn btn-default btn-outline dropdown-toggle" data-toggle="dropdown" aria-expanded="false" tabindex="-1">
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="exampleColorDropdown1" role="menu">
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项1</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项2</a>
                                            </li>
                                            <li class="active" role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项3</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="javascript:;" role="menuitem">下拉菜单项4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="example-wrap">
                            <h4 class="example-title">大小</h4>
                            <p>在 <code>.input-group</code> 添加控制大小的类 </p>
                            <div class="form-group">
                                <div class="input-group input-group-lg">
                                    <span class="input-group-addon">@</span>
                                    <input type="text" class="form-control input-lg" placeholder="用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">@</span>
                                    <input type="text" class="form-control" placeholder="用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-sm">
                                    <span class="input-group-addon">@</span>
                                    <input type="text" class="form-control" placeholder="用户名">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">单选、复选框
                    <small>
                        <a class="example-plugin-link" href="http://flatlogic.github.io/awesome-bootstrap-checkbox/demo/" target="_blank">
                            官网
                        </a>
                    </small>
                </h3>
            </div>
            <div class="panel-body container-fluid">
                <div class="row row-lg">
                    <div class="col-sm-6 col-lg-4">

                        <div class="example-wrap">
                            <h4 class="example-title">复选框</h4>
                            <p>添加 <code>.checkbox-custom</code></p>
                            <div class="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputUnchecked">
                                <label for="inputUnchecked">未选中</label>
                            </div>
                            <div class="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputChecked" checked="">
                                <label for="inputChecked">选中</label>
                            </div>
                            <div class="checkbox-custom">
                                <input type="checkbox" disabled="">
                                <label>未选中（禁用）</label>
                            </div>
                            <div class="checkbox-custom">
                                <input type="checkbox" disabled="" checked="">
                                <label>选中（禁用）</label>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-lg-4">

                        <div class="example-wrap">
                            <h4 class="example-title">单选</h4>
                            <p>添加 <code>.radio-custom</code></p>
                            <div class="radio-custom radio-primary">
                                <input type="radio" id="inputRadiosUnchecked" name="inputRadios">
                                <label for="inputRadiosUnchecked">未选中</label>
                            </div>
                            <div class="radio-custom radio-primary">
                                <input type="radio" id="inputRadiosChecked" name="inputRadios" checked="">
                                <label for="inputRadiosChecked">选中</label>
                            </div>
                            <div class="radio-custom radio-primary">
                                <input type="radio" id="inputRadiosDisabled" name="inputRadiosDisabled" disabled="">
                                <label for="inputRadiosDisabled">未选中（禁用）</label>
                            </div>
                            <div class="radio-custom radio-primary">
                                <input type="radio" id="inputRadiosDisabledChecked" name="inputRadiosDisabledChecked" disabled="" checked="">
                                <label for="inputRadiosDisabledChecked">选中（禁用）</label>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-lg-4">

                        <div class="example-wrap">
                            <h4 class="example-title">颜色</h4>
                            <p>添加 <code>.checkbox-default</code>, <code>.checkbox-primary</code>, <code>.checkbox-success</code>,
                                <code>.checkbox-info</code>, <code>.checkbox-warning</code>,
                                <code>.checkbox-danger</code> 可改变其颜色</p>
                            <ul class="list-unstyled list-inline">
                                <li>
                                    <div class="checkbox-custom">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-default">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-success">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-info">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-warning">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-danger">
                                        <input type="checkbox" name="inputCheckboxes" checked="">
                                        <label></label>
                                    </div>
                                </li>
                            </ul>
                            <ul class="list-unstyled list-inline">
                                <li>
                                    <div class="radio-custom">
                                        <input type="radio" id="inputRadioNormal" name="inputRadiosNormal" checked="">
                                        <label for="inputRadioNormal"></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-default">
                                        <input type="radio" name="inputRadioDefault" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-primary">
                                        <input type="radio" name="inputRadioPrimary" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-success">
                                        <input type="radio" name="inputRadioSuccess" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-info">
                                        <input type="radio" name="inputRadioInfo" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-warning">
                                        <input type="radio" name="inputRadioWarning" checked="">
                                        <label></label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio-custom radio-danger">
                                        <input type="radio" name="inputRadioDanger" checked="">
                                        <label></label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"uiFormComponent"
}
</script>

