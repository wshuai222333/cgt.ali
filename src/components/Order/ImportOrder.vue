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
                                <div class="form-group">
                                    <div class="input-group input-group-file">
                                        <input type="text" class="form-control" name="fileNames" v-model="fileNames" disabled placeholder="请选择文件..." />
                                        <span class="input-group-btn">
                                            <span class="btn btn-success btn-file">
                                                <i class="icon wb-upload" aria-hidden="true"></i>
                                                <input type="file" name="OrderFile" id="OrderFile" @change="getOrderFile($event);" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
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
import UtilService from "@/_common/util.service";
import EnumService from "@/_common/enum.service";
import BusinesService from "@/_common/busines.service";
import Service from "@/_common/index";
export default {
  name: "ImportOrderComponent",
  data() {
    return {
      fileList: [],
      fileNames: "",
      datas: [
        {
          value: "1",
          label: "资源",
          children: [
            {
              value: "2",
              label: "资源",
              children: [
                {
                  value: "3",
                  label: "资源"
                }
              ]
            }
          ]
        },
        {
          value: "4",
          label: "资源",
          children: [
            {
              value: "5",
              label: "资源",
              children: [
                {
                  value: "6",
                  label: "资源"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    getOrderFile($event) {
      /**
       * 获取文件信息
       */
      let files = $event.target.files;
      let filesLength = files.length;
      for (let index = 0; index < filesLength; index++) {
        const file = files[index];
        if (this.fileNames != "") this.fileNames += ",";
        this.fileNames += file.name;
        this.fileList.push(file);
      }
      /**
       * 添加表单数据
       */
      let userData = Service.Util.GetLocalStorage(Service.Enum.CGT_ALI_USER);
      let params = {
        UserId: "3291",
        UserName: "fukaihang"
      };
      let formData = new FormData();
      formData.append("formData", JSON.stringify(params));
      formData.append("File", this.fileList[0]);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      this.$http
        .post("/api/ali/Order/ImportOrder", formData, config)
        .then(response => {}, error => {});
    }
  }
};
</script>

