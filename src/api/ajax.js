/**
 * axios的二次封装
 */

//1.引入axios和nprogress
import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


//2.创建实例
const service = axios.create({
  baseURL: "/api", //基础路径
  timeout: 5000 //超时
});


//3.添加请求拦截器
service.interceptors.request.use((config) => {


  //请求之前,创建nprogress进度条
  NProgress.start();


  //必须返回config,否则请求发送不出去
  return config;
});

//4.添加响应拦截器
service.interceptors.response.use(response => {
    console.log("请求成功的回调");
    //在响应拦截器成功回调中,结束进度条
    NProgress.done();
    return response.data;
  },
  error => {
    console.log("请求失败的回调");
    //在响应拦截器成功回调中,结束进度条
    NProgress.done();

    //统一处理错误请求
    alert(error.message || "未知请求错误");
    //返回一个失败的Promise
    return Promise.reject(error);
  });

//5.向外暴露 service
export default service;
