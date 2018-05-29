<template>
    <div class="form-group">
        <div class="input-group input-group-file">
            <input type="text" class="form-control" name="fileName" v-model="fileNames" disabled placeholder="请选择文件..." />
            <span class="input-group-btn">
                <span class="btn btn-success btn-file">
                    <i class="icon wb-upload" aria-hidden="true"></i>
                    <input type="file" ref="uploadFile" name="uploadFile" id="uploadFile" :multiple="isMultiple" @change="sunmitFile($event);" />
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import Service from "@/_common/index";
export default {
  name: "UploadComponent",
  props: ["beforeCallback", "uploadCallback", "url", "params", "isMultiple"],
  data() {
    return {
      fileNames: [],
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
      ],
      data: []
    };
  },
  methods: {
    sunmitFile($event) {
      let self = this;
      let files = $event.target.files;
      let next = true;
      /**
       * 上传文件前处理事件
       */
      if (!this.beforeCallback(files)) {
        next = false;
        this.clearUpload();
      }
      //上传前验证通过，执行上传
      if (next) {
        /**
         * 组织数据
         */
        let formData = new FormData();
        let jsonStr = JSON.stringify(
          Service.Encrypt.DataEncryption(this.params)
        );
        formData.append("formData", jsonStr);
        /**
         * 文件信息
         * @param isMultiple true 多文件上传
         */
        if (this.isMultiple) {
          for (let index = 0; index < files.length; index++) {
            const element = files[index];
            this.fileNames.push(element.name);
            formData.append("Files", element);
          }
        } else {
          formData.append("File", files[0]);
        }
        /**
         * 配置类型
         */
        let config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        /**
         * 发送数据到服务端
         */
        this.$http.post(this.url, formData, config).then(
          response => {
            self.uploadCallback(response);
          },
          error => {
            this.$tip(error);
            console.log(error);
          }
        );
      }

      this.clearUpload();
    },
    clearUpload() {
      this.$refs.uploadFile.value = null;
    },
    loadData(arr, level) {
      let i = 0;
      arr.forEach(element => {
        const item = element;
        if (level == item.value) {
          item.index = i + 1;
          this.data.push(item);
        } else if (item.children !== undefined && item.children.length > 0) {
          this.loadData(item.children, level);
        }
      });
    }
  },
  created() {
    // console.clear();
    // this.loadData(this.datas, 3);
    // console.log(this.data);
  }
};
</script>

