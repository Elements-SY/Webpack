<template>
  <main>
    <header>
      <h1>首页</h1>
      <span class="iconfont icon-zhangdan"></span>
    </header>
    <button class="btn">我使用jQuery库注册了点击事件，点击我试试</button>
    <el-row>
      <el-button
        v-for="(item,index) in btnArr"
        :type="item.type"
        :disabled="item.isabled"
        :key="index"
      >{{item.id | serType}}</el-button>
    </el-row>
    <tabs></tabs>
    <section>
      <img src="../assets/image/fashion.jpg" alt srcset />
    </section>
  </main>
</template>
<script>
import tabs from '../components/Tabs.vue'
import { topics } from '../static/http'
export default {
  components: {
    tabs
  },
  data () {
    return {
      btnArr: [
        {
          id: '01',
          name: '主要按钮',
          type: 'primary',
          isabled: false
        }, {
          id: '02',
          name: '成功按钮',
          type: 'success',
          isabled: false
        }, {
          id: '03',
          name: '信息按钮',
          type: 'info',
          isabled: false
        }, {
          id: '04',
          name: '警告按钮',
          type: 'warning',
          isabled: false
        }, {
          id: '05',
          name: '危险按钮',
          type: 'danger',
          isabled: true
        }
      ],
      params: {
        page: 1,
        tab: 'job',
        limit: 1
      }
    }
  },
  created () {
    this.sum()
  },
  mounted () {

  },
  methods: {
    sum () {
      topics(this.params).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  watch: {

  },
}
</script>
<style lang="css" scoped>
h1 {
  color: red;
  font-size: 16px;
}
.btn {
  font-size: 16px;
}
</style>