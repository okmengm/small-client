/**
 *  所有应用的接口请求函数
 */

//引入ajax.js中的实例对象,利用实例对象发送请求
import ajax from "./ajax.js";


//获取首页数据
export function get_index() {
  return ajax.get("/index");
}


