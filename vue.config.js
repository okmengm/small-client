module.exports = {

  /***
   lintOnSave:'false',关闭ESLint的规则检查
   输出提示错误,但项目继续运行
   */
  lintOnSave: "warning",


  //配置代理
  devServer: {
    proxy: {
      "/api": {  //只对请求路由以/api开头的请求进行代理转发
        target: "https://api.shop.eduwork.cn", //转发的目标
        changeOrigin: true //支持跨域
        // pathRewrite:{'^/api':''} //将路径中的api转换为空  本项目中不需要
      }
    }
  }

}
