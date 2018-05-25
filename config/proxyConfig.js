module.exports = {
  proxyList: {
    '/api': {
      target: 'http://127.0.0.1:5002', // 接口的域名
      secure: false, // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    }
  }
}
