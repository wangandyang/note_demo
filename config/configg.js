// let url_config = ""

// if(process.env.NODE_ENV === 'development'){
//     // 开发环境
//     url_config = 'https://localhost:44378/'
// }else{
//     // 生产环境
//     url_config = 'https://localhost:44378/'
// }

// export default url_config
    let PRO = {
          COM: 'https://s.pro.xqapi.cn/',
          CDN: 'https://cdn.xqapi.cn/',
        };
    // 测试环境配置
    let FAT = {
      COM: 'https://s.fat.xqapi.cn/',
      CDN: 'https://cdn.xqapi.cn/',
    };
    开发环境配置
    let DEV = {
      COM: 'http://192.168.0.102:10441/',
      CDN: 'https://cdn.xqapi.cn/',
    };
    // 项目配置
    let CNF = {
      /**COM-接口域名
       */
      COM: '',
      /**JS图片前缀
       */
      CDN: '',
      /**在云信管理后台查看应用的appKey
       */
      NIM: '',
    };
    let cnf = Object.assign(CNF, DEV);
    
    export { cnf };
    