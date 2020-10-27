// 簇查询
export default class requestContent {
  constructor() {
  // 上送报文字段定义
    this.data = {
      ClusterId: '',
      ClusterName: '',
      PageFlag: '4',
      CurrPage: '',
      PageRowNum: '',
      SearchType: ''
    }
    // 交易码，每次新建此文件，修改此处为对应的交易码即可
    this.TransServiceCode = 'kfw.manage.k002.02'
  }
}
