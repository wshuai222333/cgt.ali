<template>
    <div class="page page-display">
        <div class="page-header">
            <h1 class="page-title">订单导入</h1>
        </div>

        <div class="page-content">
            <div class="panel">
                <div class="panel-body container-fluid">
                    <div class="row row-lg">
                        <div class="col-sm-12 col-md-12">
                            <div class="example-wrap">
                                <h4 class="example-title">模板下载</h4>
                                <button type="button" class="btn btn-info">差旅机票模板下载</button>
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-12 col-md-12">
                            <div class="example-wrap">
                                <h4 class="example-title">数据上传</h4>
                                <ad-upload :params="uploadParams.params" :url="uploadParams.url" :isMultiple="true" :uploadCallback="uploadResponse" :beforeCallback="uploadBefore"></ad-upload>
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-12 col-md-12">
                            <div class="col-sm-5">
                                <p class="lead">差旅导入报表格式说明</p>
                                <p>1、一个excel表只容许一个sheet页，命名是workbook,不能修改</p>
                                <p>2、票面价、订单金额是数值格式</p>
                                <p>3、起飞日期格式： 年/月/日（YYYY/MM/DD）</p>
                                <p>4、出发机场三字码：最多三位 PEK</p>
                                <p>5、到达机场三字码：最多三位 SHA</p>
                                <p>6、航班号：最多6位 CA1234</p>
                                <p>7、乘客姓名，票号：按照真实填写</p>
                                <p>8、出票日期格式： 年/月/日（YYYY/MM/DD）</p>
                                <p>9、PNR:最多6位 QWERTY</p>
                                <p>10、保理企业：用户手工选择</p>
                                <p class="lead"></p>
                            </div>
                            <div class="col-sm-5">
                                <p class="lead"><strong style="color:#F00">注:</strong></p>
                                <p>•23:00-24:00为数据处理时间阶段，无法导单</p>
                                <p>•对于联程票只需要输入第一个城市和最后一个城市</p>
                                <p>•不支持IE内核浏览器</p>                            
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from "@/_common/index";
export default {
  name: "ImportOrderComponent",
  data() {
    return {
      uploadParams: {
        params: {
          UserName: this.getUser().UserName,
          Type: 1,
        },
        url: "/api/ali/Order/ImportOrder"
      }
    };
  },
  methods: {
    /**
     * 文件上传前，可以对文件做验证或者其他操作
     * @param files 文件信息
     * return bool
     */
    uploadBefore(files) {
      console.log(files);
      return true;
    },
    /**
     * 文件上传返回结果
     * @param response 响应结果
     */
    uploadResponse(response) {
      console.log(response);
    },
    getUser() {
      return Service.Util.GetLocalStorage(Service.Enum.CGT_ALI_USER);
    }
  }
};
</script>

