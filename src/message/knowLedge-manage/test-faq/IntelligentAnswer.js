// 智能问答
export default class requestContent {
  constructor() {
    // 上送报文字段定义
    this.data = {
      AppId: '001',
      QuesContent: '',
      ResQuestion: '',
      MaxNum: ''
    }
    // 交易码，每次新建此文件，修改此处为对应的交易码即可
    this.TransServiceCode = 'kbs.trade.cb002.01';
  }
}
