// 知识点查询
export default class requestContent {
  constructor() {
    // 上送报文字段定义
    this.data = {
      ClusterName: '',
      ValidChannel: ''
    }
    // 交易码，每次新建此文件，修改此处为对应的交易码即可
    this.TransServiceCode = 'kfw.trade.t002.01';
  }
}
