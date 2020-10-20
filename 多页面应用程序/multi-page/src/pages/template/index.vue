<template>
  <main>
    <el-row :gutter="24">
      <el-col :span="6">
        <ul>
          <li>
            <span>{{ weatherInfoList.time }}</span>
            <span>{{ weatherInfoList.day_weather }}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-input v-model="params.p" placeholder="请输入省份"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="params.c" placeholder="请输入城市"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="params.x" placeholder="请输入县名"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button @click="getWeatherInfo">查询天气</el-button>
      </el-col>
    </el-row>

    <header>
      <h1>首页</h1>
      <span class="iconfont icon-zhangdan"></span>
    </header>
    <button class="btn">
      我通过CDN引入使用jQuery库注册了点击事件，点击我试试
    </button>
    <el-row>
      <el-button
        v-for="(item, index) in btnArr"
        :type="item.type"
        :disabled="item.isabled"
        :key="index"
        >{{ item.id | serType }}</el-button
      >
    </el-row>
    <tabs></tabs>
    <section>
      <a href="login.html">Enter Login Page</a>
      <img src="../assets/image/fashion.jpg" alt srcset />
    </section>
  </main>
</template>
<script>
import tabs from '../components/Tabs'
import { weather } from '../static/http'
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
      weatherInfoList: {},
      params: {
        p: '上海市',
        c: '上海市',
        x: ''
      }
    }
  },
  created () {
    this.getWeatherInfo()
  },
  mounted () {

  },
  methods: {
    getWeatherInfo () {
      weather(this.params).then(res => {
        if (res.status == 200) {
          if (res.data.status == 200) {
            if (res.data.data) {
              let weatherInfo = res.data.data
              this.weatherInfoList = weatherInfo.forecast_24h['0']
              console.log(weatherInfo.forecast_24h['0'])
            }
          }
        }
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
li {
}
h1 {
  color: red;
  font-size: 16px;
}
.btn {
  font-size: 16px;
}
</style>