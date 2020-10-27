<template>
  <el-dialog :visible.sync="isShow" title="查看答案" :close-on-click-modal="false" width="80%" @close="closeDialog" class="answer" style="color:#fff;">
    <el-card>
      <div>{{option.ques}}</div>
      <div v-for="(answer,index) in option.answer" :key="index" style="margin-top:25px">
        <div style="margin-top:5px" v-if="answer.AnsType=='text'">* 答案{{index+1}}:
          <!-- <p style="margin-left:1rem;">{{answer.AnsContent.content}}</p> -->
          <pre style="margin-left:1rem;">{{answer.AnsContent.content}}</pre>
        </div>
        <div style="margin-top:5px" v-if="answer.AnsType=='richText'">
          <p>* 答案{{index+1}}:</p>
          <div v-html="textFormat(answer.AnsContent.description)" class="ql-editor"></div>
        </div>
        <div style="margin-top:5px" v-if="answer.AnsType=='image'">* 答案{{index+1}}:
          <div style="margin-left:1rem;">
            <p>
              <img :src="answer.AnsContent.url" alt="" style="max-width:100%;">
            </p>
          </div>
        </div>
        <div style="margin-top:5px" v-if="answer.AnsType=='audio' || answer.AnsType=='video' || answer.AnsType=='file'">
          <p>* 答案{{index+1}}:</p>
          <a :href="answer.AnsContent.url" download="download">
            <el-button type="text">{{answer.AnsContent.url | fileFormat}}</el-button>
          </a>
        </div>
      </div>
      <div>
      <span slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="4" :offset="20" style="text-align:right;">
            <el-button type="text" size="mini" @click="like">
              <div class="like" style="-webkit-app-region:no-drag;"></div>
            </el-button>
            <el-button type="text" size="mini" @click="dislike">
              <div class="dislike" style="-webkit-app-region:no-drag;"></div>
            </el-button>
          </el-col>
        </el-row>
      </span>
      </div>
    </el-card>
  </el-dialog>

</template>

<script>

import HotQuestion from '@/message/knowLedge-follow/hotQuesManage'
import request from '@/utils/request'
// import request1 from '@/utils/requestKnowledge'
// import KnowledgeIndex from '@/message/knowLedge-manage/test-faq/knowledgeIndex'

export default {
  props: {
    option: Object
  },
  filters: {
    fileFormat(val) {
      var index = val.lastIndexOf('\/')
      var str = val.substring(index + 1, val.length)
      return str
    }
  },
  computed: {
    isShow: {
      get: function() {
        return this.option.isShow;
      },
      set: function(newVal) {
        this.option.isShow = newVal;
      }
    }
  },
  created() {
    console.log(this.dislikeUrl)
    console.log(this.option.answer)
  },
  mounted() {
    // console.log(this.option.answer)
  },
  data() {
    return {
      htmlString: '',
      quesQuery: [],
      quesname: '',
      satisfied: '',
      radio: '',
      likeUrl: '../../static/logo/like2.png',
      dislikeUrl: '../../static/logo/dislike2.png'
    }
  },
  methods: {
    textFormat(val) {
      val = val.replace(/\<img/gi, '<img style="max-width:100%;" ')
      // console.log(val)
      return val
    },
    // 热点问题维护
    async hotQuesManage() {
      let resBody = new HotQuestion()
      if (this.option.clusterName === '') {
        this.option.clusterName = ''
      }
      resBody.data.ClusterName = this.option.clusterName
      // resBody.data.ValidChannel = '*'
      resBody.data.QuestionId = this.option.QuestionId
      resBody.data.IsSatisfied = this.satisfied
      let response = await request(resBody)
      if (response.SYS_HEAD.ReturnCode === '000000') {
        console.log(response)
      } else {
        this.$message({
          type: 'error',
          message: '请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage
        });
        logger.error('热点问题维护请求失败，错误码:' + response.SYS_HEAD.ReturnCode + '，错误信息：' + response.SYS_HEAD.ReturnMessage);
      }
    },
    like() {
      this.satisfied = '1'
      this.option.isShow = false
      this.hotQuesManage()
    },
    dislike() {
      this.satisfied = '0'
      this.option.isShow = false
      this.hotQuesManage()
    },
    closeDialog() {
      this.likeUrl = '../../static/logo/like2.png'
      this.dislikeUrl = '../../static/logo/dislike2.png'
    }
  }
}

</script>

<style  lang="scss">
.el-dialog__wrapper{
  -webkit-app-region:no-drag;
}
.el-icon-close:before{
  color:#fff;
}
.el-dialog__title{
  color:#fff !important;
}
.el-dialog__header{
  background-color: #11a5b1;
}
  .like {
    background-image: url('../../../static/logo/like2.png');
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
  }
  pre{
    white-space:pre-wrap; /* css3.0 */
    white-space:-moz-pre-wrap; /* Firefox */
    white-space:-pre-wrap; /* Opera 4-6 */
    white-space:-o-pre-wrap; /* Opera 7 */
    word-wrap:break-word; /* Internet Explorer 5.5+ */
  }
  .dislike {
    background-image: url('../../../static/logo/dislike2.png');
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .like:hover {
    background-image: url('../../../static/logo/like1.png')
  }

  .dislike:hover {
    background-image: url('../../../static/logo/dislike1.png')
  }

</style>
