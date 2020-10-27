<template>
  <div>
    <el-container class="home" :style="'height:'+size.h+'px;width:'+size.w+'px;'">
      <!-- <el-container class="home"> -->
      <el-header style="height:3rem">
        <el-row>
          <el-col :span="9">
            <span class="text">知识随行小助手</span>
          </el-col>
          <el-col :span="9" :offset="6" style="line-height:4rem;margin-right:0;text-align:right;">
            <svg t="1528352909540" class="icon user-avatar" style="width:3rem;height:2.1rem;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1066" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64">
              <defs></defs>
              <path d="M393.846154 104.999385c108.544 0 196.923077 88.772923 196.923077 197.868307s-88.379077 197.868308-196.923077 197.868308-196.923077-88.772923-196.923077-197.868308 88.379077-197.868308 196.923077-197.868307m0-78.769231c-152.260923 0-275.692308 123.825231-275.692308 276.637538s123.431385 276.637538 275.692308 276.637539 275.692308-123.825231 275.692308-276.637539S546.107077 26.230154 393.846154 26.230154z" fill="#fff" p-id="1067"></path>
              <path d="M748.307692 1010.845538a39.384615 39.384615 0 0 1-39.384615-39.384615v-74.279385c0-174.473846-141.312-316.337231-315.076923-316.33723s-315.076923 141.863385-315.076923 316.33723v74.279385a39.384615 39.384615 0 0 1-78.769231 0v-74.279385c0-217.875692 176.679385-395.106462 393.846154-395.106461s393.846154 177.230769 393.846154 395.106461v74.279385a39.384615 39.384615 0 0 1-39.384616 39.384615zM776.349538 552.881231a39.384615 39.384615 0 0 1-6.774153-78.217846 119.020308 119.020308 0 0 0 47.261538-214.252308 117.681231 117.681231 0 0 0-88.221538-19.692308 39.384615 39.384615 0 0 1-13.784616-77.430154 194.875077 194.875077 0 0 1 147.219693 32.768 197.789538 197.789538 0 0 1-78.848 356.273231 50.254769 50.254769 0 0 1-6.852924 0.551385z" fill="#fff" p-id="1068"></path>
              <path d="M985.403077 876.465231a39.384615 39.384615 0 0 1-39.384615-39.384616v-56.004923a228.115692 228.115692 0 0 0-227.40677-228.27323 39.384615 39.384615 0 1 1 0-78.769231 306.963692 306.963692 0 0 1 306.176 307.042461v56.004923a39.384615 39.384615 0 0 1-39.384615 39.384616z" fill="#fff" p-id="1069"></path>
            </svg>
            <span style="color:#fff;">
              您好, {{userName}}!
            </span>
            <span>
              <el-tooltip class="item" effect="dark" content="最小化" placement="bottom">
                <el-button type="text" @click="min">
                  <svg t="1561605537284" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3250" width="20" height="20">
                    <path d="M410.112 513.664 97.664 513.664c-17.664 0-32 14.336-32 32s14.336 32 32 32l242.752 0-267.456 267.456c-12.032 12.032-12.032 31.36 0 43.392 11.968 11.968 31.36 11.968 43.328 0l269.376-269.376 0 246.592c0 17.664 14.336 32 32 32s32-14.336 32-32l0-320C449.664 521.6 435.84 513.664 410.112 513.664zM553.216 449.664l312.512 0c17.664 0 32-14.336 32-32s-14.336-32-32-32L622.912 385.664l267.456-267.456c12.032-12.032 12.032-31.36 0-43.392-11.968-11.968-31.36-11.968-43.328 0L577.664 344.256 577.664 97.664c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 320C513.664 438.144 529.664 449.664 553.216 449.664z" p-id="3251" fill="#ffffff"></path>
                  </svg>
                </el-button>
              </el-tooltip>
            </span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- <el-aside width="10rem" :style="'height:'+sizeHeight+'px;'">
          <el-aside width="10rem" :style="'height:'+screenHeight+'px;'">
            <div style="height:75%;width:9rem;margin-left:0.8rem;margin-top:1.5rem;">
              <el-steps direction="vertical" :active="3" process-status="progress" id="step" finish-status="success">
                <el-step :title="item.title" v-for="(item,index) in menuList" :key="index"></el-step>
              </el-steps>
            </div>
          </el-aside> -->
        <el-main :style="'height:'+sizeHeight+'px;width:'+size.w+'px;'">
          <!-- <el-main :style="'height:'+screenHeight+'px;'"> -->
          <el-tabs type="border-card" v-model="activeName" :style="'-webkit-app-region:no-drag;margin-left:10px;margin-right:10px;margin-top:5px;margin-botton:5px;min-height:'+ tabHeight +'px;'">
            <el-tab-pane name="notice" label="业务提示" >
              <div v-if="clusterName!=''" style="font-size:15px;margin-bottom:0.5rem;">
                <i class="el-icon-message-solid"></i>
                当前交易：{{clusterName}}
              </div>
              <el-card style="height:100%;">
                <div v-if="tips.length!=0">
                  <el-row v-for="(item,index) in tips" :key="index" style="margin-top:0.2rem;">
                    <el-col :span="24">
                      <div class="tip1" v-if="item.TipsType=='1'">
                        话术提示 : {{item.Content}}
                      </div>
                      <div class="tip" v-if="item.TipsType=='2'">
                        风险提示 : {{item.Content}}
                        <div style="margin-top:0.1rem" v-if="item.struct_hs.length!=0">
                          <div v-for="(value,index) in item.struct_hs" style="margin-left:0.8rem;" :key="index">
                            关联话术{{index+1}} : {{value.Content}}
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div v-else style="text-align:center;font-size:14px;color: #909399">暂无数据</div>
              </el-card>
            </el-tab-pane>
            <el-tab-pane name="kownledge" label="知识随行">
              <div v-if="clusterName!=''" style="font-size:15px;margin-bottom:0.5rem;">
                <i class="el-icon-message-solid"></i>
                当前交易：{{clusterName}}
              </div>
              <el-table :data="KnowledgeList" :show-header="false">
                <el-table-column width="40" type="index" :index="index">
                  <template slot-scope="scope">
                    <span v-if="scope.$index===0||scope.$index===1||scope.$index===2" class="hotIndex1">{{scope.$index+1}}</span>
                    <span v-if="scope.$index !==0&&scope.$index !==1&&scope.$index !==2" class="hotIndex">{{scope.$index+1}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="Question">
                </el-table-column>
                <el-table-column align="right">
                  <template slot-scope="scope">
                    <div>
                      <el-button size="mini" style="background-color:#11a5b1;border-color:#11a5b1;color:#fff;" @click="openAnswer(scope.row)">查看答案</el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane name="search" label="知识检索">
              <el-row>
                <el-col :span="5" style="margin-right:0;">
                  <!-- <el-input size="small" v-model="input" placeholder="搜索业务知识" @keyup.enter.native="getAnswer">
                    <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:6rem;">
                      <el-option label="问题" value="question"></el-option>
                      <el-option label="答案" value="answer"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search" @click="getAnswer"></el-button>
                  </el-input> -->
                   <el-select v-model="select" placeholder="请选择" size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="19">
                  <el-autocomplete style="width:70%;" v-model="input" size="small" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" @select="handleSelect" placeholder="搜索业务知识"  @keyup.enter.native="getAnswer">
                  </el-autocomplete>
                  <span>
                    <el-button  icon="el-icon-search" @click="getAnswer" size="mini"  style="background-color:#11a5b1;border-color:#11a5b1;color:#fff;"></el-button>
                  </span>
                </el-col>
              </el-row>
              <el-table :data="questionList" v-if="status==='0'" :show-header="false">
                <el-table-column prop="Question">
                </el-table-column>
                <el-table-column align="right">
                  <template slot-scope="scope">
                    <div>
                      <el-button size="mini" style="background-color:#11a5b1;border-color:#11a5b1;color:#fff;" @click="openAnswer(scope.row)">查看答案</el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 热点问题展示 -->
              <div v-if="status === '1'">
                <el-table :data="tableData" :show-header="false">
                  <el-table-column>
                    <template slot-scope="scope">
                      <span>{{scope.row.Question}}</span>
                      <span><img src="../../static/logo/hotPoint.png" alt="" class="img"></span>
                    </template>
                  </el-table-column>
                  <el-table-column align="right">
                    <template slot-scope="scope">
                      <div>
                        <el-button size="mini" style="background-color:#11a5b1;border-color:#11a5b1;color:#fff;" @click="openAnswer(scope.row)">查看答案</el-button>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <component :is="dialogList.answerDialog" :option="answerOption"></component>
    </el-container>
  </div>
</template>

<script>
import request from '@/utils/requestKnowledge'
import requestKnowledge from '@/utils/request'
import KnowledgeIndex from '@/message/knowLedge-manage/test-faq/knowledgeIndex'
import KnowledgePoint from '@/message/knowLedge-follow/knowledgePointsQuery'
import ClusterAdd from '@/message/knowLedge-follow/clusterAdd'
import ClusterQuery from '@/message/knowLedge-follow/clusterQuery'
import Tips from '@/message/knowLedge-follow/tips'
import answerDialog from './dialog/checkAnswer'
import setmessage from '@/utils/ipcCommunication'
import QuestionReturn from '@/message/knowLedge-manage/test-faq/questionReturn'
export default {
  name: 'Cvp',
  watch: {
    input(val) {
      if (val.length === 0) {
        this.status = '1'
      }
    },
    status(val) {
      if (val === '0') {
        this.questionList = []
      }
    },
    cspRes: {
      handler(val) {
        if (val.ret !== '') {
          console.log('上送消息')
          this.websocketToLogin()
          console.log('cspRes', val)
        }
      },
      deep: true
    }
  },
  mounted() {
    this.websocketToLogin()
  },
  beforeDestroy() {
    this.socketApi.onbeforeunload()
  },
  created() {
    setmessage('getsize')
    let ipcRenderer = window.electron.ipcRenderer
    ipcRenderer.on('main-process-messages', (event, arg) => {
      this.size = arg
      console.log('this.size', this.size)
      this.sizeHeight = this.size.h - 48
      this.sizeWidth = this.size.w - 160
      this.tabHeight = this.sizeHeight * 0.92
    })
    let fileN = './logs'
    console.log('文件名：' + fileN)
    fileNotExisted(fileN)
    let filemd5 = md5File('./logs/access.txt');
    console.log("filemd5",filemd5);
  },
  data() {
    return {
      tabHeight: '',
      options: [
        { value: 'question', label: '问题' },
        { value: 'answer', label: '答案' }
      ], // 智能检索搜索类型
      notice: '0', // 判断根据簇查询知识点是否成功
      knowledge: '0', // 判断根据簇查询知识点是否成功
      status: '1', // 判断智能检索下的热点问题是否显示
      clusterName: '', // 推送的簇名称
      input: '', // 智能检索搜索框
      size: {},
      sizeHeight: '',
      // sizeWidth: '',
      index: 1,
      userName: 'admin',
      quesname: '', // 知识检索问题名
      questionList: [],
      select: 'question',
      dialogList: {
        answerDialog // 问题详细的dialog
      },
      KnowledgeList: [], // 知识点
      activeName: 'notice', // tab名
      quesQuery: [],
      cspRes: { // 上送的消息
        ret: '',
        reason: '',
        name: '',
        serialnum: ''
      },
      tips: [], // 智能提示
      // screenHeight: document.documentElement.clientHeight,
      tableData: [],
      answerOption: {
        // ClusterId: '',
        clusterName: '',
        QuestionId: '',
        isShow: false,
        ques: '',
        answer: []
      }
    }
  },
  methods: {
    // queryString 为在框中输入的值
    // callback 回调函数,将处理好的数据推回
    querySearchAsync(queryString, callback) {
      if (queryString === '') {
        return false
      }
      let list = [{}]
      let resBody = new QuestionReturn()
      resBody.data.PartContent = queryString
      // let response = await request(resBody)
      // if (response.SYS_HEAD.ReturnCode === '000000') {
      //   for (let i of response.RSP_BODY.struct) {
      //     i.value = i.Question
      //   }
      //   console.log(response.RSP_BODY.struct)
      //   list = response.RSP_BODY.struct
      //   callback(list);
      // } else {
      //   this.$message({
      //     type: 'error',
      //     message: 'Tips请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
      //   });
      // }
      request(resBody)
        .then(response => {
          if (response.SYS_HEAD.ReturnCode === '000000') {
            for (let i of response.RSP_BODY.struct) {
              i.value = i.Question
            }
            console.log(response.RSP_BODY.struct)
            list = response.RSP_BODY.struct
            callback(list);
          } else {
            this.$message({
              type: 'error',
              message: '问题补全请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
            })
            logger.error('问题补全请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage)
          }
        })
        .catch(error => {
          console.log(error);
          logger.error('问题补全' + error)
        });
    },
    handleSelect(item) {
      this.getAnswer()
      this.status = '0'
    },
    // 最小化窗口
    min() {
      setmessage('min')
      logger.info('最小化')
    },
    // // 动态获取浏览器高度
    // get_bodyHeight() {
    //   const that = this
    //   window.onresize = () => {
    //     return (() => {
    //       window.screenHeight = document.documentElement.clientHeight
    //       that.screenHeight = window.screenHeight
    //     })()
    //   }
    // },
    // 接受回调函数
    getConfigResult(res) {
      if (res.name === 'AgentCvpLogin') {
        this.getKnownledgePoint()
        this.answerOption.isShow = false
        this.userName = res.agentname
        this.tips = []
        this.KnowledgeList = []
        this.input = ''
        this.clusterName = ''
        this.activeName = 'search'
        this.cspRes.ret = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
        this.cspRes.reason = '登录成功'
        this.cspRes.ret = 'success'
        console.log(this.cspRes)
        logger.info(res)
      } else if (res.name === 'StartClusterInfoPush') {
        this.activeName = 'notice'
        this.input = ''
        this.clusterName = res.cname
        console.log(res.cname)
        logger.info(res.cname)
        this.queryCluster(res.cname)
        this.cspRes.ret = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
      } else if (res.name === 'ClearClusterInfo') {
        this.activeName = 'search'
        this.tips = []
        this.answerOption.isShow = false
        this.KnowledgeList = []
        this.cspRes.ret = ''
        this.clusterName = ''
        this.input = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
        this.cspRes.reason = '簇信息清空成功'
        this.cspRes.ret = 'success'
        logger.info(res)
      } else if (res.name === 'HideWindow') {
        setmessage('min')
        this.cspRes.ret = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
        this.cspRes.reason = '隐藏窗口成功'
        this.cspRes.ret = 'success'
        logger.info('HideWindow')
      } else if (res.name === 'RestoreWindow') {
        setmessage('restore')
        this.cspRes.ret = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
        this.cspRes.reason = '恢复窗口成功'
        this.cspRes.ret = 'success'
        console.log('restore')
        logger.info('RestoreWindow')
      } else if (res.name === 'CloseWindow') {
        setmessage('close')
        this.cspRes.ret = ''
        this.cspRes.name = res.name
        this.cspRes.serialnum = res.serialnum
        this.cspRes.reason = '关闭窗口成功'
        this.cspRes.ret = 'success'
      }
    },
    websocketToLogin() {
      this.socketApi.sendSock(this.cspRes, this.getConfigResult)
      // agentData:发送的参数 this,getconfigResult :回调方法
    },
    // 知识点查询
    async getKnownledgePoint(name) {
      let resBody = new KnowledgePoint()
      resBody.data.ClusterName = name
      let response = await requestKnowledge(resBody)
      if (response.SYS_HEAD.ReturnCode === '000000') {
        if (name === undefined || name === '') {
          this.tableData = response.RSP_BODY.RspStruct
        } else {
          this.KnowledgeList = response.RSP_BODY.RspStruct
        }
        // console.log('知识点', response.RSP_BODY.RspStruct)
        this.knowledge = '1'
        if (this.notice === '1') {
          this.cspRes.reason = '簇推送成功'
          this.cspRes.ret = ''
          this.cspRes.ret = 'success'
          console.log('知识点查询')
        }
      } else {
        this.$message({
          type: 'error',
          message: '知识点请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        });
        this.knowledge = '0'
        this.cspRes.reason = '知识点请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        logger.error('知识点请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
      }
    },
    async getTips(name) {
      let resBody = new Tips()
      resBody.data.ClusterName = name
      let response = await requestKnowledge(resBody)
      if (response.SYS_HEAD.ReturnCode === '000000') {
        console.log(response.RSP_BODY.struct)
        this.notice = '1'
        this.tips = response.RSP_BODY.struct
        console.log('tips查询')
      } else {
        this.$message({
          type: 'error',
          message: 'Tips请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        });
        this.notice = '0'
        this.cspRes.reason = 'Tips请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        this.cspRes.ret = ''
        this.cspRes.ret = 'fail'
        logger.error('Tips请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
      }
    },
    // 查询簇是否存在，存在的话查询对应簇下的知识点和提示，不存在则新增
    async queryCluster(name) {
      let resBody = new ClusterQuery()
      resBody.data.ClusterName = name
      resBody.data.CurrPage = '1'
      resBody.data.PageRowNum = '10'
      resBody.data.SearchType = 'E' // 精确查找簇名称
      let response = await requestKnowledge(resBody)
      if (response.SYS_HEAD.ReturnCode === '000000') {
        console.log(response.RSP_BODY.TotalRowNum)
        if (response.RSP_BODY.TotalRowNum === 0) {
          console.log('新增')
          this.addCluster(name)
          return
        }
        this.getTips(name)
        this.getKnownledgePoint(name)
      } else {
        this.$message({
          type: 'error',
          message: '簇查询请求失败:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        })
        this.cspRes.reason = '簇查询请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        this.cspRes.ret = ''
        this.cspRes.ret = 'fail'
        logger.error('簇查询请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
      }
    },
    // 簇新增
    async addCluster(name) {
      let resBody = new ClusterAdd()
      resBody.data.ClusterName = name
      let response = await requestKnowledge(resBody)
      if (response.SYS_HEAD.ReturnCode === '000000') {
        console.log('新增成功', response)
        this.getTips(name)
        this.getKnownledgePoint(name)
      } else {
        this.$message({
          type: 'error',
          message: '新增簇请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        });
        this.cspRes.reason = '新增簇请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        this.cspRes.ret = ''
        this.cspRes.ret = 'fail'
        logger.error('簇新增请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
      }
    },
    openAnswer(row) {
      this.answerOption.clusterName = this.clusterName
      this.answerOption.QuestionId = row.QuestionId
      this.answerOption.ques = row.Question
      if (row.struct_ans === undefined) {
        this.quesname = row.Question
        this.getQuesAnswer()
      } else {
        this.answerOption.answer = row.struct_ans
        this.answerOption.isShow = true
      }
    },
    getAnswer() {
      this.questionList = []
      this.status = '0'
      let resBody = new KnowledgeIndex()
      resBody.data.PartContent = this.input
      resBody.data.ViewType = this.select
      request(resBody)
        .then(response => {
          if (response.SYS_HEAD.ReturnCode === '000000') {
            this.questionList = response.RSP_BODY.struct
            console.log('resContent', this.questionList)
          } else {
            this.$message({
              type: 'error',
              message: '请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
            });
            this.getKnownledgePoint()
            this.status = '1'
            logger.error('智能检索答案请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage)
          }
        })
        .catch(error => {
          console.log('error', error)
          logger.error('检索答案请求失败' + error)
        })
    },
    getQuesAnswer() {
      let list = []
      let resBody = new KnowledgeIndex();
      resBody.data.PartContent = this.quesname;
      resBody.data.IsLocalQry = '1'
      request(resBody)
        .then(response => {
          if (response.SYS_HEAD.ReturnCode === '000000') {
            list = response.RSP_BODY.struct
            this.answerOption.answer = list[0].struct_ans
            this.answerOption.isShow = true
            console.log('resContent', list);
          } else {
            this.$message({
              type: 'error',
              message: '请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
            });
            logger.error('智能检索答案请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
          }
        })
        .catch(error => {
          console.log('error', error);
          logger.error('智能检索答案请求失败' + error);
        })
    }
  }
}

</script>

<style lang="scss">
.home {
  height: 100%;

  .el-header {
    background: #11a5b1;
    line-height: 3rem;

    .text {
      font-size: 1.3rem;
      color: aliceblue;
    }
  }

  .el-aside {
    background: #f0f2f5;
    color: #333;
    text-align: center; // .el-steps .el-step.is-vertical .el-step__head.is-success {
    //   color: #f28748;
    //   border-color: #f28748 !important;
    // }
    // .el-step.is-vertical .el-step__main .el-step__title.is-success {
    //   color: #f28748 !important;
    // }
  }

  .el-main {
    padding: 5px;
    .el-tabs__nav-scroll .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
      color: #11a5b1 !important;
    }

    .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
      color: #11a5b1 !important;
    }

    .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
      color: #11a5b1 !important;
    }

    .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
      color: #11a5b1 !important;
    }

    .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
      color: #11a5b1 !important;
    }
    background: #e5e9f2;
    color: #333;

    .hotIndex {
      color: #f28748;
    }

    .hotIndex1 {
      color: #f28748;
      font-weight: bold;
      font-style: italic;
    }

    .tip1 {
      width: 95%;
      border-radius: 0.3rem;
      min-height: 1.8rem;
      line-height: 1.8rem;
      padding: 0.5rem;
      color: #628686;
      font-size: 0.85rem;
      border: 1px solid rgba(17, 165, 177, 0.5);
      background-color: rgba(17, 165, 177, 0.2);
    }

    .tip {
      width: 95%;
      border-radius: 0.3rem;
      min-height: 1.8rem;
      line-height: 1.8rem;
      padding: 0.5rem;
      color: #807361;
      font-size: 0.85rem;
      border: 1px solid rgba(242, 135, 73, 0.5);
      background-color: rgba(242, 135, 73, 0.2);
    }

    .img {
      width: 1rem;
      margin-left: -0.4rem;
      margin-top: -0.2rem;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .text {
      font-size: 0.9rem;
      color: #fff;
    }

    .clearfix:after {
      clear: both
    }
  }
}
</style>
