<template>
<main>
  <el-row :gutter="24">
    <el-col>
      <ul>
        <li>
          <span>{{ weatherData.time }}</span>
          <span>{{ weatherData.day_weather }}</span>
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
  <section>
    <img src="../assets/image/fashion.jpg" alt srcset />
  </section>
</main>
</template>

<script>
import {
  weather
} from '@/static/http'
export default {
  components: {},
  data() {
    return {
      weatherData: {},
      params: {
        p: '上海市',
        c: '上海市',
        x: ''
      }
    }
  },
  created() {
    this.getWeatherInfo()
  },
  mounted() {

  },
  methods: {
    getForNowDate() {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      var time = ''
      if (m < 10) {
        time = y + '0' + m + d
      }
      if (d < 10) {
        time = y + '-' + m + '-' + '0' + d
      }
      if (m < 9 && d < 9) {
        time = y + '-' + '0' + m + '-' + +'0' + d
      }
      if (m > 9 && d > 9) {
        time = y + '-' + m + '-' + d
      }
      return time
    },
    getWeatherInfo() {
      weather(this.params).then(res => {
        if (res.status == 200) {
          if (res.data.status == 200) {
            if (res.data.data) {
              let weatherInfo = res.data.data
              this.weatherInfoList = weatherInfo.forecast_24h['0']
              let list = weatherInfo.forecast_24h
              if (JSON.stringify(weatherInfo.forecast_24h) !== '{}' && weatherInfo.forecast_24h !== null) {
                Object.keys(list).map(k => {
                  if (list[k].time == this.getForNowDate()) {
                    this.weatherData = list[k]
                  }
                })
              } else {
                this.weatherData = {
                  time: this.getForNowDate(),
                  day_weather: ''
                }
              }
            }
          } else {
            this.$message.error(res.data.msg);
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
li {}

h1 {
  color: red;
  font-size: 16px;
}

.btn {
  font-size: 16px;
}
</style>
